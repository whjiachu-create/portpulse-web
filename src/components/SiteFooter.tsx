import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-10 text-sm text-slate-600">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-semibold text-slate-900 mb-2">PortPulse</div>
            <p className="text-slate-600">APIs for port congestion, dwell, snapshots & alerts.</p>
          </div>
          <div>
            <div className="font-medium text-slate-900 mb-2">Developers</div>
            <ul className="space-y-1">
              <li><Link href="/docs/api" className="hover:underline">OpenAPI</Link></li>
              <li><Link href="/docs/examples" className="hover:underline">Examples</Link></li>
              <li><Link href="/status" className="hover:underline">Status</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-slate-900 mb-2">Company</div>
            <ul className="space-y-1">
              <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/coverage" className="hover:underline">Coverage</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-slate-900 mb-2">Legal</div>
            <ul className="space-y-1">
              <li><Link href="/docs/sla" className="hover:underline">SLA</Link></li>
              <li><Link href="/docs/errors" className="hover:underline">Errors</Link></li>
              <li><Link href="/docs/privacy" className="hover:underline">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} PortPulse</div>
      </div>
    </footer>
  );
}
