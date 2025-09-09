// src/components/usecases/Blocks3.tsx
import React from "react";

/* ---------- 基础容器 ---------- */
export function PageWrapWide({ children }: { children: React.ReactNode }) {
    return <main className="container mx-auto max-w-7xl px-4 py-10">{children}</main>;
}

/* ---------- 侧边 TOC 布局 ---------- */
export function LayoutWithTOC({
    toc,
    children,
}: {
    toc: { id: string; label: string }[];
    children: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-12 gap-6">
            <aside className="hidden lg:block col-span-3">
                <div className="sticky top-16 rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-black/60">On this page</div>
                    <ul className="mt-3 space-y-2 text-sm">
                        {toc.map((t) => (
                            <li key={t.id}>
                                <a href={`#${t.id}`} className="text-black/70 hover:text-black">{t.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <section className="col-span-12 lg:col-span-9">{children}</section>
        </div>
    );
}

/* ---------- Hero（大标题 + 头图） ---------- */
export function Hero3({
    eyebrow,
    title,
    subtitle,
    heroSrc,
    heroAlt,
    badge,
}: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    heroSrc?: string;
    heroAlt?: string;
    badge?: string;
}) {
    return (
        <header id="overview">
            {eyebrow && <div className="text-xs font-semibold text-black/60">{eyebrow}</div>}
            <h1 className="mt-1 text-3xl md:text-4xl font-semibold">{title}</h1>
            <p className="mt-2 text-black/70 max-w-3xl">{subtitle}</p>
            {heroSrc && (
                <figure className="mt-5">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-black/10">
                        <img src={heroSrc} alt={heroAlt || title} className="w-full h-full object-cover" />
                    </div>
                    {(heroAlt || badge) && (
                        <figcaption className="text-xs text-black/60 mt-2">
                            {heroAlt} {badge ? <span className="ml-2 inline-flex rounded-full bg-black/5 px-2 py-[2px]">{badge}</span> : null}
                        </figcaption>
                    )}
                </figure>
            )}
        </header>
    );
}

/* ---------- KPI 横条 ---------- */
export function KPIStrip({ items }: { items: { value: string; label: string }[] }) {
    return (
        <section className="mt-8 grid gap-3 md:grid-cols-3">
            {items.map((m) => (
                <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="text-2xl font-semibold">{m.value}</div>
                    <div className="text-sm text-black/70">{m.label}</div>
                </div>
            ))}
        </section>
    );
}

/* ---------- 讲故事（三段式） ---------- */
export function StoryRow({
    pain,
    impact,
    solution,
}: {
    pain: string;
    impact: string;
    solution: string;
}) {
    const Box = ({ title, text }: { title: string; text: string }) => (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-sm font-semibold">{title}</div>
            <p className="mt-2 text-sm text-black/75 leading-6">{text}</p>
        </div>
    );
    return (
        <section id="story" className="mt-10">
            <div className="grid gap-4 md:grid-cols-3">
                <Box title="Pain" text={pain} />
                <Box title="Impact" text={impact} />
                <Box title="Solution" text={solution} />
            </div>
        </section>
    );
}

/* ---------- 图文卡片（最多 3 张） ---------- */
export function ImageCards({
    items,
}: {
    items: { src: string; alt: string; caption?: string }[];
}) {
    return (
        <section id="gallery" className="mt-10">
            <div className="grid gap-4 md:grid-cols-3">
                {items.map((it, i) => (
                    <figure key={i} className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                        <img src={it.src} alt={it.alt} className="w-full h-48 object-cover" />
                        {it.caption && <figcaption className="p-3 text-xs text-black/70">{it.caption}</figcaption>}
                    </figure>
                ))}
            </div>
        </section>
    );
}

/* ---------- 内联 SVG 迷你图（Sparkline） ---------- */
export function MiniSpark({ data }: { data: number[] }) {
    const w = 300, h = 80, pad = 8;
    const xs = data.map((_, i) => pad + (i * (w - 2 * pad)) / (data.length - 1));
    const min = Math.min(...data), max = Math.max(...data);
    const ys = data.map((v) => h - pad - ((v - min) / (max - min || 1)) * (h - 2 * pad));
    const d = xs.map((x, i) => `${i ? "L" : "M"} ${x} ${ys[i]}`).join(" ");
    const last = data[data.length - 1];
    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
            <rect x="0" y="0" width={w} height={h} fill="white" />
            <path d={d} fill="none" stroke="currentColor" className="text-slate-900" strokeWidth="2" />
            <text x={w - 4} y={h - 6} textAnchor="end" fontSize="10" fill="#64748b">
                last: {last.toFixed(1)}
            </text>
        </svg>
    );
}

/* ---------- 内联 SVG 迷你柱状 ---------- */
export function MiniBars({ data }: { data: number[] }) {
    const w = 300, h = 80, pad = 8;
    const max = Math.max(...data);
    const bw = (w - 2 * pad) / data.length;
    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
            <rect x="0" y="0" width={w} height={h} fill="white" />
            {data.map((v, i) => {
                const bh = ((v) / (max || 1)) * (h - 2 * pad);
                return <rect key={i} x={pad + i * bw} y={h - pad - bh} width={bw - 2} height={bh} fill="currentColor" className="text-slate-900" />;
            })}
        </svg>
    );
}

/* ---------- 指标 + 迷你图的组合块 ---------- */
export function SignalBlock({
    title,
    desc,
    spark,
    bars,
}: {
    title: string;
    desc: string;
    spark?: number[];
    bars?: number[];
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-semibold">{title}</div>
            <p className="text-sm text-black/70 mt-1">{desc}</p>
            <div className="mt-3">
                {spark && <MiniSpark data={spark} />}
                {bars && <MiniBars data={bars} />}
            </div>
        </div>
    );
}

/* ---------- 证据：Logo + 引言 ---------- */
export function LogoQuote({
    quote,
    who,
    logoSrc,
}: {
    quote: string;
    who: string;
    logoSrc?: string;
}) {
    return (
        <section id="proof" className="mt-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 flex items-center gap-4">
                {logoSrc && <img src={logoSrc} alt="" className="h-8 opacity-80" />}
                <div>
                    <div className="text-lg">“{quote}”</div>
                    <div className="text-sm text-black/60 mt-1">{who}</div>
                </div>
            </div>
        </section>
    );
}

/* ---------- 一页纸下载 ---------- */
export function OnePager({ href, title }: { href: string; title: string }) {
    return (
        <section className="mt-10">
            <a href={href} className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-4 py-2 text-sm hover:bg-black/5">
                <img src="/file.svg" className="h-4 w-4" alt="" />
                Download one-pager — {title}.pdf
            </a>
        </section>
    );
}

/* ---------- FAQ & CTA ---------- */
export function FAQ2({ items }: { items: { q: string; a: string }[] }) {
    return (
        <section id="faq" className="mt-10">
            <h3 className="text-sm font-semibold">FAQ</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
                {items.map((f, i) => (
                    <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="font-medium">{f.q}</div>
                        <div className="text-sm text-black/70 mt-1">{f.a}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function CTA3() {
    return (
        <section id="cta" className="mt-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-3">
                <div>
                    <div className="font-semibold">Start a 14-day evaluation (5 ports) or talk to us for bundles.</div>
                    <div className="text-sm text-black/60">Standardized metrics · Freshness SLO · Replay window.</div>
                </div>
                <div className="flex gap-2">
                    <a href="/signup" className="rounded-lg bg-black text-white px-4 py-2 text-sm">Start evaluation</a>
                    <a href="/contact?intent=sales" className="rounded-lg border border-black/15 px-4 py-2 text-sm">Book a call</a>
                </div>
            </div>
        </section>
    );
}