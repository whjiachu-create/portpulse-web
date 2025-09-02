"use client";

import Link from "next/link";

const items = [
  { href: "/pricing", label: "Pricing" },
  { href: "https://docs.useportpulse.com/EXAMPLES.md", label: "Quickstart", ext: true },
  { href: "https://docs.useportpulse.com/openapi.json", label: "OpenAPI", ext: true },
  { href: "https://docs.useportpulse.com/SDK.md", label: "SDK Samples", ext: true },
  { href: "https://docs.useportpulse.com/CHANGELOG.md", label: "Changelog", ext: true },
  { href: "https://docs.useportpulse.com/ERRORS.md", label: "Errors", ext: true },
  { href: "https://status.useportpulse.com/", label: "Status", ext: true },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-3">
          {items.map((x) =>
            "ext" in x && x.ext ? (
              <a
                key={x.label}
                href={x.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline"
              >
                {x.label}
              </a>
            ) : (
              <Link
                key={x.label}
                href={x.href}
                className="text-sm text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline"
              >
                {x.label}
              </Link>
            )
          )}
        </div>
        <div className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} PortPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
