import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "useportpulse.com" },
      { protocol: "https", hostname: "www.useportpulse.com" },
    ],
  },
  experimental: {
    // 预先允许本机与局域网调试来源，避免将来版本报错
    allowedDevOrigins: ["http://localhost:3001","http://127.0.0.1:3001","http://192.168.0.100:3001"],
  ,
    allowedDevOrigins: ["http://192.168.3.18:3000"] },
};

  ,experimental:{allowedDevOrigins:["http://192.168.3.18:3000","http://localhost:3000"]}
};
export default nextConfig;


export default {
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "geolocation=()" },
        { key: "Content-Security-Policy-Report-Only", value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; connect-src 'self' https://api.useportpulse.com; frame-ancestors 'self';" }
      ]
    }];
  },
};
