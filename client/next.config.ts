import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ar"], // supported locales
    defaultLocale: "en", // default locale
    // localeDetection: true, // auto-detect user locale //// MUST BE FALSE FOR SOME REASON
  },
  // ...other Next.js config options
  // SETUP IMAGE DOMAIN
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "example.com", // replace with your actual domain
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
