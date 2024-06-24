import { Pool } from "pg";

export async function POST(req: Request) {
  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    //Example: postgres://user:password@host:port/database
  });
  const client = await pool.connect();

  const { _id, images_url, title, description, price, category, quantity } =
    await req.json();

  const insertProduct = await client.query(
    `INSERT INTO products (_id, images_url, title, description, price, category, quantity) VALUES ('${_id}', '${images_url}', '${title}', '${description}', ${price}, '${category}', ${quantity})`
  );
  client.release();

  console.log(insertProduct);
  if (!insertProduct.rows.length)
    return Response.json({ message: "Erro ao criar produto" }, { status: 500 });

  return Response.json(
    { message: "Produto criado com sucesso" },
    { status: 200 }
  );
}
