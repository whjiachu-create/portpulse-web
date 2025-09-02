import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export const metadata = {
  title: "Trade Momentum API — PortPulse",
  description: "Throughput proxies and momentum (0–100) with deltas at port/route level.",
};

const demo = [
  { d: "2025-07-01", SGSIN: 62, USLAX: 48 },
  { d: "2025-07-08", SGSIN: 64, USLAX: 50 },
  { d: "2025-07-15", SGSIN: 66, USLAX: 52 },
  { d: "2025-07-22", SGSIN: 65, USLAX: 55 },
  { d: "2025-07-29", SGSIN: 67, USLAX: 57 },
  { d: "2025-08-05", SGSIN: 68, USLAX: 58 },
  { d: "2025-08-12", SGSIN: 69, USLAX: 60 },
];

export default function MomentumProduct() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Trade Momentum API</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Standardized 0–100 momentum constructed from throughput proxies. Includes deltas for MoM/YoY style comparisons.
      </p>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="text-sm font-medium mb-2">Demo (mock data): 6–8 weeks momentum</div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demo}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="d" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="SGSIN" dot={false} />
              <Line type="monotone" dataKey="USLAX" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-black/50 mt-2">Illustrative only — replace with live API charts when momentum endpoints are enabled.</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <Card title="Fields">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li><code>momentum_0_100</code> — standardized index</li>
            <li><code>delta_mom</code> — normalized change</li>
            <li>Snapshots &amp; 7–30d trend windows</li>
          </ul>
        </Card>
        <Card title="Use cases">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>S&amp;OP planning &amp; routing choices</li>
            <li>Macro signals for inventory cycles</li>
            <li>Compare ports/routes vs delays</li>
          </ul>
        </Card>
        <Card title="Quickstart">
          <pre className="text-xs bg-[#F7FBFF] p-3 rounded-xl overflow-x-auto">{`curl -H "x-api-key: $API_KEY" \\
"https://api.useportpulse.com/v1/ports/SGSIN/momentum?window=30"`}</pre>
          <a href="/docs/api" className="inline-block mt-2 text-sm underline text-[#0B2740]">Open API docs</a>
        </Card>
      </section>
    </main>
  );
}

function Card({ title, children }:{title:string; children:React.ReactNode}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium mb-1">{title}</div>
      {children}
    </div>
  );
}
