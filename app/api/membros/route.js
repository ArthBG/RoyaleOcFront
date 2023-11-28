import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.base_URL + "membros";

export async function GET() {
  try {
    const response = await axios.get(url);

    return NextResponse.json(response.data);
  }  catch (error) {
    console.error("[ORDER_POST]", error);
    return new NextResponse(`Erro interno do servidor: ${error.message}`, { status: 500 });
  }
}
  


export async function POST(request) {
  const params = await request.json();

  try {
    const response = await axios.post(url, params);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_POST]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

