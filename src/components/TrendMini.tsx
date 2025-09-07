"use client";

import { useEffect, useState } from "react";

type Point = { date: string; avg_wait_hours?: number; vessels?: number; congestion_score?: number };

export default function TrendMini({ unlocode, days = 14 }: { unlocode: string; days?: number }) {
  const [data, setData] = useState<Point[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    const base = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";
    const url = `${base}/v1/ports/${unlocode}/trend?days=${days}&fields=avg_wait_hours,date`;

    fetch(url, {
      signal: ctrl.signal,
      headers: { "X-API-Key": process.env.NEXT_PUBLIC_DEMO_API_KEY || "demo_key" },
      cache: "no-store",
    })
      .then(async (r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        const j = await r.json();
        setData(j.points || j.items || []);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setErr(e.message);
      });

    return () => ctrl.abort();
  }, [unlocode, days]);

  if (err) return <div className="text-red-600 text-sm">Failed to load: {err}</div>;
  if (!data) return <div className="h-28 rounded-xl bg-slate-100 animate-pulse" />;

  const vals = data.map((d) => d.avg_wait_hours ?? 0);
  const n = Math.max(vals.length, 2);
  const W = 320, H = 112, PAD = 12;
  const max = Math.max(...vals, 1), min = Math.min(...vals, 0);
  const range = max - min || 1;
  const pts = vals.map((v, i) => {
    const x = PAD + (i / (n - 1)) * (W - PAD * 2);
    const y = PAD + (1 - (v - min) / range) * (H - PAD * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-28 rounded-lg bg-white">
        <polyline points={pts} fill="none" strokeWidth="2" className="text-sky-600" stroke="currentColor" />
      </svg>
      <div className="absolute right-2 top-2 text-[11px] text-slate-500">
        <a href="/docs/api" className="underline">OpenAPI</a>
      </div>
    </div>
  );
}
