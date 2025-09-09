// src/blog/posts.tsx
import { SparkLine, Bars } from "@/components/blog/charts";

export type Post = {
  slug: string;
  title: string;
  date: string;        // ISO date
  intro: string;
  body: string;        // markdown-lite: 支持段落 / ## 小标题 / - 列表 / 图片 ![alt](src "caption")
  tags: string[];
  heroAlt?: string;
  heroSrc?: string;    // 新增：封面图（相对路径，如 /blog/.../hero.jpg）
};

export const posts: Post[] = [
  // ---- Long-form GA article (已上线) ----
  {
    slug: "portpulse-congestion-and-momentum-api-ga-2025-09-08",
    title: "PortPulse congestion & momentum data — API-first, comparable, and production ready",
    date: "2025-09-08",
    intro:
      "We are making port-level congestion and trade momentum data generally available via API. The release focuses on comparability across ports, transparent SLOs, and reproducible methods so teams can move from ad-hoc dashboards to production automation in days, not months.",
    heroAlt: "Overview of PortPulse API and standardized congestion metrics",
    // 若你把这篇的图片也放在 /public/blog/ 下，请把下面路径改成 /blog/ga-2025-09-08/hero.jpg
    heroSrc: "/images/blog/ga-2025-09-08/hero.jpg",
    tags: ["Product", "API", "Methods", "Operations", "Coverage"],
    body:
      `## Why this matters, now
Global planners have never had a simple, auditable way to compare congestion and dwell across gateways. Most teams still rely on screenshots, bespoke scrapers, or vendor dashboards that are hard to integrate. PortPulse takes a different path: an API-first data service that exposes the same standardized metrics in JSON and CSV, backed by freshness SLOs and a 30-day replay window.

## What we are releasing
Core endpoints under /v1 cover health, metadata, snapshot, trend, dwell, and alerts. Read endpoints ship with strong caching (CSV + ETag/304), consistent error bodies, and x-request-id for traceability. p95 latency < 300 ms at the edge with a 60%+ cache-hit target. Freshness SLO is p95 ≤ 2h with explicit timing fields for audit.

![Sample trend sparkline](/images/blog/ga-2025-09-08/spark.png "14–30d trend example shown as a sparkline")

## Who uses this
- Operators & supply teams: lane buffers, cut-off decisions for critical SKUs.
- Forwarders: dwell-based exceptions to portals; Slack/webhook alerts on thresholds.
- Funds/macro: standardized time series for indicators without apples-to-oranges.
- Data teams: replace fragile scrapers with a versioned, documented contract.

## Defining “comparable congestion”
- avg_wait_hours — robust proxy for waiting time (events + schedules + movement).
- queue_length — estimated queue size that pairs with avg_wait_hours.
- berth_efficiency — normalized throughput proxy.
- congestion_score — standardized per-port z-score → a 0–1 index, apples-to-apples.

## A pragmatic data pipeline
Multi-source ingest → harmonized events model → clipping at extremes → light smoothing → same-day latest wins → hourly ETL with retries and next-day backfill. A clean daily table you can trust.

## Contract-first API design
We freeze /v1; breaking changes go to v1beta with ≥90d deprecation. Unified error body {code,message,request_id,hint}. CSV emits strong ETags for conditional GETs and safe HEAD checks.

## Endpoints at a glance
- GET /v1/health
- GET /v1/meta/sources
- GET /v1/ports/{UNLOCODE}/overview | trend | snapshot | dwell | alerts
- GET /v1/hs/{code}/imports (beta)

## Coverage & expansion
We prioritize three corridors (APAC→NA, APAC→EU, TA). 100+ ports in scope; on-request additions onboard in 2–4 weeks under the same schema & SLO.

## Freshness & replay
Freshness p95 ≤ 2h; last_updated/as_of exposed. 30-day replay for audit/backtest. CSV + ETag/304 keeps pull jobs cheap and fast.

## Patterns we see working
1) Lane buffers with rules: raise buffer when congestion_score > 0.65 for 5+ consecutive days.
2) Booking exceptions: push Slack alert if queue_length jumps 2σ in a week.
3) BI apples-to-apples: combine absolute hours with normalized scores in a single view.

## Security & governance
Key prefixes per env, scoped by default, easy rotation; request_id in logs; GDPR/CCPA friendly; optional IP allow lists at the edge.

## Roadmap with stability
Near term: freshness dashboard; smarter /alerts (change-points); Port Packs & Hi-Confidence add-ons. All without breaking /v1.

## Trial & pricing
14-day evaluation for up to five ports. Lite/Starter/Pro tiers; Port Packs and Alerts add-ons. Keys provision automatically with cURL examples.

## Closing note
If you need a reliable way to embed port congestion and momentum into planning or customer apps, start with five ports and point BI/code at /v1. Standardized fields plus honest methods unlock automation fast.`
  },

  // ---- Long-form #1: Trans-Pacific spotlight ----
  {
    slug: "transpacific-spotlight-september",
    title: "Trans-Pacific Spotlight: West Coast Gateways Steady Amid Typhoon Diversions",
    date: "2025-09-05",
    intro:
      "US West Coast gateways held steady week-over-week while typhoon-led diversions raised anchorage dwell across East Asia. Our 30-day baseline shows variance within normal bands and a healthy recovery trajectory.",
    heroAlt: "US West Coast gateway and East Asia anchorage trends",
    heroSrc: "/blog/transpacific-spotlight-september/hero.jpg",  // ← 改为 jpg
    tags: ["Trans-Pacific", "USWC", "Operations"],
    body:
      `## Executive summary
West Coast gateways maintained stable flow, with LA/LB tracking near seasonal averages. Diversions into South China raised short-lived anchorage dwell; those spikes normalized within 72 hours as weather windows reopened. Rail fluidity into PRR/Vancouver improved, reducing inland congestion risk.

## By the numbers (30-day window)
- USLAX avg_wait_hours p50: 18.4h; p95: 38.2h
- USLGB avg_wait_hours p50: 17.9h; p95: 36.5h
- CNSZX (Yantian/Shekou) p95 peak: 42h (D-2); normalized ~28h by D
- HPHCM feeder roll ratio edged up 3–4 pp on week-end bunching

![USWC vs South China trend](/blog/transpacific-spotlight-september/figure-1.jpg "USLAX/USLGB vs CNSZX 30d")

## Signals to monitor next week
- Weekend bunching in South China hubs after weather holds; watch feeder rotations.
- Rail dwell into inland ramps for ex-Vancouver cargo; monitor PRR yard meters.
- Schedule reliability of your top-3 carriers into LA/LB; add exception alerts at 0.7+ congestion_score.

## How to reproduce with API
- Pull trend for USLAX and CNSZX over 30 days; fields=avg_wait_hours,congestion_score.
- Flag days where congestion_score > 0.65 or avg_wait_hours ↑30% w/w.
- Trigger Slack/webhook with last 5 points and a recommended buffer (+1–3 days).

## Actionable checklist
- For critical SKUs on TP1/TP2 strings, hold +1 day buffer until South China variability stabilizes.
- Keep exceptions live for weekend arrivals at LA/LB (Friday–Monday).
- Review inland rail bridges on SKUs routed via PRR to avoid last-mile delays.`
  },

  // ---- Long-form #2: Europe Q3 readout ----
  {
    slug: "europe-hubs-and-gateways-q3-readout",
    title: "Europe Q3 Readout: North Range Hubs vs. Mediterranean Transshipment",
    date: "2025-09-03",
    intro:
      "North Range gateways (RTM/ANR/HAM) operated within one standard deviation of 2024 means. Mediterranean transshipment hubs displayed higher variance tied to feeder rotations and weather windows.",
    heroAlt: "North Range and Mediterranean volatility comparison",
    heroSrc: "/blog/europe-hubs-and-gateways-q3-readout/hero.jpg",  // ← 改为 jpg
    tags: ["Europe", "North Range", "Mediterranean"],
    body:
      `## What stood out in Q3
North Range gateways kept berth occupancy steady; Rotterdam and Antwerp saw modest improvements in schedule reliability. West Med used Valencia as a shock absorber for late arrivals from the Transatlantic. Algeciras and Piraeus experienced volatility linked to feeder bunching.

## Metrics (last 30 days)
- NLRTM congestion_score p95: 0.62
- BEANR congestion_score p95: 0.65
- ESALG transfer dwell p95: 31h (rollovers on feeders)

![North Range vs Med bars](/blog/europe-hubs-and-gateways-q3-readout/figure-1.jpg "Volatility and dwell")

## Planning implications
- Gateway choice: For West Med-bound cargo with tight SLAs, Valencia remains the safer buffer versus direct transshipment.
- BAF & lead-time reviews: Hold a +1 day buffer for flows touching ESALG during high-variance weeks.
- Exception design: Trigger alerts when transfer dwell crosses 30h or congestion_score stays >0.65 for 5 consecutive days.

## How to build this in your BI
- Rank gateways by 85th percentile dwell variance and overlay normalized congestion_score.
- Use a single cross-port threshold (0.65) to simplify lane-level rules across RTM/ANR/VLC.`
  },

  // ---- Long-form #3: APAC catch-up ----
  {
    slug: "apac-supply-catchup-and-rail-bridges",
    title: "APAC Catch-Up: Export Hubs Recover; India Ramps Rail Bridges",
    date: "2025-09-01",
    intro:
      "Export hubs in CN/KR/SG normalized after weather impacts, while India leaned on inland rail bridges to keep gates fluid at peak weeks.",
    heroAlt: "APAC hubs normalization and India inland rail bridges",
    heroSrc: "/blog/apac-supply-catchup-and-rail-bridges/hero.jpg",  // ← 改为 jpg
    tags: ["APAC", "Exports", "Rail"],
    body:
      `## Recovery snapshot
Shanghai and Ningbo improved gate cycle time by 6–9% versus the prior fortnight. Singapore absorbed diverted strings with negligible dwell impact; Busan kept transshipment steady. Nhava Sheva and Mundra made effective use of inland rail bridges to mitigate yard pressure.

## Playbook
- Keep a rolling 14-day mean for avg_wait_hours on CNSHA/CNNGB to confirm stabilization.
- Watch weekly yard dwell at NHAVA SHEVA and MUNDRA; route time-sensitive SKUs via rail bridges on peak weeks.
- Add alerts when congestion_score > 0.7 at any of the four hubs or when dwell variance jumps >2σ w/w.

![APAC hub normalization](/blog/apac-supply-catchup-and-rail-bridges/figure-1.jpg "Export hubs normalization (30d)")`
  },
];

// Mini charts for cards (optional)
export function TeaserChart({ kind }: { kind: "spark" | "bars" }) {
  if (kind === "spark") return <SparkLine data={[14, 16, 18, 15, 19, 17, 21, 18, 20, 19, 18]} />;
  return <Bars data={[20, 28, 22, 30, 25, 27, 24, 29]} />;
}

// Helpers
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
export function getAllPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}