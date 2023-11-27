import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "/sobrenos";

export async function GET() {

    try {
        const response = await axios.get(url);

        return NextResponse.json(response.data);
    } catch (error) {
        console.log(error);
        return new NextResponse("Erro ao buscar o sobrenos", { status: 500 });

    }
}

export async function POST(request) {
    const params = await request.json();

    try {
        const response = await axios.put(url, params);

        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_POST]", error);
        return new NextResponse("Erro ao atualizar o sobrenos", { status: 500 });

    }
}







