import type { NextRequest } from "next/server";
const UP = "https://api.useportpulse.com";

type P = { path?: string[] };

async function proxy(req: NextRequest, ctx: { params: Promise<P> }) {
  const { path = [] } = await ctx.params;                           // ★ 关键修复：await params
  const url = new URL(UP + "/" + path.join("/"));
  req.nextUrl.searchParams.forEach((v, k) => url.searchParams.set(k, v));

  const key = req.headers.get("x-api-key") ?? process.env.NEXT_PUBLIC_DEMO_API_KEY ?? "demo_key";
  const r = await fetch(url.toString(), {
    headers: { "X-API-Key": key, "Accept": "application/json,text/csv,*/*" },
    next: { revalidate: 300 }
  });
  return new Response(r.body, { status: r.status, headers: r.headers });
}

export const dynamic = "force-dynamic";
export async function GET(req: NextRequest, ctx: { params: Promise<P> }) { return proxy(req, ctx); }
export async function HEAD(req: NextRequest, ctx: { params: Promise<P> }) { return proxy(req, ctx); }
