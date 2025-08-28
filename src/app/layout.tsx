import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortPulse — Port Operations API",
  description: "实时港口运营指标 API（Trend / Dwell / Snapshot / Alerts），5 分钟跑通，面向生产环境。",
};

function StatusPill({ status }: { status: "online" | "degraded" | "offline" }) {
  const map = {
    online: { text: "Online", cls: "bg-green-100 text-green-700 ring-green-200" },
    degraded: { text: "Degraded", cls: "bg-yellow-100 text-yellow-800 ring-yellow-200" },
    offline: { text: "Offline", cls: "bg-red-100 text-red-700 ring-red-200" },
  }[status];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ring-1 ${map.cls}`}>
      <span className="size-2 rounded-full bg-current/70"></span>{map.text}
    </span>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-lg font-semibold tracking-tight">PortPulse</Link>
              <span className="hidden text-xs text-gray-500 sm:inline">API for Port Operations</span>
            </div>
            <div className="hidden items-center gap-6 sm:flex">
              <a href="https://docs.useportpulse.com/openapi.json" className="text-sm text-gray-600 hover:text-gray-900">OpenAPI</a>
              <a href="https://docs.useportpulse.com/EXAMPLES.md" className="text-sm text-gray-600 hover:text-gray-900">Quickstart</a>
              <a href="https://docs.useportpulse.com/SDK.md" className="text-sm text-gray-600 hover:text-gray-900">SDK Samples</a>
              <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/contact"><Button size="sm">Contact</Button></Link>
            </div>
            <div className="sm:hidden">
              <Link href="/contact"><Button size="sm" variant="outline">Contact</Button></Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-3">
            <div>
              <div className="font-semibold">PortPulse</div>
              <div className="mt-2 text-sm text-gray-600">可复现的港口运营数据，助力供应链决策。</div>
            </div>
            <div className="text-sm text-gray-600">
              <div className="font-medium text-gray-900">Resources</div>
              <ul className="mt-2 space-y-1">
                <li><a className="hover:underline" href="https://docs.useportpulse.com/">Docs</a></li>
                <li><a className="hover:underline" href="https://status.useportpulse.com/">Status</a></li>
                <li><a className="hover:underline" href="https://docs.useportpulse.com/PRICING.md">SLA / Errors</a></li>
              </ul>
            </div>
            <div className="text-sm text-gray-600">
              <div className="font-medium text-gray-900">Contact</div>
              <ul className="mt-2 space-y-1">
                <li><a className="hover:underline" href="mailto:sales@useportpulse.com">sales@useportpulse.com</a></li>
                <li><a className="hover:underline" href="mailto:support@useportpulse.com">support@useportpulse.com</a></li>
                <li><Link className="hover:underline" href="/contact">Book a demo →</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t py-6 text-center text-xs text-gray-500">© 2025 PortPulse.</div>
        </footer>
      </body>
    </html>
  );
}
