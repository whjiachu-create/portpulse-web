"use client";
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

export const dynamic = "force-static";

const demo = [
  { m: "Mar", LAX: 42, SIN: 58 },
  { m: "Apr", LAX: 48, SIN: 56 },
  { m: "May", LAX: 53, SIN: 55 },
  { m: "Jun", LAX: 61, SIN: 52 },
  { m: "Jul", LAX: 65, SIN: 51 },
  { m: "Aug", LAX: 62, SIN: 54 },
];

function Card({title, children}:{title:string; children:React.ReactNode}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function MomentumProduct() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Trade Momentum API</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Port/route-level throughput proxies and standardized 0–100 momentum indices, with MoM/YoY deltas.
        API-first JSON/CSV designed for S&OP, network planning and macro signals.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Card title="Index definition (0–100)">
          <ul className="list-disc pl-5 text-black/70">
            <li>Momentum: standardized score from throughput proxies and operational signals.</li>
            <li>Comparable across ports & routes; stable sampling window.</li>
            <li>Delta fields: <code>mom</code> / <code>yoy</code> included.</li>
          </ul>
        </Card>
        <Card title="Freshness & history">
          <ul className="list-disc pl-5 text-black/70">
            <li>Tier-1 ports freshness ≤2h; long tail daily.</li>
            <li>Historical backfill (rolling 6–12 months as plan).</li>
          </ul>
        </Card>
        <Card title="Quickstart">
{`          `}<pre className="text-sm overflow-x-auto p-3 rounded-lg bg-black/5">{`BASE=https://api.useportpulse.com
curl -sS -H "X-API-Key: dev_demo_123" "$BASE/v1/ports/USLAX/trend?days=30" | jq .
# CSV with ETag/304:
ET=$(curl -fsSI -H "X-API-Key: dev_demo_123" "$BASE/v1/ports/USLAX/trend?days=30&format=csv" | awk 'BEGIN{IGNORECASE=1}/etag:/{gsub(/\\r|\\n|"/,"");print $2}')
curl -fsS -H "X-API-Key: dev_demo_123" -H "If-None-Match: \"$ET\"" "$BASE/v1/ports/USLAX/trend?days=30&format=csv" -o uslax.csv`}</pre>
        </Card>
      </section>

      <section className="mt-8 grid gap-4">
        <Card title="Example — momentum comparison (demo data)">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={demo} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="m" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="LAX" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="SIN" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-black/60 text-sm mt-2">For live data use the API endpoints; this chart uses demo values.</p>
        </Card>
      </section>

      <div className="mt-8 flex gap-3">
        <a href="/docs/examples" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Run examples</a>
        <a href="/coverage" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">See coverage</a>
      </div>
    </div>
  );
}
