/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Allow .htaccess-style redirects via Next.js
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
