// src/app/api/pulse/[...path]/route.ts
import type { NextRequest } from "next/server";

const UP = "https://api.useportpulse.com";

/* ----------------------------- Helpers ---------------------------------- */

/** 是否趋势端点：/v1/ports/{code}/trend */
function isTrendPath(u: URL) {
  return /\/v1\/ports\/[^/]+\/trend$/.test(u.pathname);
}

/** 最近 N 天的 YYYY-MM-DD */
function recentDays(n: number) {
  const out: string[] = [];
  const d = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const t = new Date(d);
    t.setDate(d.getDate() - i);
    out.push(t.toISOString().slice(0, 10));
  }
  return out;
}

/** 统一的演示行类型（无 any） */
type TrendRow = { date: string; avg_wait_hours: number; congestion_score?: number };

/** 构造演示趋势数据（兼容 days=14 / window=30d 与 fields=...） */
function buildDemoTrend(url: URL): TrendRow[] {
  const sp = url.searchParams;
  const daysParam = sp.get("days") || (sp.get("window") || "").replace(/d$/i, "");
  const n = Math.max(7, Math.min(30, Number(daysParam) || 14));

  const needCong = (sp.get("fields") || "")
    .split(",")
    .map((s) => s.trim())
    .includes("congestion_score");

  const dates = recentDays(n);
  const base = 18; // 小时
  let val = base;

  return dates.map((date, i) => {
    val = Math.max(8, Math.min(42, val + (Math.sin(i / 2) * 2 + (Math.random() - 0.5) * 2)));
    const row: TrendRow = { date, avg_wait_hours: Number(val.toFixed(1)) };
    if (needCong) row.congestion_score = Number(Math.min(1, Math.max(0, (val - 10) / 40)).toFixed(2));
    return row;
  });
}

/** 简单 CSV 序列化（两列或三列） */
function toCSV(rows: TrendRow[]) {
  const hasCong = rows.length > 0 && rows[0].congestion_score !== undefined;
  const header = hasCong
    ? "date,avg_wait_hours,congestion_score\n"
    : "date,avg_wait_hours\n";
  const lines = rows
    .map((r) =>
      hasCong
        ? `${r.date},${r.avg_wait_hours},${r.congestion_score ?? ""}`
        : `${r.date},${r.avg_wait_hours}`
    )
    .join("\n");
  return header + lines + "\n";
}

/** 是否期望 CSV */
function wantsCSV(req: NextRequest, url: URL) {
  const a = (req.headers.get("accept") || "").toLowerCase();
  return a.includes("text/csv") || (url.searchParams.get("format") || "").toLowerCase() === "csv";
}

/* ------------------------------ Proxy ----------------------------------- */

type P = { path?: string[] };

export const dynamic = "force-dynamic";

async function proxy(req: NextRequest, ctx: { params: Promise<P> }) {
  const { path = [] } = await ctx.params;

  // 组装上游 URL（保留查询参数）
  const url = new URL(UP.replace(/\/+$/, "") + "/" + path.map(encodeURIComponent).join("/"));
  req.nextUrl.searchParams.forEach((v, k) => url.searchParams.set(k, v));

  // 取 Key：优先请求头，其次环境变量
  const key =
    req.headers.get("x-api-key") ??
    process.env.NEXT_PUBLIC_DEMO_API_KEY ??
    process.env.PULSE_DEMO_KEY ??
    "demo_key";

  try {
    const upstream = await fetch(url.toString(), {
      headers: {
        "X-API-Key": key,
        "Accept": req.headers.get("accept") || "application/json,text/csv,*/*",
      },
      next: { revalidate: 300 },
    });

    // 401/403 时，仅对 trend 端点做演示兜底
    if ((upstream.status === 401 || upstream.status === 403) && isTrendPath(url)) {
      const demo = buildDemoTrend(url);
      if (wantsCSV(req, url)) {
        return new Response(toCSV(demo), {
          status: 200,
          headers: {
            "content-type": "text/csv; charset=utf-8",
            "cache-control": "public, max-age=60",
            "x-demo": "1",
          },
        });
      }
      return Response.json(demo, {
        status: 200,
        headers: { "cache-control": "public, max-age=60", "x-demo": "1" },
      });
    }

    // 透传上游响应（剔除 hop-by-hop）
    const headers = new Headers(upstream.headers);
    headers.delete("transfer-encoding");
    headers.delete("connection");
    return new Response(upstream.body, { status: upstream.status, headers });
  } catch {
    // 网络异常：仅 trend 端点兜底
    if (isTrendPath(url)) {
      const demo = buildDemoTrend(url);
      if (wantsCSV(req, url)) {
        return new Response(toCSV(demo), {
          status: 200,
          headers: {
            "content-type": "text/csv; charset=utf-8",
            "cache-control": "public, max-age=60",
            "x-demo": "1",
          },
        });
      }
      return Response.json(demo, {
        status: 200,
        headers: { "cache-control": "public, max-age=60", "x-demo": "1" },
      });
    }
    return new Response("Upstream unavailable", { status: 502 });
  }
}

export async function GET(req: NextRequest, ctx: { params: Promise<P> }) {
  return proxy(req, ctx);
}

export async function HEAD(req: NextRequest, ctx: { params: Promise<P> }) {
  // HEAD：复用 proxy，但移除 body
  const res = await proxy(req, ctx);
  return new Response(null, { status: res.status, headers: res.headers });
}