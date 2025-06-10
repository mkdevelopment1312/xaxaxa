/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    // This fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
