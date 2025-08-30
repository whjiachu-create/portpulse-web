/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  // ⚠️ 不要再放 experimental.allowedDevOrigins，那是无效项
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
    // 本地开发禁用优化，浏览器直连远程图；生产保持默认优化
    unoptimized: isDev || process.env.NEXT_IMAGE_UNOPTIMIZED === "1",
  },
};

export default nextConfig;
