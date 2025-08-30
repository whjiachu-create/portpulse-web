"use client";
import Link from "next/link";

const STEPS = [
  { n: 1, title: "Discovery", text: "Discuss corridor, KPIs and timelines." },
  { n: 2, title: "Tech alignment", text: "Contracts, schema, keys, and SLOs." },
  { n: 3, title: "Integrate", text: "Start with Quickstart. Go live in ~30m." },
];

export default function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="rounded-2xl border bg-white p-6">
            <div className="text-slate-400 text-sm">Step {s.n}</div>
            <div className="mt-1 text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <a
          href="https://docs.useportpulse.com/EXAMPLES.md"
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-black px-4 py-2 text-white"
        >
          Quickstart →
        </a>
        <Link href="/contact" className="rounded-md border px-4 py-2">
          Book a demo
        </Link>
      </div>
    </section>
  );
}
