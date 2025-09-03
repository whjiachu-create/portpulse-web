export type Post = {
  slug: string;
  title: string;
  date: string;    // YYYY-MM-DD
  summary: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "weekly-port-congestion-001",
    title: "Weekly port congestion snapshot — Top trade lanes",
    date: "2025-09-01",
    summary:
      "US West Coast easing vs. APAC rebounds. Momentum changes at USLAX, USNYC, SGSIN with 14d view.",
    body:
`Highlights

- USLAX wait time down vs. prior week; USNYC flat; SGSIN momentum rebounding.
- Method: 14-day rolling medians from /v1/ports/{unlocode}/trend (JSON/CSV).
- Reproducible: queries & CSV snippets included in the docs.`,
  },
  {
    slug: "methods-notes-congestion-score",
    title: "Methods notes: how we construct a comparable congestion score",
    date: "2025-08-28",
    summary:
      "Inputs, cleaning and normalization for port-level wait time and flow proxies. Reproducible JSON/CSV.",
    body:
`We standardize inputs from AIS & public stats, then:
1) Clean: outliers & drift correction
2) Normalize: cross-port comparable scaling
3) Compose: wait, dwell, queue length → congestion score (0–100)`,
  },
  {
    slug: "coverage-update-aug",
    title: "Coverage update: +12 ports onboarded on-request",
    date: "2025-08-21",
    summary:
      "Added key hubs across NA/EU/APAC. Typical onboarding 2–4 weeks under the same schema & SLO.",
    body:
`New ports include: USSEA, USSAV, NLRTM, DEHAM, SGSIN.
All follow the same schema & freshness SLO. Request a port from /coverage.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
