import { NextRequest } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";
const DEMO = process.env.NEXT_PUBLIC_DEMO_API_KEY || "dev_demo_123";

async function proxy(req: NextRequest, path: string[]) {
  const url = new URL(`${BASE}/${path.join("/")}`);
  // 透传查询参数
  req.nextUrl.searchParams.forEach((v, k) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${DEMO}` },
    // 适度缓存以减小抖动（5 分钟）
    next: { revalidate: 300 },
  });
  return new Response(res.body, {
    status: res.status,
    headers: {
      "content-type": res.headers.get("content-type") ?? "application/json",
      "cache-control": res.headers.get("cache-control") ?? "public, max-age=300",
    },
  });
}

export async function GET(req: NextRequest, { params }: { params: { path: string[] } }) {
  return proxy(req, params.path);
}
