import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 访问官网的 /docs 时，跳到 API 文档（推荐做法）
      { source: '/docs', destination: 'https://api.useportpulse.com/docs', permanent: false },

      // 如果你“临时”想把首页也重定向到文档，把下面一行取消注释即可
      // { source: '/', destination: 'https://api.useportpulse.com/docs', permanent: false },
    ];
  },
};

export default nextConfig;
