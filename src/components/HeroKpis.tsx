export default function HeroKpis({ className = "" }: { className?: string }) {
  const items = [
    { label: "Ports", value: "67+" },
    { label: "API p95", value: "< 300ms" },
    { label: "Replay", value: "30 days" },
    { label: "Availability", value: "99.9% SLA" },
  ];
  return (
    <div className={`grid gap-3 grid-cols-2 md:grid-cols-4 max-w-3xl ${className}`}>
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-xl bg-white/12 backdrop-blur-md border border-white/20 shadow-lg px-4 py-3"
        >
          <div className="text-xs text-white/80">{it.label}</div>
          <div className="text-lg md:text-xl font-semibold">{it.value}</div>
        </div>
      ))}
    </div>
  );
}
