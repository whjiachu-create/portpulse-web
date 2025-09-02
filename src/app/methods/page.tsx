import Image from "next/image";

export default function MethodsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Data & Methods</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Inputs (AIS, schedules, public stats, events) → cleaning & harmonization →
        port-level indices for congestion, throughput proxy and momentum (0–100) with
        freshness SLO and reproducible JSON/CSV schemas.
      </p>

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
          Replace the image at <code>/public/images/methods-flow.png</code> with your final diagram.
        </p>
      </div>
    </div>
  );
}
