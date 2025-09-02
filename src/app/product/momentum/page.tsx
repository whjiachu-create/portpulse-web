import Link from "next/link";
import TrendMini from "@/components/TrendMini";

export const metadata = {
  title: "Trade Momentum API",
  description:
    "Throughput proxy & momentum indices (0–100) at port/route level with JSON/CSV schemas and freshness SLO.",
};

export default function MomentumPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Trade Momentum API</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Port/route-level throughput proxy and momentum indices (0–100), suitable for S&OP and macro signals.
        Reproducible JSON/CSV, cache-friendly, freshness SLO.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Card title="USLAX — 14d momentum (demo)">
          <TrendMini unlocode="USLAX" days={14} />
        </Card>
        <Card title="USNYC — 14d momentum (demo)">
          <TrendMini unlocode="USNYC" days={14} />
        </Card>
        <Card title="SGSIN — 14d momentum (demo)">
          <TrendMini unlocode="SGSIN" days={14} />
        </Card>
      </section>

      <h2 className="mt-10 text-xl font-medium">Quickstart</h2>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <CodeBlock title="curl (JSON)">{`curl -sS -H "X-API-Key: dev_demo_123" \\
  "https://api.useportpulse.com/v1/ports/USLAX/trend?days=7" | jq .`}</CodeBlock>
        <CodeBlock title="curl (CSV)">{`curl -fS -H "X-API-Key: dev_demo_123" \\
  "https://api.useportpulse.com/v1/ports/USLAX/trend?days=7&format=csv" -o trend.csv`}</CodeBlock>
        <CodeBlock title="JS (fetch)">{`const r = await fetch("/api/pulse/v1/ports/USLAX/trend?days=7", {
  headers: { "X-API-Key": "dev_demo_123" }
}); console.log(await r.json());`}</CodeBlock>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white p-4">
        <h3 className="font-medium">Fields & SLO</h3>
        <ul className="mt-2 list-disc pl-5 text-black/70 text-sm">
          <li><code>momentum_0_100</code> – standardized momentum index, 0–100.</li>
          <li><code>delta_mom</code> – WoW/MoM change signals (normalized).</li>
          <li>Freshness SLO: key ports ≤ 2h (typical), others ≤ 6h / daily.</li>
        </ul>
        <div className="mt-4">
          <Link href="/docs/api" className="text-[#0B2740] underline">See OpenAPI schemas</Link>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      {children}
    </div>
  );
}

function CodeBlock({ title, children }: { title: string; children: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-sm font-medium mb-2">{title}</div>
      <pre className="text-xs whitespace-pre-wrap">{children}</pre>
    </div>
  );
}
