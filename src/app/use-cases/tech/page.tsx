export const metadata = {
  title: "Use Case — Platforms & Integrators · PortPulse",
  description: "Embed comparable port metrics via APIs with clear licensing.",
};
function Block({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="card p-5"><div className="text-sm font-medium mb-1">{title}</div>{children}</div>;
}
export default function Page(){
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Platforms &amp; Integrators</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Add port-level congestion &amp; momentum to your TMS/BI with stable SLAs.</p>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <Block title="Pain">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>DIY port definitions cause inconsistency</li>
            <li>Limited coverage and freshness</li>
          </ul>
        </Block>
        <Block title="How we help">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Unified schema and regional comparability</li>
            <li>Resale-friendly licensing for partners</li>
          </ul>
        </Block>
        <Block title="Result KPIs">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Faster time-to-market</li>
            <li>Contractual SLO with monitoring</li>
          </ul>
        </Block>
      </section>
      <div className="mt-8 card p-5">
        <div className="text-sm font-medium">CTA</div>
        <p className="text-sm text-black/70 mt-1">Discuss redistribution terms or bundle deals.</p>
        <div className="mt-3 flex gap-3">
          <a href="/pricing" className="rounded-xl bg-[var(--brand-primary)] text-white px-4 py-2 text-sm">See pricing</a>
          <a href="/contact?intent=tech" className="rounded-xl border border-black/10 px-4 py-2 text-sm">Partner with us</a>
        </div>
      </div>
    </main>
  );
}
