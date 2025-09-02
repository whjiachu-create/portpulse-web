import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Data & Methods",
  description:
    "Inputs (AIS, schedules, public stats, events) → cleaning & harmonization → port-level indices with freshness SLO.",
};

export default function MethodsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Data & Methods</h1>
      <div className="mt-2 text-black/70 max-w-3xl space-y-2">
        <p>
          We fuse AIS, schedules, public stats and operational events; then clean, geospatially align and
          harmonize to produce port-level indices for congestion, throughput proxy and momentum (0–100).
        </p>
        <ul className="list-disc pl-5 text-sm">
          <li>Standardized schema across regions; JSON/CSV output; cache-friendly.</li>
          <li>Bias correction & anomaly handling to reduce drift across sources.</li>
          <li>Freshness SLO for key ports ≤ 2h; others ≤ 6h / daily.</li>
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4">
        <Image
          src="/images/methods-flow.png"
          alt="Methodology diagram"
          width={1200}
          height={600}
          className="w-full h-auto hidden md:block"
        />
        <Image
          src="/images/methods-flow.placeholder.svg"
          alt="Methodology diagram placeholder"
          width={1200}
          height={600}
          className="w-full h-auto md:hidden"
        />
        <p className="text-xs text-black/50 mt-2">
          Replace <code>/public/images/methods-flow.png</code> with your final diagram.
        </p>
      </div>

      <div className="mt-6">
        <Link href="/samples/ports_sample.csv" className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5">
          Download sample CSV
        </Link>
      </div>
    </div>
  );
}
