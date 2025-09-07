import Image from "next/image";
const logos = [
  { src: "/logos/sample-1.svg", alt: "Partner A" },
  { src: "/logos/sample-2.svg", alt: "Partner B" },
  { src: "/logos/sample-3.svg", alt: "Partner C" },
  { src: "/logos/sample-4.svg", alt: "Partner D" },
  { src: "/logos/sample-5.svg", alt: "Partner E" },
];
export default function LogoBar() {
  return (
    <section className="bg-[#F7FBFF]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-slate-500 mb-4">Trusted by teams building with APIs</div>
        <div className="grid grid-cols-2 sm:grid-cols-5 items-center gap-6 opacity-90">
          {logos.map(l => (
            <div key={l.alt} className="h-8 relative grayscale opacity-80">
              <Image src={l.src} alt={l.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
