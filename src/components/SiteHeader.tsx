"use client";

import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/logos/placeholder-light.svg"
              alt="PortPulse"
              width={120}
              height={22}
              className="h-[22px] w-auto"
              priority
            />
          </Link>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
            Public Beta
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-5 text-sm md:flex">
          <Link href="/pricing" className="text-slate-700 hover:text-slate-900">
            Product
          </Link>
          <Link href="/pricing" className="text-slate-700 hover:text-slate-900">
            Pricing
          </Link>
          <Link href="/contact" className="text-slate-700 hover:text-slate-900">
            Contact
          </Link>

          <a
            href="https://docs.useportpulse.com/openapi.json"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-700 hover:text-slate-900"
          >
            OpenAPI
          </a>
          <a
            href="https://docs.useportpulse.com/EXAMPLES.md"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-700 hover:text-slate-900"
          >
            Quickstart
          </a>
          <a
            href="https://docs.useportpulse.com/SDK.md"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-700 hover:text-slate-900"
          >
            SDK Samples
          </a>
          <a
            href="https://docs.useportpulse.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-700 hover:text-slate-900"
          >
            Docs
          </a>
          <a
            href="https://status.useportpulse.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-700 hover:text-slate-900"
          >
            Status
          </a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <Link
            href="/pricing"
            className="hidden rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-50 md:inline-flex"
          >
            Start free
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </header>
  );
}