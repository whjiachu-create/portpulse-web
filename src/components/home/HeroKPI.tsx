export default function HeroKPI() {
  const items = [
    { k: "Ports", v: "67+" },
    { k: "API p95", v: "< 300ms" },
    { k: "Replay", v: "30 days" },
    { k: "SLA", v: "99.9%" },
  ];
  return (
    <div className="mt-5 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.k}
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white shadow-[0_8px_30px_rgba(2,8,23,.25)] backdrop-blur-md"
        >
          <div className="text-[11px] uppercase tracking-wide text-white/70">{it.k}</div>
          <div className="text-base font-semibold">{it.v}</div>
        </div>
      ))}
    </div>
  );
}
