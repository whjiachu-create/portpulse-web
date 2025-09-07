import Image from "next/image";

const LOGOS = [
  { src: "/logos/placeholder-1.svg", alt: "Acme Logistics" },
  { src: "/logos/placeholder-2.svg", alt: "OceanIQ" },
  { src: "/logos/placeholder-3.svg", alt: "BlueRoute" },
  { src: "/logos/placeholder-4.svg", alt: "HarborTech" },
  { src: "/logos/placeholder-5.svg", alt: "FreightOps" },
  { src: "/logos/placeholder-6.svg", alt: "SupplyNet" },
];

export default function TrustLogos() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-sm text-slate-500 mb-3">Trusted by teams building on data</div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
        {LOGOS.map((l) => (
          <div key={l.alt} className="flex items-center justify-center">
            <Image src={l.src} alt={l.alt} width={160} height={40} />
          </div>
        ))}
      </div>
    </section>
  );
}
