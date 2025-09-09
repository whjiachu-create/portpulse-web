// next.config.ts
import type { NextConfig } from "next";

const allowedDevOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3001",
  "http://192.168.0.100:3001",
  "http://192.168.3.18:3000",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "useportpulse.com" },
      { protocol: "https", hostname: "www.useportpulse.com" },
    ],
  },
  experimental: {
    // 允许本机/局域网调试来源
    allowedDevOrigins,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=()" },
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              // dev 环境包含了 inline/eval（Turbopack/React Refresh 需要）
              "default-src 'self'; " +
              "img-src 'self' data: https:; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; " +
              "style-src 'self' 'unsafe-inline' https:; " +
              "connect-src 'self' https://api.useportpulse.com https://www.useportpulse.com " +
              "http://localhost:3000 http://127.0.0.1:3001 http://192.168.0.100:3001 http://192.168.3.18:3000; " +
              "frame-ancestors 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;