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
          <h3 className="text-xl font-medium">全球覆盖与可拓展</h3>
          <p className="text-black/70 mt-1">
            PortPulse 现已覆盖 <strong>{live}+</strong> 重点港口。更多港口可按需新增，通常 <strong>2–4 周</strong> 完成接入与验收。
          </p>
          <p className="text-black/50 text-sm mt-1">新增港口遵循相同 schema 与 SLO，确保横向可比。</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {byRegion.map(x => <span key={x.id} className="px-3 py-1.5 rounded-full bg-black/5 text-sm">{x.name} {x.count}</span>)}
        </div>
        <div className="flex gap-2">
          <a href="/coverage" className="rounded-xl bg-[#0B2740] text-white px-4 py-2 hover:opacity-90 transition">查看完整清单</a>
          <a href="/contact?intent=port_request" className="rounded-xl border border-black/10 px-4 py-2 hover:bg-black/5 transition">申请新增港口</a>
        </div>
      </div>
    </div>
  );
}
