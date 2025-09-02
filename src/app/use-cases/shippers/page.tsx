import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Use Case — Shippers / Manufacturers",
  description: "Use momentum as inbound supply strength to stabilize S&OP and route decisions.",
};
export const dynamic = "force-static";

export default function Shippers() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Shippers / Manufacturers (S&OP)</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Turn port momentum into a practical signal for inbound planning, reducing expedites and stockouts.
      </p>

      <Grid>
        <Card title="Pain points">
          <List items={[
            "High uncertainty on arrivals disrupts production and inbound slots",
            "Carrier ETAs are lagging and non-comparable across routes",
          ]}/>
        </Card>
        <Card title="How we help">
          <List items={[
            "Momentum as supply-side strength; combine with congestion to choose more stable routes/ports",
            "Documented SLO and history windows for thresholds and dashboards",
          ]}/>
        </Card>
        <Card title="Metrics">
          <List items={[
            "momentum_0_100, delta_mom, delta_yoy",
            "congestion_wait_p50/p90, queue_vsl",
          ]}/>
        </Card>
        <Card title="Implementation">
          <List items={[
            "JSON/CSV endpoints; plug-and-play for Power BI/Tableau",
            "Pilot 2–4 weeks, 5 ports for evaluation",
          ]}/>
        </Card>
        <Card title="Outcomes">
          <List items={[
            "Fewer expedites/stockouts; higher inbound OTIF",
            "More robust route allocation and cadence",
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
