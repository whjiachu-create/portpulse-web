// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "upload.wikimedia.org" },
        ],
        // 本地网络不稳时，可在 .env.local 里设置 NEXT_IMAGE_UNOPTIMIZED=1
        unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "1",
    },
};

export default nextConfig;