import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@import "@/styles/_imports";`,
    silenceDeprecations: ["import"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.super.so" },
      { protocol: "https", hostname: "images.spr.so" },
      { protocol: "https", hostname: "cdn.dribbble.com" },
      { protocol: "https", hostname: "miro.medium.com" },
    ],
  },
};

export default nextConfig;
