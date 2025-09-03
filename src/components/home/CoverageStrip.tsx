import Link from "next/link";

export default function CoverageStrip(){
  const regions = ["NA 12","EU 15","APAC 20","ME 6","LATAM 5","AFR 5"];
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold">Global coverage & expansion</h2>
      <p className="text-black/70">Live coverage across <b>50+</b> key ports. More ports can be onboarded on-request in <b>2–4 weeks</b> under the same schema & SLO.</p>
      <div className="mt-4 flex flex-wrap gap-2">{regions.map(r=> <span key={r} className="chip">{r}</span>)}</div>
      <div className="mt-4 flex gap-3">
        <Link href="/coverage" className="rounded-xl border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition">View full list</Link>
        <Link href="/contact?intent=port_request" className="rounded-xl bg-black text-white px-4 py-2 text-sm shadow hover:opacity-90 transition">Request a port</Link>
      </div>
    </section>
  );
}
