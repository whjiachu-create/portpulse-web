import { PORTS_COVERAGE, regions } from "@/data/portsCoverage";

export default function CoverageStrip() {
  const live = PORTS_COVERAGE.filter(p=>p.status==="Live").length;
  const byRegion = regions.map(r => ({
    id: r.id, name: r.name, count: PORTS_COVERAGE.filter(p=>p.region===r.id).length
  }));
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium">Global coverage & expansion</h3>
          <p className="text-black/70 mt-1">
            PortPulse currently covers <strong>{live}+</strong> key ports. More ports can be added on request,
            with a typical onboarding of <strong>2–4 weeks</strong>.
          </p>
          <p className="text-black/50 text-sm mt-1">
            New ports follow the same metric definitions and freshness SLO for cross-port comparability.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {byRegion.map(x => (
            <span key={x.id} className="px-3 py-1.5 rounded-full bg-black/5 text-sm">
              {x.name} {x.count}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a href="/coverage" className="rounded-xl bg-[#0B2740] text-white px-4 py-2 hover:opacity-90 transition">View full list</a>
          <a href="/contact?intent=port_request" className="rounded-xl border border-black/10 px-4 py-2 hover:bg-black/5 transition">Request new port</a>
        </div>
      </div>
    </div>
  );
}
