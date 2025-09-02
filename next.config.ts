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
  },
};

export default nextConfig;
