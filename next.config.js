/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Pozostaw puste domains, aby korzystać z lokalnych plików z public/
    domains: [],
    unoptimized: true, // Pozwala na ładowanie lokalnych plików bez optymalizacji
  },
  webpack: (config) => {
    // This fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
