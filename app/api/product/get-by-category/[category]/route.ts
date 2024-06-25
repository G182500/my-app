import { Pool } from "pg";

interface Params {
  category: string;
}

/*SELECT *
FROM sua_tabela
ORDER BY RANDOM()
LIMIT 3;*/

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const pool = new Pool({
      connectionString: process.env.CONNECTION_STRING,
      //Ex: postgres://user:password@host:port/database
    });
    const client = await pool.connect();

    const { category } = params;
    const productsByCategory = await client.query(
      `SELECT * FROM products WHERE category = '${category}' ORDER BY RANDOM() LIMIT 3`
    );

    client.release(); //close connection

    return Response.json(
      {
        message: "sucesso ao buscar os produtos",
        products: productsByCategory.rows,
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { message: "erro ao buscar os produtos" },
      { status: 500 }
    );
  }
}
