import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://useportpulse.com";
    return [
        { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
        { url: `${base}/pricing`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6 },
    ];
}