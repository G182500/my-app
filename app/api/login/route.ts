import { Pool } from "pg";

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  data?: {
    token: string;
    user: any;
  };
}

export async function POST(req: Request) {
  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    //Example: postgres://user:password@host:port/database
  });
  const client = await pool.connect();

  const { username, password }: LoginParams = await req.json();
  const checkUser = await client.query(
    `SELECT * FROM user WHERE username = '${username}' AND _password = '${password}'`
  );
  client.release();

  if (!checkUser.rows.length)
    return Response.json(
      { message: "Usuário ou senha inválidos" },
      { status: 404 }
    );

  const token = "1ab2cd3ef4gh5ij";
  const user = checkUser.rows[0];
  return Response.json(
    { message: "Usuário encontrado", data: { token, user } },
    { status: 200 }
  );
}
