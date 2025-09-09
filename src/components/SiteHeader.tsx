"use client";
import Link from "next/link";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">
    {children}
  </Link>
);

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="PortPulse Home">
          <img src="/logos/portpulse-mark.svg" alt="PortPulse" width={32} height={32} className="h-8 w-8" />
          <span className="text-[17px] font-semibold tracking-tight text-slate-900">PortPulse</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center">
          <NavLink href="/product/congestion">Product</NavLink>
          <NavLink href="/use-cases">Use Cases</NavLink>
          <NavLink href="/methods">Data & Methods</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/docs/api">Docs</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/play">Playground</NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/pricing"
            data-cta="start-free"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B2740] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 transition"
          >
            Start free
          </Link>
          <Link
            href="/contact?intent=sales"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </header>
  );
}
