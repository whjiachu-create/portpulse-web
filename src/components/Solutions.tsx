"use client";
import Link from "next/link";

const items = [
  {
    title: "Container & Port Tracking",
    desc: "Unified events and port snapshots via API.",
    link: "/pricing",
  },
  {
    title: "Predictive ETAs & Alerts",
    desc: "Actionable exceptions with reasons and thresholds.",
    link: "https://docs.useportpulse.com/EXAMPLES.md",
    ext: true,
  },
  {
    title: "Port Congestion & Dwell",
    desc: "Plan with reliable waiting-time and congestion signals.",
    link: "https://docs.useportpulse.com/openapi.json",
    ext: true,
  },
  {
    title: "Terminal Events & APIs",
    desc: "Import/export milestones in one stable schema.",
    link: "https://docs.useportpulse.com",
    ext: true,
  },
];

export default function Solutions() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">
      <h2 className="mb-4 text-2xl font-semibold">Solutions</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border bg-white p-5 hover:shadow-sm transition">
            <div className="text-lg font-semibold">{it.title}</div>
            <p className="mt-2 text-slate-600">{it.desc}</p>
            {it.ext ? (
              <a className="mt-4 inline-block text-sm underline underline-offset-4 text-slate-700" href={it.link} target="_blank" rel="noreferrer">
                Learn more →
              </a>
            ) : (
              <Link className="mt-4 inline-block text-sm underline underline-offset-4 text-slate-700" href={it.link}>
                Learn more →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
