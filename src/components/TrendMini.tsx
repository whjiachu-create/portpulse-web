"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type Pt = { ts: string | number; v: number };

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";
const DEMO_KEY = process.env.NEXT_PUBLIC_DEMO_API_KEY || "dev_demo_123";

export default function TrendMini({ unlocode, days = 7, height = 224 }: { unlocode: string; days?: number; height?: number }) {
    const [data, setData] = useState<Pt[]>([]);
    const [err, setErr] = useState<string | null>(null);

    type TrendPoint = { date: string; congestion_score?: number; vessels?: number };
    type TrendResponse = { points?: TrendPoint[] };

    useEffect(() => {
        let disposed = false;
        (async () => {
            try {
                const res = await fetch(`${API_BASE}/v1/ports/${unlocode}/trend?days=${days}`, {
                    headers: DEMO_KEY ? { "X-API-Key": DEMO_KEY } : {},
                    next: { revalidate: 60 },
                });
                if (!res.ok) throw new Error(`${res.status}`);
                const j = (await res.json()) as TrendResponse;
                const pts: Pt[] = (j.points ?? []).map((p) => ({
                    ts: p.date,
                    v: typeof p.congestion_score === "number" ? p.congestion_score : typeof p.vessels === "number" ? p.vessels : 0,
                }));
                if (!disposed) { setData(pts); setErr(null); }
            } catch (e) {
                if (!disposed) setErr(e instanceof Error ? e.message : String(e));
            }
        })();
        return () => { disposed = true; };
    }, [unlocode, days]);

    return (
        <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
                <div className="text-sm font-medium">{unlocode} · {days}-day trend</div>
                <a className="text-xs text-slate-500 hover:text-slate-700" href="https://docs.useportpulse.com/openapi.json" target="_blank" rel="noreferrer noopener">OpenAPI</a>
            </div>
            <div className="px-3" style={{ height }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="ts" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                        <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="v" strokeWidth={2} dot={false} isAnimationActive={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="px-4 py-3 text-xs text-rose-600">{err ? `Failed to load: ${err}` : "\u00A0"}</div>
            <div className="px-3 pb-3">
                <pre className="whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-3 text-[11px] leading-relaxed">
                    {`curl -sS -H "X-API-Key: ${DEMO_KEY}" "${API_BASE}/v1/ports/${unlocode}/trend?days=${days}" | jq .`}
                </pre>
            </div>
        </div>
    );
}