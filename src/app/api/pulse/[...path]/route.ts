import { NextRequest } from "next/server";

const RAW_BASE = process.env.NEXT_PUBLIC_API_BASE;
const DEFAULT_BASE = "https://api.useportpulse.com";
const BASE = RAW_BASE && /^https?:\/\//i.test(RAW_BASE) ? RAW_BASE.replace(/\/+$/, "") : DEFAULT_BASE;
const DEMO = process.env.NEXT_PUBLIC_DEMO_API_KEY || "dev_demo_123";

async function proxy(req: NextRequest, segs: string[]) {
  const path = segs?.filter(Boolean).join("/");
  const url = new URL(`${BASE}/${path}`);
  // 透传查询参数
  req.nextUrl.searchParams.forEach((v, k) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${DEMO}`,
      Accept: "application/json",
    },
    // 轻缓存，减抖动
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

export async function GET(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;     // Next 15：params 是 Promise，需 await
  return proxy(req, path || []);
}
