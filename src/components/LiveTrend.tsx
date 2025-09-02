// src/components/LiveTrend.tsx
"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";
const DEMO_KEY = process.env.NEXT_PUBLIC_DEMO_API_KEY || "dev_demo_123";

type Point = { ts: string; v: number };
type TrendPoint = { date: string; congestion_score?: number; vessels?: number };
type TrendResponse = { points?: TrendPoint[] };

export default function LiveTrend({ unlocode, days = 7, height = 160 }: { unlocode: string; days?: number; height?: number }) {
    const [data, setData] = useState<Point[]>([]);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        let alive = true;
        (async () => {
            try {
                const res = await fetch(`${API_BASE}/v1/ports/${unlocode}/trend?days=${days}`, {
                    headers: DEMO_KEY ? { "X-API-Key": DEMO_KEY } : {},
                    next: { revalidate: 60 },
                });
                if (!res.ok) throw new Error(`${res.status}`);
                const j: TrendResponse = await res.json();
                const pts: Point[] = (j.points ?? []).map((p) => ({
                    ts: p.date,
                    v: typeof p.congestion_score === "number" ? p.congestion_score : typeof p.vessels === "number" ? p.vessels : 0,
                }));
                if (alive) setData(pts);
            } catch (e) {
                if (alive) setErr(e instanceof Error ? e.message : String(e));
            }
        })();
        return () => {
            alive = false;
        };
    }, [unlocode, days]);

    return (
        <div className="rounded-xl border border-slate-200">
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
            <div className="px-3 py-2 text-xs text-rose-600">{err ? `Failed to load: ${err}` : "\u00A0"}</div>
        </div>
    );
}