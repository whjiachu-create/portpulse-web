export default function SiteFooter() {
  const betaFree = process.env.NEXT_PUBLIC_BETA_FREE === "1";

  return (
    <footer className="mt-16 border-t border-black/10 bg-gradient-to-b from-white to-[#F6F8FB]">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="text-xl font-semibold">PortPulse</div>
          <p className="text-black/60 mt-2 text-sm">
            Port-level congestion & momentum APIs. Standardized JSON/CSV with freshness SLO.
          </p>

          {betaFree && (
            <div className="mt-3 text-sm rounded-lg border border-[#26B1FF]/30 bg-white px-3 py-2 text-[#0B2740]">
              <span className="font-medium">Public Beta:</span> Free access during beta.{" "}
              <a href="/contact?intent=request-key" className="underline">
                Request a key
              </a>
            </div>
          )}

          <p className="text-black/50 mt-4 text-xs">
            © {new Date().getFullYear()} PortPulse. All rights reserved.
          </p>
        </div>

        <FooterCol
          title="Product"
          items={[
            ["Product", "/product"],
            ["Pricing", "/pricing"],
            ["Docs / OpenAPI", "/docs/api"],
            ["Coverage", "/coverage"],
          ]}
        />

        <FooterCol
          title="Resources"
          items={[
            ["Blog", "/blog"],
            ["FAQ", "/faq"],
            ["Security", "/security"],
            ["Status", "https://stats.uptimerobot.com/PLya98iSza"],
          ]}
        />

        <FooterCol
          title="Company"
          items={[
            ["Talk to sales", "/contact?intent=sales"],
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["SLA", "/legal/sla"],
            ["DPA", "/legal/dpa"],
          ]}
        />
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-sm font-semibold mb-2">{title}</div>
      <ul className="space-y-2 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-black/70 hover:text-black transition"
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}