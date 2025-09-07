export default function ExpansionNotice() {
  return (
    <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
        <span className="font-medium">Global Coverage & Expansion</span>
        <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 px-2 py-0.5 border border-sky-100">Live: <b className="ml-1">67+</b></span>
        <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 border border-emerald-100">On-request: <b className="ml-1">100+</b></span>
        <span className="inline-flex items-center rounded-full bg-slate-50 text-slate-700 px-2 py-0.5 border border-slate-200">Typical onboarding: <b className="ml-1">2–4 weeks</b></span>
        <a href="/contact?intent=port-request"
           className="ml-auto inline-flex items-center rounded-lg bg-[#0B2740] text-white px-3 py-1.5 text-sm hover:opacity-90">
          Request a new port
        </a>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        New ports follow the same schema and freshness SLO for cross-port comparability.
      </p>
    </div>
  );
}
