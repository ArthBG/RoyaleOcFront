
import axios from 'axios';

import { NextResponse } from 'next/server';


const url = process.env.BASE_URL + "cards";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const rarity = searchParams.get("rarity")
    const elixir = searchParams.get("elixir")
    const type = searchParams.get("type")
    console.log(rarity, elixir, type)
    
    try {
        if(rarity || elixir || type){
            const elixirCondition = elixir === undefined || elixir === null ? "" : `elixir=${elixir}`
            const rarityCondition = rarity === undefined || rarity === null ? "" : `&rarity=${rarity}`
            const typeCondition = type === undefined || type === null ? "" : `&type=${type}`
            const response = await axios.get(`${url}?${elixirCondition}${rarityCondition}${typeCondition}`);
            return NextResponse.json(response.data);
        }else{
            const response = await axios.get(`${url}`);
            return NextResponse.json(response.data);
        }
    } catch (error) {
        console.log("[ORDER_GET]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
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
