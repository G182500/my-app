import { NextRequest, NextResponse } from "next/server";
import { User } from "@/interfaces/user";
import fs from "fs"; //Trabalhar com arquivos

export async function GET(req: NextRequest) { }

export async function POST(req: NextRequest) {
    try {
        const { nameFilter: userSearch }: { nameFilter: string } = await req.json();

        const jsonData = fs.readFileSync("assets/json/users.json", "utf-8");
        const data: User[] = JSON.parse(jsonData);

        if (userSearch) { //userSearch != ""
            const upperCase = userSearch.toUpperCase();

            const found = data.filter((user) => {
                const upperName = user.name.toUpperCase();
                return upperName.includes(upperCase);
            });

            if (found.length === 0) {
                return NextResponse.json(
                    { message: "Sem dados", users: found },
                    { status: 200 }
                );
            }
            return NextResponse.json(
                { message: "Usuário(s) encontrado(s)", users: found },
                { status: 200 }
            );
        }

        //Retornar todos os usuarios
        return NextResponse.json(
            { message: "Usuário(s) encontrado(s)", users: data },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
