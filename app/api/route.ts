import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
      const response = await fetch('https://wartsanimeapi.vercel.app/api');
      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch data' });
    }
  }