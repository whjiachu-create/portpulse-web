"use client";
import dynamic from "next/dynamic";

const TrendMini = dynamic(() => import("@/components/TrendMini"), {
  ssr: false,
  loading: () => <div className="h-32 rounded-xl bg-slate-100" />,
});
const WorldMiniMap = dynamic(() => import("@/components/home/WorldMiniMap"), {
  ssr: false,
  loading: () => <div className="h-64 w-full rounded-2xl bg-slate-100" />,
});

export default function ClientWidgetsHome() {
  return (
    <>
      {/* Live Trend minis */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">Live trends</h2>
        <p className="text-black/60">Recent 14d snapshots by port.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { code: "USLAX", days: 14 },
            { code: "USNYC", days: 14 },
            { code: "SGSIN", days: 14 },
          ].map((p) => (
            <div key={p.code} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <h3 className="mb-2 text-sm font-medium">{p.code} — {p.days}d</h3>
              {/* TrendMini 内部如果拿不到权限会显示错误；我们在组件里兜底 */}
              <TrendMini unlocode={p.code} days={p.days} />
            </div>
          ))}
        </div>
      </section>

      {/* Mini world map + legend */}
      <section className="bg-[#F7FBFF]">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-xl font-medium">Global activity</h2>
          <p className="text-black/60">Pulse markers highlight major ports. Hover for details.</p>
          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <WorldMiniMap />
            <div className="mt-3 flex items-center gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-slate-700"></span><span>Dot size ≈ traffic</span></div>
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-4 rounded bg-blue-500"></span><span>Color ≈ congestion</span></div>
              <span className="ml-auto text-slate-400">Illustrative. Ask sales for your corridor.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
