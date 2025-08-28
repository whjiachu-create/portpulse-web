import Link from "next/link";

const plans = [
  { name: "Starter-Lite", price: 199, ports: "2", req: "25k", history: "30d", sla: "—", alerts: "—", cta: "/contact" },
  { name: "Starter", price: 399, ports: "5", req: "100k", history: "90d", sla: "99.5%", alerts: "Email", cta: "/contact", popular: true },
  { name: "Pro-Region", price: 899, ports: "12", req: "200k", history: "180d", sla: "99.9%", alerts: "Email/Webhook", cta: "/contact" },
  { name: "Pro", price: 1499, ports: "25", req: "500k", history: "365d", sla: "99.9%", alerts: "Email/Webhook", cta: "/contact" },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-2 max-w-2xl text-gray-600">按港口数 / 请求量 / 历史窗口分档，年付 9 折；支持企业合同。</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl border p-6 ${p.popular ? "ring-2 ring-blue-200" : ""}`}>
            <div className="flex items-center justify-between">
              <div className="font-medium">{p.name}</div>
              {p.popular && <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-200">Popular</span>}
            </div>
            <div className="mt-3 text-3xl font-semibold">${p.price}<span className="text-base font-normal text-gray-500">/mo</span></div>
            <ul className="mt-4 space-y-1 text-sm text-gray-700">
              <li>Ports: {p.ports}</li>
              <li>Requests/mo: {p.req}</li>
              <li>History window: {p.history}</li>
              <li>Alerts: {p.alerts}</li>
              <li>SLA: {p.sla}</li>
            </ul>
            <Link href={p.cta} className="mt-6 inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">
              联系我们
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border bg-gray-50 p-6">
        <div className="text-sm text-gray-700">
          Add-ons：额外港口 $20/port/mo；额外 10k 请求 $5；历史回填 $500/port/year。
          企业计划（SSO/SIEM、专线、严格 SLA）请联系 <a className="underline" href="mailto:sales@useportpulse.com">sales@useportpulse.com</a>。
        </div>
      </div>
    </div>
  );
}
