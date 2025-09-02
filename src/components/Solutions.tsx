"use client";
import Link from "next/link";

const cards = [
  {
    t: "Container & Port Tracking",
    d: "Unified events and port snapshots via API.",
    href: "/pricing",
  },
  {
    t: "Predictive ETAs & Alerts",
    d: "Actionable exceptions with reasons and thresholds.",
    href: "/pricing",
  },
  {
    t: "Port Congestion & Dwell",
    d: "Plan with reliable waiting-time signals.",
    href: "/pricing",
  },
  {
    t: "Terminal Events & APIs",
    d: "Import/export milestones in one schema.",
    href: "/pricing",
  },
] as const;

export default function Solutions() {
  return (
    <section className="bg-slate-50/70">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <h2 className="mb-6 text-2xl font-semibold text-slate-900">Solutions</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-black/0 transition
                         hover:-translate-y-1 hover:shadow-lg hover:ring-slate-900/5"
            >
              <div className="text-xl font-semibold text-slate-900">{c.t}</div>
              <p className="mt-2 text-slate-600">{c.d}</p>
              <Link href={c.href} className="mt-4 inline-block text-slate-900 underline underline-offset-4">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
