import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjs-github-pages',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
