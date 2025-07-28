import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required for GitHub Pages static export
    domains: ["avatars.githubusercontent.com"],
    // Or for more advanced control (Next.js 13+):
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'avatars.githubusercontent.com',
    //     pathname: '/**',
    //   },
    // ],
  },
  assetPrefix: isProd ? "/user-search/" : "",
  basePath: isProd ? "/user-search/" : "",
  output: "export",
};

export default nextConfig;
