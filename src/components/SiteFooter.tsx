export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-gradient-to-b from-white to-[#F6F8FB]">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="text-xl font-semibold">PortPulse</div>
          <p className="text-black/60 mt-2 text-sm">
            Port-level congestion & momentum APIs. Standardized JSON/CSV with freshness SLO.
          </p>
          <p className="text-black/50 mt-4 text-xs">© {new Date().getFullYear()} PortPulse. All rights reserved.</p>
        </div>

        <FooterCol title="Product" items={[
          ["Product", "/product"],
          ["Pricing", "/pricing"],
          ["Docs / OpenAPI", "/docs/api"],
          ["Coverage", "/coverage"],
        ]} />

        <FooterCol title="Resources" items={[
          ["Blog", "/blog"],
          ["FAQ", "/faq"],
          ["Security", "/security"],
          ["Status", "https://status.useportpulse.com"],
        ]} />

        <FooterCol title="Company" items={[
          ["Talk to sales", "/contact?intent=sales"],
          ["Privacy", "/privacy"],
          ["Terms", "/terms"],
          ["SLA", "/legal/sla"],
          ["DPA", "/legal/dpa"],
        ]} />
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
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}