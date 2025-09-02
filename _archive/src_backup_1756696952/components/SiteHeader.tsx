import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <>
      <div className="w-full bg-slate-50 text-slate-700 text-[13px] border-b">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center gap-3 justify-center sm:justify-between">
          <div className="hidden sm:block">
            Public Beta is live.{" "}
            <Link href="/docs/quickstart" className="underline underline-offset-4 hover:text-slate-900">Read the Quickstart →</Link>
          </div>
          <div className="space-x-3">
            <Link href="/pricing" className="underline underline-offset-4 hover:text-slate-900">See pricing</Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/placeholder-light.svg" alt="PortPulse" width={120} height={24} />
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-700">
            <Link href="/#product" className="hover:text-slate-900">Product</Link>
            <Link href="/pricing" className="hover:text-slate-900">Pricing</Link>
            <Link href="/contact" className="hover:text-slate-900">Contact</Link>
            <a href="https://docs.useportpulse.com/openapi.json" target="_blank" rel="noreferrer noopener" className="hover:text-slate-900">OpenAPI</a>
            <a href="https://docs.useportpulse.com/EXAMPLES.md" target="_blank" rel="noreferrer noopener" className="hover:text-slate-900">Quickstart</a>
            <a href="https://docs.useportpulse.com/SDK.md" target="_blank" rel="noreferrer noopener" className="hover:text-slate-900">SDK Samples</a>
            <a href="https://status.useportpulse.com/" target="_blank" rel="noreferrer noopener" className="hover:text-slate-900">Status</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://docs.useportpulse.com/EXAMPLES.md" target="_blank" rel="noreferrer noopener" className="rounded-md border px-3 py-1.5 text-sm">Start free</a>
            <Link href="/contact" className="rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm">Talk to sales</Link>
          </div>
        </div>
      </header>
    </>
  );
}
