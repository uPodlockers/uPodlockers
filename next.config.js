/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "dist",

  assetPrefix: isProd ? "/uPodlockers/" : "", // Use your repo name here
  basePath: isProd ? "/uPodlockers" : "", // Use your repo name here
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
