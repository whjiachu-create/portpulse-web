export type Plan = {
  name: "Lite" | "Starter" | "Pro";
  price: number;            // monthly in USD
  period: "/mo";
  tagline?: string;
  popular?: boolean;
  features: string[];
  limits: { ports: string; requests: string };
  support: string;
  sla: string;
  trial: string;
  cta: { label: string; href: string; ext?: boolean };
};

export const pricingPlans: readonly Plan[] = [
  {
    name: "Lite",
    price: 199,
    period: "/mo",
    tagline: "For small teams",
    features: [
      "Core API access",
      "7-day trends & snapshots",
      "ETag/304 caching, JSON/CSV",
      "Email support"
    ],
    limits: { ports: "≤10 ports", requests: "≤0.5M req/mo" },
    support: "Email",
    sla: "—",
    trial: "14-day full (5 ports)",
    cta: { label: "Start trial", href: "/contact" }
  },
  {
    name: "Starter",
    price: 399,
    period: "/mo",
    tagline: "Popular",
    popular: true,
    features: [
      "All Lite features",
      "Alerts & weekly report",
      "Slack notifications",
      "Priority support"
    ],
    limits: { ports: "≤25 ports", requests: "≤2M req/mo" },
    support: "Priority (business days)",
    sla: "—",
    trial: "14-day full (5 ports)",
    cta: { label: "Start trial", href: "/contact" }
  },
  {
    name: "Pro",
    price: 899,
    period: "/mo",
    tagline: "For scaling teams",
    features: [
      "All Starter features",
      "Customer success",
      "Custom fields/thresholds (by request)",
      "99.9% SLA"
    ],
    limits: { ports: "≤100 ports", requests: "≤10M req/mo" },
    support: "Customer success",
    sla: "99.9%",
    trial: "14-day full (5 ports)",
    cta: { label: "Book a demo", href: "/contact" }
  }
] as const;
