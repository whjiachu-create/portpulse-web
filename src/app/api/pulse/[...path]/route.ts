import { NextRequest, NextResponse } from "next/server";

type ParamsP = Promise<{ path: string[] }>;

const UPSTREAM = process.env.NEXT_PUBLIC_API_UPSTREAM || "https://api.useportpulse.com";

function corsHeaders() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS",
    "access-control-allow-headers": "Content-Type, X-API-Key, If-None-Match",
  };
}

async function proxy(req: NextRequest, paramsP: ParamsP): Promise<Response> {
  const { path } = await paramsP;
  const u = new URL(req.url);
  const rest = "/" + (path ?? []).join("/");
  const target = new URL(rest + (u.search || ""), UPSTREAM);

  // 透传必要头
  const headers = new Headers();
  const copyHeaders = ["content-type", "x-api-key", "if-none-match"];
  copyHeaders.forEach((k) => {
    const v = req.headers.get(k);
    if (v) headers.set(k, v);
  });

  // 发起上游请求
  try {
    const r = await fetch(target, {
      method: req.method,
      headers,
      body: req.method === "GET" || req.method === "HEAD" ? undefined : await req.blob(),
      cache: "no-store",
      redirect: "manual",
    });

    // 透传响应 & ETag
    const out = new NextResponse(r.body, {
      status: r.status,
      headers: r.headers,
    });
    Object.entries(corsHeaders()).forEach(([k, v]) => out.headers.set(k, v));
    return out;
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "proxy_fetch_failed", hint: String(err) },
      { status: 502, headers: corsHeaders() }
    );
  }
}

export async function GET(req: NextRequest, ctx: { params: ParamsP }) {
  return proxy(req, ctx.params);
}
export async function HEAD(req: NextRequest, ctx: { params: ParamsP }) {
  return proxy(req, ctx.params);
}
export async function POST(req: NextRequest, ctx: { params: ParamsP }) {
  return proxy(req, ctx.params);
}
export async function PUT(req: NextRequest, ctx: { params: ParamsP }) {
  return proxy(req, ctx.params);
}
export async function PATCH(req: NextRequest, ctx: { params: ParamsP }) {
  return proxy(req, ctx.params);
}
export async function DELETE(req: NextRequest, ctx: { params: ParamsP }) {
  return proxy(req, ctx.params);
}
export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}
