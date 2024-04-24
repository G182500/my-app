import { NextRequest, NextResponse } from "next/server";
import fs from "fs"; //Trabalhar com arquivos

interface Login {
  user: string;
  password: string;
}

export async function GET(req: NextRequest) {}

export async function POST(req: NextRequest) {
  try {
    //Fazer senha encriptada depois
    const { user: userInput, password: passwordInput }: Login =
      await req.json();

    //Acessar a simulação do banco de dados
    const jsonData = fs.readFileSync("app/assets/json/users.json", "utf-8");
    const data: Login[] = JSON.parse(jsonData); //JSON to object

    //Pesquisar o usuário
    const found = data.find(({ user, password }) => {
      return user === userInput && password === passwordInput;
    });
    if (found === undefined) {
      return NextResponse.json(
        { message: "User not founded" },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        { message: "User founded", user: found },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

//return NextResponse.json({ my: "data" }, { status: 200 });
//return NextResponse.redirect(new URL('/new', request.url))
