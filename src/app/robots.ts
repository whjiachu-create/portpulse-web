import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // NEW: 屏蔽内部与构建产物路径，减少噪声索引
                disallow: ["/api/", "/_next/", "/private/", "/assets/", "/sandbox/"],
            },
        ],
        sitemap: "https://useportpulse.com/sitemap.xml",
    };
}