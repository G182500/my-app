import { NextRequest, NextResponse } from "next/server";
import { User } from "@/interfaces/user";
import fs from "fs"; //Trabalhar com arquivos

export async function GET(req: NextRequest) {}

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
    const found = data.find(({ user }) => {
      return user.user === userInput && user.password === passwordInput;
    });
    if (found !== undefined) {
      return NextResponse.json(
        { message: "Usuário encontrado", user: found },
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
}

//return NextResponse.json({ my: "data" }, { status: 200 });
//return NextResponse.redirect(new URL('/new', request.url))
