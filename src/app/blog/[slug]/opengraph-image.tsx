// src/app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { getPost } from "@/blog/posts";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 简洁排版：标题 + 日期 + 品牌
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const p = getPost(slug);

    const title = p?.title ?? "PortPulse Blog";
    const date = p ? new Date(p.date).toLocaleDateString("en-CA", { dateStyle: "medium" }) : "";

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%", height: "100%", display: "flex", flexDirection: "column",
                    justifyContent: "space-between", padding: 64, color: "#fff",
                    background: "linear-gradient(135deg, #0B2740 0%, #123B66 60%, #0B2740 100%)",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: "rgba(255,255,255,0.1)", display: "grid", placeItems: "center",
                        border: "1px solid rgba(255,255,255,0.2)",
                    }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", border: "3px solid #7EC3FF" }} />
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>PortPulse • Blog</div>
                </div>

                <div style={{ marginTop: 16, fontSize: 54, lineHeight: 1.2, fontWeight: 800 }}>
                    {title}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 22, opacity: 0.9 }}>
                        Congestion • Dwell • Momentum APIs
                    </div>
                    <div style={{ fontSize: 22, opacity: 0.75 }}>{date}</div>
                </div>
            </div>
        ),
        { ...size }
    );
}