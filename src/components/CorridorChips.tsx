"use client";
import Link from "next/link";

const CORRIDORS = [
  "Trans-Pacific (CN ↔ USWC)",
  "Asia ↔ EU (SG/SH ↔ RTM/HAM)",
  "US Gulf & East Coast",
  "Custom corridor…",
] as const;

export default function CorridorChips() {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {CORRIDORS.map((c) => (
        <Link
          key={c}
          href={`/contact?corridor=${encodeURIComponent(c)}`}
          className="rounded-full bg-white/10 hover:bg-white/15 text-white/90 backdrop-blur px-3 py-1.5 text-sm ring-1 ring-white/15"
        >
          {c}
        </Link>
      ))}
    </div>
  );
}