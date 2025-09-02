export const metadata = {
  title: "Use Case — Shippers & S&OP · PortPulse",
  description: "Plan inbound with port momentum and congestion to reduce stockouts and expediting.",
};
function Block({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="card p-5"><div className="text-sm font-medium mb-1">{title}</div>{children}</div>;
}
export default function Page(){
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Shippers &amp; S&amp;OP</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Use port momentum as a supply signal to plan inbound and choose more reliable routes.</p>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <Block title="Pain">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Production and warehousing disrupted by uncertainty</li>
            <li>Hard to compare POD options beyond schedules</li>
          </ul>
        </Block>
        <Block title="How we help">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Momentum (0–100) + deltas for MoM/YoY style checks</li>
            <li>Pair with congestion to pick steadier routes</li>
          </ul>
        </Block>
        <Block title="Result KPIs">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Fewer expedites and stockouts</li>
            <li>Higher inbound on-time rate</li>
          </ul>
        </Block>
      </section>
      <div className="mt-8 card p-5">
        <div className="text-sm font-medium">CTA</div>
        <p className="text-sm text-black/70 mt-1">Try 5 ports for 14 days or request a tailored route set.</p>
        <div className="mt-3 flex gap-3">
          <a href="/pricing" className="rounded-xl bg-[var(--brand-primary)] text-white px-4 py-2 text-sm">Start evaluation</a>
          <a href="/contact?intent=shippers" className="rounded-xl border border-black/10 px-4 py-2 text-sm">Talk to us</a>
        </div>
      </div>
    </main>
  );
}
