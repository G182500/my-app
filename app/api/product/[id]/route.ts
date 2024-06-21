import { Pool } from "pg";

export interface CreateUserResponse {
  message: string;
}

export async function POST(req: Request) {
  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    //Example: postgres://user:password@host:port/database
  });
  const client = await pool.connect();

  //const id = ;
  //const username = ;
  //const password = ;
  //const permission = ;*/
  //const { username, password }: LoginParams = await req.json();
  const createUser = await client.query(
    `INSERT INTO users (_id, username, _password, _permission) VALUES ('${id}','${username}','${password}','${permission}'`
  );
  client.release();

  //https://www.youtube.com/watch?v=pvrKHpXGO8E&t=3335s
  //const token = "1ab2cd3ef4gh5ij";
  console.log(createUser.rows[0]);
  return Response.json(
    { message: "Usuário criado com sucesso" },
    { status: 200 }
  );
}
