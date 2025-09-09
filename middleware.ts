import { NextResponse, NextRequest } from "next/server";

const STRIP_KEYS = new Set([
    "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
    "gclid", "fbclid", "msclkid", "yclid", "ttclid"
]);

export function middleware(req: NextRequest) {
    const url = new URL(req.url);
    let changed = false;

    for (const key of Array.from(url.searchParams.keys())) {
        if (STRIP_KEYS.has(key.toLowerCase())) {
            url.searchParams.delete(key);
            changed = true;
        }
    }

    if (changed) {
        // 301 永久重定向到“无跟踪参数”的同一路径
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// 对所有页面生效（也可限定到特定路径）
export const config = {
    matcher: [
        "/((?!_next|api|static|sandbox|assets).*)",
    ],
};