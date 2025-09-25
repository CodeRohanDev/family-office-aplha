import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // SEO and Performance Optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Image optimization - disabled for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
