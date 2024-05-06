//import postgres from "postgres";
import { Pool } from "pg"; //PostgreSQL
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/interfaces/user";
import fs from "fs"; //Trabalhar com arquivos

/*
const connection = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
});*/

export async function POST(req: NextRequest) {
  try {
    const {
      user: emailInput,
    }: {
      user: string;
      password: string;
    } = await req.json();

    const pool = new Pool({
      connectionString: process.env.CONNECTION_STRING, //postgres://user:password@host:port/database
    });
    const client = await pool.connect();

    console.log(
      client.query(`SELECT * FROM users WHERE email = ${emailInput}`)
    );

    return NextResponse.json(
      { message: "Usuário(s) encontrado(s)", user: [] },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

/*

import { NextRequest, NextResponse } from "next/server";
import { User } from "@/interfaces/user";
import fs from "fs"; //Trabalhar com arquivos

export async function POST(req: NextRequest) {
  try {
    //Fazer senha encriptada depois
    const {
      user: userInput,
      password: passwordInput,
    }: {
      user: string;
      password: string;
    } = await req.json();

    //Acessar a simulação do banco de dados
    const jsonData = fs.readFileSync("assets/json/users.json", "utf-8");
    const data: User[] = JSON.parse(jsonData); //JSON to object

    //Pesquisar o usuário
    const found = data.find((user) => {
      return user.user === userInput && user.password === passwordInput;
    });
    if (found !== undefined) {
      const token = "3A762K4"; //Gerar token aleatorio

      return NextResponse.json(
        { message: "Usuário encontrado", session: { token, user: found } },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Usuário não encontrado" },
        { status: 404 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}*/

//return NextResponse.json({ my: "data" }, { status: 200 });
//return NextResponse.redirect(new URL('/new', request.url))
