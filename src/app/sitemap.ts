import type { MetadataRoute } from "next";
// NEW: 引入已存在的 posts 源，生成博客条目
import { getAllPosts } from "@/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://useportpulse.com";
    const now = new Date().toISOString();

    // 原有（保留）
    const core: MetadataRoute.Sitemap = [
        { url: `${base}/`, changeFrequency: "weekly", priority: 1.0, lastModified: now },
        { url: `${base}/pricing`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
        { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    ];

    // NEW: 主导航/关键页
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${base}/product`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
        { url: `${base}/use-cases`, changeFrequency: "weekly", priority: 0.8, lastModified: now },
        { url: `${base}/coverage`, changeFrequency: "weekly", priority: 0.7, lastModified: now },
        { url: `${base}/data-and-methods`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
        { url: `${base}/docs`, changeFrequency: "weekly", priority: 0.6, lastModified: now },
        { url: `${base}/blog`, changeFrequency: "daily", priority: 0.7, lastModified: now },
        { url: `${base}/play`, changeFrequency: "weekly", priority: 0.6, lastModified: now },
    ];

    // NEW: Use Cases 细页（已存在的四个）
    const useCases: MetadataRoute.Sitemap = [
        { url: `${base}/use-cases/tech`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
        { url: `${base}/use-cases/shippers`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
        { url: `${base}/use-cases/lsp`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
        { url: `${base}/use-cases/macro`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    ];

    // NEW: Blog 动态条目（从 posts 源生成）
    const posts = getAllPosts().map<MetadataRoute.Sitemap[number]>((p) => ({
        url: `${base}/blog/${p.slug}`,
        changeFrequency: "weekly",
        priority: 0.7,
        lastModified: p.date,
    }));

    return [...core, ...staticRoutes, ...useCases, ...posts];
}