import Link from "next/link";

export default function FooterLinks() {
  return (
    <footer className="border-t bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Developers</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="https://docs.useportpulse.com/openapi.json" target="_blank" rel="noreferrer noopener">OpenAPI</a></li>
            <li><a href="https://docs.useportpulse.com/EXAMPLES.md" target="_blank" rel="noreferrer noopener">Quickstart</a></li>
            <li><a href="https://docs.useportpulse.com/SDK.md" target="_blank" rel="noreferrer noopener">SDK Samples</a></li>
            <li><a href="https://docs.useportpulse.com/postman/portpulse_postman.json" target="_blank" rel="noreferrer noopener">Postman</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Resources</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><Link href="/pricing">Pricing</Link></li>
            <li><a href="https://status.useportpulse.com/" target="_blank" rel="noreferrer noopener">Status</a></li>
            <li><a href="https://docs.useportpulse.com/SLA.md" target="_blank" rel="noreferrer noopener">SLA</a></li>
            <li><a href="https://docs.useportpulse.com/ERRORS.md" target="_blank" rel="noreferrer noopener">Errors</a></li>
            <li><a href="https://docs.useportpulse.com/CHANGELOG.md" target="_blank" rel="noreferrer noopener">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/security">Security</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
