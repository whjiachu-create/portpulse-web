export const dynamic = "force-static";
export default function TechUseCase() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Logistics Tech / Analytics Vendors</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Embed standardized port metrics to accelerate go-to-market and regional coverage.</p>
      <section className="mt-8 grid gap-4">
        <Card title="Pain"><ul className="list-disc pl-5 text-black/70"><li>Heterogeneous port definitions across regions</li></ul></Card>
        <Card title="How we help"><ul className="list-disc pl-5 text-black/70">
          <li>Unified schema & SLO; partner-friendly licensing</li><li>Embeddable endpoints with caching guidance</li>
        </ul></Card>
      </section>
      <div className="mt-8 flex gap-3">
        <a href="/docs/api" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Read API</a>
        <a href="/contact?intent=sales" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Partner with us</a>
      </div>
    </div>
  );
}
function Card({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="text-lg font-medium">{title}</h2><div className="mt-2">{children}</div></div>;
}
