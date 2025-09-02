export const metadata = {
  title: "Use Case — Freight forwarders (3PL) · PortPulse",
  description: "Weekly network view, alerts and route choices using congestion &amp; momentum.",
};
function Block({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="card p-5"><div className="text-sm font-medium mb-1">{title}</div>{children}</div>;
}
export default function Page(){
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Freight forwarders (3PL)</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Stabilize routing and capacity with port-level truth. Comparable metrics across regions.</p>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <Block title="Pain">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Volatile delays across trunk & feeder legs</li>
            <li>Reactive trucking and yard allocation</li>
            <li>Customer updates lacking comparable metrics</li>
          </ul>
        </Block>
        <Block title="How we help">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Weekly network view of route options with congestion &amp; momentum</li>
            <li>Trigger alerts when waiting &gt; p90 or momentum drops</li>
            <li>Compare alternative POL/POD before booking</li>
          </ul>
        </Block>
        <Block title="Result KPIs">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Lower average delay</li>
            <li>Fewer exceptions and rehandles</li>
            <li>Reduced D&amp;D charges</li>
          </ul>
        </Block>
      </section>
      <div className="mt-8 card p-5">
        <div className="text-sm font-medium">CTA</div>
        <p className="text-sm text-black/70 mt-1">Start a 14-day evaluation (5 ports) or talk to us for bundles.</p>
        <div className="mt-3 flex gap-3">
          <a href="/pricing" className="rounded-xl bg-[var(--brand-primary)] text-white px-4 py-2 text-sm">Start evaluation</a>
          <a href="/contact?intent=lsp" className="rounded-xl border border-black/10 px-4 py-2 text-sm">Book a call</a>
        </div>
      </div>
    </main>
  );
}
