// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/personal-site" : undefined,
  assetPrefix: isProd ? "/personal-site/" : undefined,
  images: {
    unoptimized: true, // required for next/image with static export
  },
};

export default nextConfig;