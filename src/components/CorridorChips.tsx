import Link from "next/link";

const chips: Array<{label:string; href:string}> = [
  { label: "Trans-Pacific (CN ↔ USWC)", href: "/contact" },
  { label: "Asia ↔ EU (SG/SH ↔ RTM/HAM)", href: "/contact" },
  { label: "US Gulf & East Coast", href: "/contact" },
  { label: "Custom corridor…", href: "/contact" },
];

export default function CorridorChips() {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {chips.map((c) => (
        <Link
          key={c.label}
          href={c.href}
          className="px-3 py-1.5 rounded-full bg-white/10 text-white/90 ring-1 ring-white/25 hover:bg-white/20 text-sm"
        >
          {c.label}
        </Link>
      ))}
    </div>
  );
}
