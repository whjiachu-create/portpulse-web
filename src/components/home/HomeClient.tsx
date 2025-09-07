"use client";
import dynamic from "next/dynamic";
import BoxSkeleton from "@/components/ui/BoxSkeleton";

const TrendMini = dynamic(() => import("@/components/TrendMini"), {
  ssr: false,
  loading: () => <BoxSkeleton className="h-32 rounded-xl" />,
});
const WorldMiniMap = dynamic(() => import("@/components/home/WorldMiniMap"), {
  ssr: false,
  loading: () => <BoxSkeleton className="h-64 rounded-2xl w-full" />,
});
const PortComparator = dynamic(() => import("@/components/PortComparator"), {
  ssr: false,
  loading: () => <BoxSkeleton className="h-72 rounded-2xl w-full" />,
});

export default function HomeClient() {
  return (
    <>
      {/* Live Trend minis */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">Live trends</h2>
        <p className="text-black/60">Recent 14d snapshots by port.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card p-4">
            <h3 className="text-sm font-medium mb-2">USLAX — 14d</h3>
            <TrendMini unlocode="USLAX" days={14} />
          </div>
          <div className="card p-4">
            <h3 className="text-sm font-medium mb-2">USNYC — 14d</h3>
            <TrendMini unlocode="USNYC" days={14} />
          </div>
          <div className="card p-4">
            <h3 className="text-sm font-medium mb-2">SGSIN — 14d</h3>
            <TrendMini unlocode="SGSIN" days={14} />
          </div>
        </div>
      </section>

      {/* Mini world map */}
      <section className="bg-[#F7FBFF]">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-xl font-medium">Global activity</h2>
          <p className="text-black/60">Pulse markers highlight major ports. Hover for details.</p>
          <div className="mt-4 card p-4">
            <WorldMiniMap />
          </div>
        </div>
      </section>

      {/* Port comparator */}
      <section className="container mx-auto px-4 py-10">
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium">Compare ports</h2>
              <p className="text-black/60 text-sm">Side-by-side 14-day trends. Try your favorite pair.</p>
            </div>
            <a href="/docs/api" className="text-sm underline text-[#0B2740]">Open docs</a>
          </div>
          <div className="mt-4">
            <PortComparator
              ports={["USLAX","USNYC","SGSIN","CNSHA","CNNGB","HKHKG","NLRTM","BEANR"]}
              days={14}
            />
          </div>
        </div>
      </section>
    </>
  );
}
