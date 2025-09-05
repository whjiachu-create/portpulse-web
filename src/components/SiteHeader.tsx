"use client";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-slate-900">PortPulse</Link>
        <nav className="hidden md:flex items-center gap-5 text-sm text-slate-700">
          <Link href="/product" className="hover:text-slate-900">Product</Link>
          <Link href="/use-cases" className="hover:text-slate-900">Use Cases</Link>
          <Link href="/methods" className="hover:text-slate-900">Data & Methods</Link>
          <Link href="/pricing" className="hover:text-slate-900">Pricing</Link>
          <Link href="/docs" className="hover:text-slate-900">Docs</Link>
          <Link href="/blog" className="hover:text-slate-900">Blog</Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/pricing" className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-sm">Start free</Link>
          <Link href="/contact?type=sales" className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm">Talk to sales</Link>
        </div>
      </div>
    </header>
  );
}
