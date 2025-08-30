"use client";
import Image from "next/image";

const LOGOS = [
  { src: "/logos/placeholder-dark.svg", alt: "Partner A" },
  { src: "/logos/placeholder-dark.svg", alt: "Partner B" },
  { src: "/logos/placeholder-dark.svg", alt: "Partner C" },
  { src: "/logos/placeholder-dark.svg", alt: "Partner D" },
  { src: "/logos/placeholder-dark.svg", alt: "Partner E" },
];

export default function TrustBar() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
      <div className="rounded-xl border bg-white/80 backdrop-blur p-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
          {LOGOS.map((l, i) => (
            <Image key={i} src={l.src} alt={l.alt} width={120} height={28} className="h-6 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
