import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Use Case — Logistics Tech / Data Vendors",
  description: "Embed standardized port metrics to expand coverage and ship faster.",
};
export const dynamic = "force-static";

export default function TechVendors() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Logistics Tech / Data Vendors</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Ship faster by embedding standardized congestion & momentum metrics across regions.
      </p>

      <Grid>
        <Card title="Pain points">
          <List items={[
            "Inconsistent in-house port definitions; high cost to extend to new regions",
            "Slow time-to-market and weak SLO commitments",
          ]}/>
        </Card>
        <Card title="How we help">
          <List items={[
            "Unified schema and definitions; cross-region comparability",
            "Tiered freshness SLOs (≤2h / ≤6h / daily) for product fit",
          ]}/>
        </Card>
        <Card title="Metrics">
          <List items={[
            "congestion_*, throughput_proxy_*, momentum_*",
            "Stable sampling windows for backtesting and deltas",
          ]}/>
        </Card>
        <Card title="Implementation">
          <List items={[
            "SDK & examples, CSV/JSON; ETag/304 caching",
            "Contracted SLO; add-on ports on request (2–4 weeks)",
          ]}/>
        </Card>
        <Card title="Outcomes">
          <List items={[
            "Shorter delivery cycles and expanded coverage",
            "More compelling demos; higher PoC win rate",
          ]}/>
        </Card>
      </Grid>

      <CTA />
    </div>
  );
}
function Grid({children}:{children:React.ReactNode}){ return <section className="mt-8 grid gap-4 md:grid-cols-2">{children}</section>; }
function Card({title,children}:{title:string;children:React.ReactNode}){ return <div className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="text-lg font-medium">{title}</h2><div className="mt-2 text-black/70">{children}</div></div>; }
function List({items}:{items:string[]}){ return <ul className="list-disc pl-5">{items.map((t,i)=><li key={i}>{t}</li>)}</ul>; }
function CTA(){ return (
  <div className="mt-8 flex gap-3">
    <a href="/docs/examples" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Run examples</a>
    <a href="/contact?intent=partner" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Partner with us</a>
  </div>
); }
