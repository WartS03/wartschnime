import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const  { pathname }  = req.nextUrl
    const id = pathname.split('/').pop();
    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "Missing id parameter" })
    }
    try {
      const response = await fetch(`https://wartsanimeapi.vercel.app/api/anime/${id}`);
      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch data' });
    }
  }