// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Tell Next where the app lives in production (GitHub Pages subfolder)
  basePath: isProd ? "/personal-site" : undefined,
  assetPrefix: isProd ? "/personal-site/" : undefined,
};

export default nextConfig;
