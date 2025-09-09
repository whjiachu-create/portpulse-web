export type BlogPost = {
  slug: string;
  title: string;
  date: string;          // ISO
  excerpt: string;
  tags: string[];
  hero: string;          // /public path
  readingMinutes: number;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "weekly-port-congestion-2025-09-01",
    title: "Weekly port congestion snapshot — Top trade lanes",
    date: "2025-09-01",
    excerpt:
      "US West Coast easing vs. APAC rebounds. Momentum changes at USLAX, USNYC, SGSIN with 14-day view.",
    tags: ["Weekly", "Congestion", "Transpacific"],
    hero: "/blog/weekly-2025-09-01.svg",
    readingMinutes: 6,
  },
  {
    slug: "methods-congestion-score-2025-08-28",
    title: "Methods notes: how we construct a comparable congestion score",
    date: "2025-08-28",
    excerpt:
      "Inputs, cleaning and normalization for port-level wait time and flow proxies. Reproducible JSON/CSV.",
    tags: ["Methods", "Score", "Reproducibility"],
    hero: "/blog/methods-2025-08-28.svg",
    readingMinutes: 7,
  },
  {
    slug: "coverage-update-2025-08-21",
    title: "Coverage update: +12 ports onboarded on-request",
    date: "2025-08-21",
    excerpt:
      "Added key hubs across NA/EU/APAC. Typical onboarding 2–4 weeks under the same schema & SLO.",
    tags: ["Coverage", "Expansion"],
    hero: "/blog/coverage-2025-08-21.svg",
    readingMinutes: 4,
  },
].sort((a, b) => b.date.localeCompare(a.date));
