import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Use Case — 3PL / Forwarders",
  description: "Plan networks with standardized port congestion & momentum. Reduce exceptions and D&D.",
};
export const dynamic = "force-static";

export default function LSP() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">3PL / Freight Forwarders</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Plan networks with standardized congestion & momentum. Act earlier, reduce exceptions and D&D.
      </p>

      <Grid>
        <Card title="Pain points">
          <List items={[
            "Volatile congestion drives reactive trunk/feeder and drayage planning",
            "Inconsistent port definitions make cross-port comparison hard",
          ]}/>
        </Card>
        <Card title="How we help">
          <List items={[
            "Unified schema for waiting time, queue length, berth efficiency",
            "Momentum index (0–100) with MoM/YoY deltas for early signals",
          ]}/>
        </Card>
        <Card title="Metrics">
          <List items={[
            "congestion_wait_p50/p90, queue_vsl, berth_efficiency",
            "momentum_0_100, delta_mom, delta_yoy",
          ]}/>
        </Card>
        <Card title="Implementation">
          <List items={[
            "JSON/CSV with ETag/304 caching; easy BI/warehouse integration",
            "Typical onboarding: 2–4 weeks (on-request ports)",
          ]}/>
        </Card>
        <Card title="Outcomes">
          <List items={[
            "Lower exception rate and D&D",
            "More stable re-routing and port choices (better OTIF)",
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
    <a href="/contact?intent=sales" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Talk to us</a>
  </div>
); }
