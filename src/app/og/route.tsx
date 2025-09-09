// src/app/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PortPulse — APIs for Port Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 64,
                    color: "#ffffff",
                    background:
                        "linear-gradient(135deg, #0B2740 0%, #123B66 50%, #0B2740 100%)",
                }}
            >
                {/* Brand row */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    {/* Simple brand glyph */}
                    <div
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: 12,
                            background: "rgba(255,255,255,0.1)",
                            display: "grid",
                            placeItems: "center",
                            border: "1px solid rgba(255,255,255,0.2)",
                        }}
                    >
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                border: "3px solid #7EC3FF",
                                boxShadow: "0 0 24px rgba(126,195,255,0.45) inset",
                            }}
                        />
                    </div>
                    <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: 0.2 }}>
                        PortPulse
                    </div>
                </div>

                {/* Headline */}
                <div style={{ marginTop: 24, fontSize: 44, fontWeight: 700 }}>
                    APIs for Port Operations
                </div>

                {/* Subhead */}
                <div style={{ marginTop: 10, fontSize: 28, opacity: 0.9 }}>
                    Congestion • Dwell • Momentum (JSON/CSV)
                </div>

                {/* SLO row */}
                <div style={{ marginTop: 20, fontSize: 22, opacity: 0.9 }}>
                    Freshness p95 ≤ 2h · API p95 &lt; 300ms · 30-day replay
                </div>

                {/* Bottom rule */}
                <div
                    style={{
                        position: "absolute",
                        left: 64,
                        right: 64,
                        bottom: 64,
                        height: 2,
                        background:
                            "linear-gradient(90deg, rgba(126,195,255,0) 0%, rgba(126,195,255,.8) 40%, rgba(126,195,255,0) 100%)",
                    }}
                />
            </div>
        ),
        { ...size }
    );
}