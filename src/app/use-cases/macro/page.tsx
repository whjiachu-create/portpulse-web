export const metadata = {
  title: "Use Case — Macro & Quant · PortPulse",
  description: "Port throughput proxies and momentum as leading indicators for freight cycles.",
};
function Block({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="card p-5"><div className="text-sm font-medium mb-1">{title}</div>{children}</div>;
}
export default function Page(){
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Macro &amp; Quant</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Weekly port-level signals for inventory and trade cycles, with stable backfills.</p>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <Block title="Pain">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Official indicators lag and are revised</li>
            <li>Port definitions vary and are hard to compare</li>
          </ul>
        </Block>
        <Block title="How we help">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Standardized momentum (0–100) and proxies</li>
            <li>Clear sampling &amp; backfill practices</li>
          </ul>
        </Block>
        <Block title="Result KPIs">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Higher signal-to-noise in macro dashboards</li>
            <li>Reproducible research and automation</li>
          </ul>
        </Block>
      </section>
      <div className="mt-8 card p-5">
        <div className="text-sm font-medium">CTA</div>
        <p className="text-sm text-black/70 mt-1">Access backfilled history and higher-rate endpoints under Pro.</p>
        <div className="mt-3 flex gap-3">
          <a href="/pricing" className="rounded-xl bg-[var(--brand-primary)] text-white px-4 py-2 text-sm">See pricing</a>
          <a href="/contact?intent=macro" className="rounded-xl border border-black/10 px-4 py-2 text-sm">Talk to us</a>
        </div>
      </div>
    </main>
  );
}
