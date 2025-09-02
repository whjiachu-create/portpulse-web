import Link from "next/link";

const STEPS = [
  { t: "Discovery", d: "Share target corridors & ports." },
  { t: "Tech alignment", d: "Map APIs and integration path." },
  { t: "Integrate", d: "Go live with alerts & dashboards." },
] as const;

export default function StepsCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-slate-200 p-8">
        <h3 className="text-2xl font-semibold">Get started in three steps</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.t} className="rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-500">Step {i + 1}</div>
              <div className="mt-1 font-medium">{s.t}</div>
              <p className="mt-1 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://docs.useportpulse.com/EXAMPLES.md"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-black text-sm"
          >
            Quickstart
          </a>
          <Link href="/contact" className="rounded-md border px-4 py-2 text-sm">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
