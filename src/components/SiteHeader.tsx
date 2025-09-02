"use client";

import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/portpulse-mark.svg"
            alt="PortPulse"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold tracking-tight">
            Port<span className="text-[#26B1FF]">Pulse</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/product/congestion" className="hover:text-black/70">Product</Link>
          <Link href="/use-cases" className="hover:text-black/70">Use Cases</Link>
          <Link href="/methods" className="hover:text-black/70">Data & Methods</Link>
          <Link href="/pricing" className="hover:text-black/70">Pricing</Link>
          <Link href="/docs/api" className="hover:text-black/70">Docs</Link>
          <Link href="/contact" className="hover:text-black/70">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/pricing"
            className="rounded-xl bg-[#0B2740] text-white px-4 py-1.5 text-sm hover:bg-black transition"
          >
            Start free
          </Link>
          <Link
            href="/contact?intent=sales"
            className="rounded-xl border border-black/20 px-4 py-1.5 text-sm hover:bg-black/5 transition"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </header>
  );
}
