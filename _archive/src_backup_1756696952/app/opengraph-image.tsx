import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg,#0b2533,#142332)",
          color: "white",
          padding: "80px",
          fontSize: 56,
        }}
      >
        <div style={{ fontSize: 28, opacity: .8 }}>PortPulse</div>
        <div style={{ fontWeight: 800, lineHeight: 1.15 }}>
          APIs for port visibility & predictive insights
        </div>
        <div style={{ marginTop: 12, fontSize: 28, opacity: .85 }}>
          Congestion · Dwell · Berth wait · ETA/ETB forecasts
        </div>
      </div>
    ),
    size
  );
}
