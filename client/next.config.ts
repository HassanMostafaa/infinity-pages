import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ar"], // supported locales
    defaultLocale: "en", // default locale
    // localeDetection: true, // auto-detect user locale //// MUST BE FALSE FOR SOME REASON
  },
  // ...other Next.js config options
};

export default nextConfig;
