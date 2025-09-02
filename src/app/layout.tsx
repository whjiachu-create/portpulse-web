import Analytics from "@/components/Analytics";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "PortPulse — APIs for Port Operations", template: "%s · PortPulse" },
  description: "Unified APIs for congestion, dwell and port operations data. Get running in 5 minutes; production-ready in ~30.",
  alternates: { canonical: "/" },
  openGraph: { title: "PortPulse", type: "website" },
};

const NAV = [
  { href: "/", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "https://docs.useportpulse.com/openapi.json", label: "OpenAPI", ext: true },
  { href: "https://docs.useportpulse.com/EXAMPLES.md", label: "Quickstart", ext: true },
  { href: "https://docs.useportpulse.com/SDK.md", label: "SDK Samples", ext: true },
  { href: "https://docs.useportpulse.com", label: "Docs", ext: true },
  { href: "https://status.useportpulse.com", label: "Status", ext: true },
] as const satisfies ReadonlyArray<{ href: string; label: string; ext?: boolean }>;

function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ring-1 ${className}`}>
      <span className="size-1.5 rounded-full bg-current/70" />
      {children}
    </span>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" translate="no" className="notranslate">
      <head><meta name="google" content="notranslate" /></head>
      <body className="antialiased text-slate-900 bg-white">
        {/* 顶部公告 */}
        <div className="w-full text-center text-sm bg-slate-50 border-b border-slate-200 py-2">
          <span className="mr-2">Public Beta is live.</span>
          <a className="underline underline-offset-4 hover:text-slate-700" href="https://docs.useportpulse.com/EXAMPLES.md" target="_blank" rel="noreferrer noopener">Read the Quickstart →</a>
          <span className="mx-2 text-slate-400">|</span>
          <Link className="underline underline-offset-4 hover:text-slate-700" href="/pricing">See pricing ($199 / $399 / $899)</Link>
        </div>

        {/* 导航 */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* === BRAND（已放大 + 新圆形徽标）=== */}
              <Link href="/" className="flex items-center gap-2" aria-label="PortPulse home">
                <Image
                  src="/logos/portpulse-mark.svg"   // 若想用整块牌照式 logo：/logos/portpulse-badge.svg
                  alt="PortPulse"
                  width={44}
                  height={44}
                  priority
                  className="h-10 w-10 md:h-11 md:w-11"  // 比之前更大
                />
                <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
                  Port
                  <span className="text-sky-500 relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-sky-400/60 after:content-['']">
                    Pulse
                  </span>
                </span>
              </Link>
              {/* === /BRAND === */}

              <Pill className="text-emerald-700 ring-emerald-200 bg-emerald-50">Public Beta</Pill>
              <div className="hidden md:flex items-center gap-5">
                {NAV.map((n) =>
                  ("ext" in n && n.ext) ? (
                    <a key={n.label} href={n.href} target="_blank" rel="noreferrer noopener" className="text-sm text-slate-600 hover:text-slate-900">{n.label}</a>
                  ) : (
                    <Link key={n.label} href={n.href} className="text-sm text-slate-600 hover:text-slate-900">{n.label}</Link>
                  )
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="https://docs.useportpulse.com/EXAMPLES.md" target="_blank" rel="noreferrer noopener" className="text-sm px-3 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">Start free</a>
              <Link href="/contact" className="text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Talk to sales</Link>
            </div>

            {/* 移动端菜单 */}
            <div className="md:hidden">
              <details className="group relative">
                <summary className="list-none cursor-pointer p-2 -mr-2 rounded-lg hover:bg-slate-100">☰</summary>
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg p-2">
                  <div className="flex flex-col">
                    {NAV.map((n) =>
                      ("ext" in n && n.ext) ? (
                        <a key={n.label} href={n.href} target="_blank" rel="noreferrer noopener" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50">{n.label}</a>
                      ) : (
                        <Link key={n.label} href={n.href} className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50">{n.label}</Link>
                      )
                    )}
                    <a href="https://docs.useportpulse.com/EXAMPLES.md" target="_blank" rel="noreferrer noopener" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50">Start free</a>
                    <Link href="/contact" className="px-3 py-2 rounded-lg text-sm bg-slate-900 text-white text-center mt-1">Talk to sales</Link>
                  </div>
                </div>
              </details>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* 页脚 */}
        <footer className="mt-20 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-4">
            <div>
              <div className="font-semibold mb-3">PortPulse</div>
              <p className="text-sm text-slate-600">Predictable port operations via stable APIs.</p>
              <p className="mt-2 text-xs text-slate-500">USD pricing; VAT/GST handled via Stripe Tax.</p>
            </div>
            <div>
              <div className="font-medium mb-2">Company</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
                <li><a href="https://docs.useportpulse.com" target="_blank" rel="noreferrer noopener" className="hover:underline">Docs</a></li>
                <li><a href="https://status.useportpulse.com" target="_blank" rel="noreferrer noopener" className="hover:underline">Status</a></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Legal</div>
              <ul className="space-y-2 text-sm">
                <li><a className="hover:underline" href="https://docs.useportpulse.com/SLA.md" target="_blank" rel="noreferrer noopener">SLA</a></li>
                <li><a className="hover:underline" href="https://docs.useportpulse.com/ERRORS.md" target="_blank" rel="noreferrer noopener">Errors</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Contact</div>
              <ul className="space-y-2 text-sm">
                <li>Email: <a className="underline" href="mailto:sales@useportpulse.com">sales@useportpulse.com</a></li>
                <li>Book a demo → (coming soon)</li>
                <li><Link className="underline" href="/contact">Or book a live demo →</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} PortPulse. All rights reserved.</div>
        </footer>
        <Analytics />
    </body>
    </html>
  );
}
