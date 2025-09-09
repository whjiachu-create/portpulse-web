// src/components/Solutions.tsx
import Link from "next/link";
import type { SVGProps } from "react";

/* ===== 品牌化图标（单色 #0B2740，1.6px 圆角笔触） ===== */
const stroke = 1.6;
const brand = "#0B2740";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-grid h-9 w-9 place-items-center rounded-xl bg-[#0B2740]/5 ring-1 ring-[#0B2740]/10 text-[#0B2740]">
      {children}
    </span>
  );
}

function BoxShipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M3 13h18" stroke={brand} strokeWidth={stroke} strokeLinecap="round" />
      <rect x="4" y="7.5" width="7.5" height="4.5" rx="1.2" stroke={brand} strokeWidth={stroke} />
      <rect x="12.5" y="7.5" width="7.5" height="4.5" rx="1.2" stroke={brand} strokeWidth={stroke} />
      <path d="M5 17c1.3 0 1.3-1 2.6-1s1.3 1 2.6 1 1.3-1 2.6-1 1.3 1 2.6 1 1.3-1 2.6-1" stroke={brand} strokeWidth={stroke} fill="none" />
    </svg>
  );
}

function BellSparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M18 10a6 6 0 1 0-12 0c0 4-2 5-2 5h16s-2-1-2-5Z" stroke={brand} strokeWidth={stroke} fill="none" />
      <path d="M12 21a2.6 2.6 0 0 0 2.4-2.1h-4.8A2.6 2.6 0 0 0 12 21Z" fill={brand} opacity=".18" />
      <path d="M16.8 4.2l1.1-1.1M18.8 6.2l1.1-1.1" stroke={brand} strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

function QueueWavesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M4 6h6M4 10h10M4 14h14" stroke={brand} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M3 18c2.5 0 2.5-1 5-1s2.5 1 5 1 2.5-1 5-1 2.5 1 3 1" stroke={brand} strokeWidth={stroke} fill="none" />
    </svg>
  );
}

function CraneApiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M4 20h16M6 20V8h8l4-3" stroke={brand} strokeWidth={stroke} fill="none" strokeLinecap="round" />
      <rect x="11" y="11" width="4.5" height="4.5" rx="1.2" stroke={brand} strokeWidth={stroke} />
      <path d="M9 12.5l-1.8 1.8M15 12.5l1.8 1.8" stroke={brand} strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

/* ===== 数据 ===== */
type Card = {
  title: string;
  tag: string;
  desc: string;
  href: string;
  Icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
};

const CARDS: Card[] = [
  {
    title: "Container & Port Tracking",
    tag: "Ops / Supply",
    desc: "Unify vessel/box milestones with port snapshots via API. Plan arrivals and handoffs with one source of truth.",
    href: "/use-cases/shippers",
    Icon: BoxShipIcon,
  },
  {
    title: "Predictive ETAs & Alerts",
    tag: "Platform / SRE",
    desc: "Exception-first ETAs with reasons. Thresholds & anomalies to Slack/Webhook to keep stakeholders proactive.",
    href: "/use-cases/tech",
    Icon: BellSparkIcon,
  },
  {
    title: "Port Congestion & Dwell",
    tag: "Planning / Macro",
    desc: "Comparable waiting hours, queue length and berth efficiency across regions. Reduce uncertainty and buffer.",
    href: "/use-cases/macro",
    Icon: QueueWavesIcon,
  },
  {
    title: "Terminal Events & APIs",
    tag: "LSP / Carrier",
    desc: "Import/export milestones in one schema. JSON/CSV with ETag/304 caching, p95 ≤ 300ms, 30-day replay.",
    href: "/use-cases/lsp",
    Icon: CraneApiIcon,
  },
];

/* ===== 组件 ===== */
export default function Solutions() {
  return (
    <section aria-labelledby="solutions-title">
      <h2 id="solutions-title" className="text-xl font-medium mb-3">Solutions</h2>
      {/* 无外框；四卡直接落在背景上 */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {CARDS.map(({ title, tag, desc, href, Icon }) => (
          <article
            key={title}
            className="group rounded-2xl bg-white p-5 shadow-floating transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconCircle><Icon className="h-5 w-5" /></IconCircle>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
                  {tag}
                </span>
              </div>
            </div>

            <h3 className="mt-3 text-[15px] font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>

            <Link href={href} className="mt-3 inline-flex items-center text-sm font-medium text-[#0B2740] hover:opacity-80">
              Learn more <span aria-hidden className="ml-1">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}