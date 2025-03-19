/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-github-pages',
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponents: true,
  },
};

module.exports = nextConfig;
