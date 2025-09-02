export const dynamic = "force-static";
export default function ShippersUseCase() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Shippers & Manufacturers</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Stabilize inbound plans by anticipating port congestion and trade momentum shifts.</p>
      <section className="mt-8 grid gap-4">
        <Card title="Pain"><ul className="list-disc pl-5 text-black/70"><li>Production & inbound schedules disrupted by port volatility</li></ul></Card>
        <Card title="How we help"><ul className="list-disc pl-5 text-black/70">
          <li>Pick steadier routes; adjust buffer days by node</li><li>Alerts on threshold breaches for priority POs</li>
        </ul></Card>
      </section>
      <div className="mt-8 flex gap-3">
        <a href="/docs/examples" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Try the API</a>
        <a href="/pricing" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">See pricing</a>
      </div>
    </div>
  );
}
function Card({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="text-lg font-medium">{title}</h2><div className="mt-2">{children}</div></div>;
}
