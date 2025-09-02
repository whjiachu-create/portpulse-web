import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-full bg-[#0B2740] text-white grid place-items-center font-semibold">P</span>
            <span className="font-semibold">Port<span className="text-[#26B1FF]">Pulse</span></span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/product/congestion" className="hover:text-black/70">Product</Link>
          <Link href="/use-cases" className="hover:text-black/70">Use Cases</Link>
          <Link href="/methods" className="hover:text-black/70">Data &amp; Methods</Link>
          <Link href="/pricing" className="hover:text-black/70">Pricing</Link>
          <Link href="/docs/api" className="hover:text-black/70">Docs</Link>
          <Link href="/contact" className="hover:text-black/70">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/pricing" className="rounded-xl border border-black/10 px-4 py-1.5 text-sm hover:bg-black/5 transition">Start evaluation</Link>
          <Link href="/contact?intent=sales" className="rounded-xl bg-[#0B2740] px-4 py-1.5 text-sm text-white hover:opacity-90 transition">Talk to sales</Link>
        </div>
      </div>
    </header>
  );
}
