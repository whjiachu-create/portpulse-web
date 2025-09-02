const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";
const DEMO_KEY = process.env.NEXT_PUBLIC_DEMO_API_KEY || "dev_demo_123";

export async function GET(req: Request, ctx: { params: { path?: string[] } }) {
  const path = (ctx.params.path || []).join("/");
  if (!path) return new Response("Not Found", { status: 404 });

  const url = new URL(req.url);
  const upstream = `${API_BASE}/${path}${url.search}`;

  const r = await fetch(upstream, {
    headers: { "X-API-Key": DEMO_KEY },
    cache: "no-store",
  });

  const headers = new Headers();
  headers.set("content-type", r.headers.get("content-type") || "application/json; charset=utf-8");
  headers.set("cache-control", "no-store");

  return new Response(await r.arrayBuffer(), { status: r.status, headers });
}
