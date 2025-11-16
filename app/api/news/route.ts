import { NextResponse } from "next/server";
import { fetchNewsFromRSS } from "@/lib/rss-parser";

export async function GET() {
  try {
    const news = await fetchNewsFromRSS();
    return NextResponse.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

