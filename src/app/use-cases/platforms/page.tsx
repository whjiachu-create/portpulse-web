import { PageWrapWide, LayoutWithTOC, Hero3, KPIStrip, StoryRow, ImageCards, SignalBlock, LogoQuote, OnePager, FAQ2, CTA3 } from "@/components/usecases/Blocks3";
export const dynamic = "force-static";

export default function Page() {
    return (
        <PageWrapWide>
            <LayoutWithTOC toc={[
                { id: "overview", label: "Overview" },
                { id: "story", label: "Pain → Impact → Solution" },
                { id: "gallery", label: "Screens" },
                { id: "proof", label: "Proof" },
                { id: "faq", label: "FAQ" },
                { id: "cta", label: "Get started" },
            ]}>
                <Hero3
                    eyebrow="Use case"
                    title="Platforms & Integrators"
                    subtitle="Embed congestion & momentum with a stable versioned contract, strong ETags, and JSON/CSV parity."
                    heroSrc="/use-cases3/platforms/hero.jpg"
                    heroAlt="Embedded widgets and ETL"
                    badge="v1 frozen"
                />
                <KPIStrip items={[
                    { value: "Days", label: "Time-to-ship integration" },
                    { value: "≥60%", label: "Edge cache-hit target" },
                    { value: "p95 < 300ms", label: "Typical latency" },
                ]} />
                <StoryRow
                    pain="Unversioned feeds, schema drift, and cache-hostile endpoints increase infra cost and incidents."
                    impact="Frequent hotfixes, inconsistent UI, broken exports."
                    solution="Frozen /v1, v1beta for changes; ETag/304 first-class; identical CSV/JSON fields; consistent error bodies."
                />
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <SignalBlock title="ETag behavior" desc="High cache-hit batch pulls via CSV" spark={[0.45, 0.58, 0.62, 0.66, 0.71, 0.69]} />
                    <SignalBlock title="Schema stability" desc="Same fields for overview/snapshot/trend/dwell" bars={[6, 6, 6, 6, 6, 6]} />
                    <SignalBlock title="Replay window" desc="30-day backfills for dashboards" spark={[5, 10, 15, 20, 25, 30]} />
                </div>
                <ImageCards items={[
                    { src: "/use-cases3/platforms/embed.jpg", alt: "Embed", caption: "Embed trend & snapshot widgets." },
                    { src: "/use-cases3/platforms/etl.jpg", alt: "ETL", caption: "ETL with CSV parity + ETags." },
                    { src: "/use-cases3/platforms/errors.jpg", alt: "Errors", caption: "Consistent error body {code,message,request_id,hint}." },
                ]} />
                <LogoQuote quote="Contract stability and ETags reduced load and incidents for our customers." who="VP Product, logistics SaaS" />
                <OnePager href="/pdfs/onepagers/PortPulse_Platforms.pdf" title="Platforms" />
                <FAQ2 items={[
                    { q: "Can we get region composites?", a: "Yes—composites and per-port signals share the same schema." },
                    { q: "How are breaking changes handled?", a: "Through v1beta with ≥90-day deprecation, migration notes provided." },
                ]} />
                <CTA3 />
            </LayoutWithTOC>
        </PageWrapWide>
    );
}