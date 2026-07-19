import type { NextConfig } from "next";
// Cloudflare (OpenNext) — enables platform bindings during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/salil", destination: "/who-is-behind-the-lens", permanent: true },
      { source: "/signature-shoots-1", destination: "/signature-shoots", permanent: true },
      { source: "/explore-jungles-of-india-1", destination: "/explore-jungles-of-india", permanent: true },
      { source: "/explore-latitudes-1", destination: "/explore-latitudes", permanent: true },
      { source: "/up-coming-safaris", destination: "/upcoming-safaris", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
