import Link from "next/link";

export default function HeroEN(){
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Turn port congestion & trade momentum into reproducible data.
        </h1>
        <p className="mt-4 text-black/70">
          Standardized JSON/CSV, cache-friendly and auditable. Freshness p95 ≤ 2h, API p95 ≤ 300ms, 30-day replay.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["50+ ports","Freshness p95 ≤ 2h","API p95 ≤ 300ms","30-day replay","CSV ETag/304"].map(s=>(
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pricing" className="rounded-xl bg-[#0B2740] text-white px-4 py-2 text-sm shadow hover:bg-black transition">
            Start 14-day evaluation
          </Link>
          <Link href="/docs/api" className="rounded-xl border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition">
            Docs (OpenAPI)
          </Link>
          <Link href="/contact?intent=sales" className="rounded-xl border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition">
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
