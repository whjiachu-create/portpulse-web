// src/lib/seo.ts
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://useportpulse.com";

export function buildCanonical(pathname: string) {
    // 确保以 / 开头
    const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
    const u = new URL(SITE_URL);
    u.pathname = p;
    u.search = ""; // 关键：不带任何 query
    u.hash = "";
    return u.toString();
}

const TRACKING_KEYS = new Set([
    "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
    "gclid", "fbclid", "msclkid", "yclid", "ttclid"
]);

/** 只要命中以上参数之一，就视作“带跟踪参数的 URL”，建议 noindex */
export function hasTrackingParams(sp: Record<string, string | string[] | undefined>) {
    return Object.keys(sp || {}).some((k) => TRACKING_KEYS.has(k.toLowerCase()));
}