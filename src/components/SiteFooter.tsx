import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold mb-3">Developers</div>
          <ul className="space-y-2 text-slate-600">
            <li><a href="https://docs.useportpulse.com/EXAMPLES.md" target="_blank" rel="noreferrer noopener" className="hover:underline">Quickstart</a></li>
            <li><a href="https://docs.useportpulse.com/openapi.json" target="_blank" rel="noreferrer noopener" className="hover:underline">OpenAPI</a></li>
            <li><a href="https://docs.useportpulse.com/SDK.md" target="_blank" rel="noreferrer noopener" className="hover:underline">SDK Samples</a></li>
            <li><Link href="/play" className="hover:underline">API Playground</Link></li>
            <li><a href="https://docs.useportpulse.com/CHANGELOG.md" target="_blank" rel="noreferrer noopener" className="hover:underline">Changelog</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Trust & Legal</div>
          <ul className="space-y-2 text-slate-600">
            <li><Link href="/security" className="hover:underline">Security</Link></li>
            <li><a href="https://docs.useportpulse.com/SLA.md" target="_blank" rel="noreferrer noopener" className="hover:underline">SLA</a></li>
            <li><a href="https://docs.useportpulse.com/ERRORS.md" target="_blank" rel="noreferrer noopener" className="hover:underline">Errors</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-slate-600">
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><a href="https://status.useportpulse.com/" target="_blank" rel="noreferrer noopener" className="hover:underline">Status</a></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-slate-500 text-center pb-8">© {new Date().getFullYear()} PortPulse</div>
    </footer>
  );
}
