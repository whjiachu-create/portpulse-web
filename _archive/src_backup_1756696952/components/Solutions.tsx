import Link from "next/link";
import Image from "next/image";

const items = [
  { title: "Container & Port Tracking", desc: "Unified events and corridor snapshots via API.", href: "/play" },
  { title: "Predictive ETAs & Alerts", desc: "Actionable exceptions with reasons and thresholds.", href: "/contact" },
  { title: "Port Congestion & Dwell", desc: "Plan with reliable waiting time signals.", href: "/pricing" },
  { title: "Terminal Events & APIs", desc: "Import/export milestones in one schema.", href: "https://docs.useportpulse.com/openapi.json", ext: true as const },
] as const;

function OceanIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-10 w-10">
      <defs>
        <linearGradient id="ppg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#ppg)" opacity="0.15" />
      <path d="M8 38c6 0 6-6 12-6s6 6 12 6 6-6 12-6 6 6 12 6" fill="none" stroke="#0EA5E9" strokeWidth="2.5" />
      <path d="M8 46c6 0 6-6 12-6s6 6 12 6 6-6 12-6 6 6 12 6" fill="none" stroke="#0284C7" strokeWidth="2.5" />
      <circle cx="44" cy="24" r="3" fill="#0284C7" />
    </svg>
  );
}

export default function Solutions() {
  return (
    <section className="relative bg-white">
      {/* 背景装饰插画 */}
      <div className="pointer-events-none absolute right-4 -top-6 h-40 w-40 md:h-56 md:w-56 opacity-25">
        <Image src="/images/illus-network.svg" alt="" fill />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold">Solutions</h2>
        <p className="mt-1 text-slate-600">Real-time visibility and predictive insights, API-first.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((x) => (
            <div key={x.title} className="rounded-xl border bg-white p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <OceanIcon />
                <div className="text-lg font-semibold">{x.title}</div>
              </div>
              <p className="mt-2 text-slate-600 text-sm">{x.desc}</p>
              {("ext" in x && x.ext) ? (
                <a href={x.href} target="_blank" rel="noreferrer"
                   className="mt-4 inline-flex text-sm text-slate-700 underline underline-offset-4">
                  Learn more
                </a>
              ) : (
                <Link href={x.href}
                      className="mt-4 inline-flex text-sm text-slate-700 underline underline-offset-4">
                  Learn more
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
