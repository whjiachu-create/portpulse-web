// src/components/SolutionsGrid.tsx
import Link from "next/link";

type Item = {
  title: string;
  desc: string;
  href: string;
  ext?: boolean;
};
const items = [
  {
    title: "Container & Port Tracking",
    desc: "Unified events and port snapshots via API.",
    href: "https://docs.useportpulse.com/EXAMPLES.md",
    ext: true,
  },
  {
    title: "Predictive ETAs & Alerts",
    desc: "Actionable exceptions with reasons.",
    href: "https://docs.useportpulse.com/SDK.md",
    ext: true,
  },
  {
    title: "Port Congestion & Dwell",
    desc: "Plan with reliable waiting and dwell signals.",
    href: "https://docs.useportpulse.com/openapi.json",
    ext: true,
  },
  {
    title: "Terminal Events & APIs",
    desc: "Import/export milestones in one schema.",
    href: "/pricing",
  },
] as const satisfies ReadonlyArray<Item>;

export default function SolutionsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">
      <h2 className="mb-6 text-2xl font-semibold">Solutions</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((x) => (
          <article key={x.title} className="rounded-xl border bg-white p-6 hover:shadow-sm transition-shadow">
            <h3 className="text-lg font-semibold">{x.title}</h3>
            <p className="mt-2 text-gray-600">{x.desc}</p>
            <div className="mt-4">
              {"ext" in x && x.ext ? (
                <a
                  href={x.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-slate-700 underline underline-offset-4 hover:text-slate-900"
                >
                  Learn more →
                </a>
              ) : (
                <Link
                  href={x.href}
                  className="text-sm text-slate-700 underline underline-offset-4 hover:text-slate-900"
                >
                  Learn more →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
