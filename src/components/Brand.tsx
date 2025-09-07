import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="PortPulse home">
      <span className="inline-grid h-8 w-8 place-items-center rounded-full bg-[#0B2740] text-white text-sm font-semibold">P</span>
      <span className="text-[#0B2740] text-lg font-semibold tracking-tight">PortPulse</span>
    </Link>
  );
}
