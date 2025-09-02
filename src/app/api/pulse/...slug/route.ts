import { NextRequest, NextResponse } from "next/server";

const UPSTREAM = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";
const DEMO_KEY = process.env.NEXT_PUBLIC_DEMO_API_KEY || "";

export async function GET(req: NextRequest, { params }: { params: { slug: string[] } }) {
    const url = `${UPSTREAM}/${(params.slug || []).join("/")}${req.nextUrl.search}`;
    const r = await fetch(url, {
        // 浏览器演示用；生产别暴露 key（或校验来源/限流）
        headers: DEMO_KEY ? { "X-API-Key": DEMO_KEY } : {},
        // 适度缓存，稳一些
        next: { revalidate: 60 },
    });
    return new NextResponse(r.body, { status: r.status, headers: r.headers });
}

// 需要的话可继续导出 POST/PUT/DELETE，当前演示只要 GET