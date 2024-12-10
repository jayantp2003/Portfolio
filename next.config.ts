import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.licdn.com','drive.google.com','i.imgur.com'], // replace with the actual domain of the external image
  },
};

export default nextConfig;
