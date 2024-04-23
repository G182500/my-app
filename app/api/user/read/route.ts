import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {}

export async function POST(req: NextRequest) {
  try {
    //Fazer senha encriptada depois
    const params: { user: string; password: string } = await req.json();
    console.log(params);
    return NextResponse.json({ my: "data" }, { status: 200 });
  } catch (error) {}
}

//return NextResponse.redirect(new URL('/new', request.url))
