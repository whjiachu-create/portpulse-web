export const dynamic = "force-static";
export default function MomentumProduct() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Trade Momentum API</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Throughput and momentum indices at port/route level for planning and macro monitoring.</p>
      <section className="mt-8 grid gap-4">
        <Card title="What you get"><ul className="list-disc pl-5 text-black/70">
          <li>Standardized 0–100 momentum index with MoM/YoY deltas</li><li>Throughput proxies to compare routes/ports</li><li>CSV/JSON; ready for BI and notebooks</li>
        </ul></Card>
        <Card title="Use cases"><ul className="list-disc pl-5 text-black/70">
          <li>S&amp;OP planning and route selection</li><li>Macro early signals for buy-side</li><li>Benchmarking for logistics analytics vendors</li>
        </ul></Card>
      </section>
      <div className="mt-8 flex gap-3">
        <a href="/docs/api" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Read API</a>
        <a href="/contact?intent=sales" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Talk to us</a>
      </div>
    </div>
  );
}
function Card({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="text-lg font-medium">{title}</h2><div className="mt-2">{children}</div></div>;
}
