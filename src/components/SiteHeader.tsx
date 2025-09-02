"use client";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/10">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logos/portpulse-mark.svg" alt="PortPulse" className="h-6 w-6"/>
          <span className="font-semibold">PortPulse</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          <div className="relative">
            <button className="hover:text-black" onClick={()=>setOpen(v=>!v)}>Product ▾</button>
            {open && (
              <div onMouseLeave={()=>setOpen(false)} className="absolute mt-2 w-56 card p-2">
                <Link className="block px-3 py-2 rounded-lg hover:bg-black/5" href="/product/congestion">Port Congestion API</Link>
                <Link className="block px-3 py-2 rounded-lg hover:bg-black/5" href="/product/momentum">Trade Momentum API</Link>
                <Link className="block px-3 py-2 rounded-lg hover:bg-black/5" href="/product/alerts">Port Health Alerts</Link>
              </div>
            )}
          </div>
          <Link href="/use-cases" className="hover:text-black">Use Cases</Link>
          <Link href="/coverage" className="hover:text-black">Coverage</Link>
          <Link href="/methods" className="hover:text-black">Data & Methods</Link>
          <Link href="/docs/api" className="hover:text-black">Docs</Link>
          <Link href="/pricing" className="hover:text-black">Pricing</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/contact?intent=sales" className="rounded-xl bg-[var(--brand-primary)] text-white px-4 py-2 text-sm hover:opacity-90">Contact sales</Link>
        </div>

        <button className="md:hidden p-2" aria-label="menu" onClick={()=>setOpen(v=>!v)}>
          <span>☰</span>
        </button>
      </div>
    </header>
  );
}
