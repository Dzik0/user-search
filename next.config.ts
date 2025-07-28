import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
};

export default nextConfig;
