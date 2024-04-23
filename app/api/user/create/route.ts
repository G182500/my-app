import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {}

export async function POST(request: NextRequest) {
  return NextResponse.json({ my: "data" }, { status: 200 });
}

//return NextResponse.redirect(new URL('/new', request.url))
