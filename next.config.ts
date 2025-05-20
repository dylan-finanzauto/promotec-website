import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'export'
};

export default nextConfig;
