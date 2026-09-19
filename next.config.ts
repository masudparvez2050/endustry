import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themes.pixelwars.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/", destination: "/index.html" },
      { source: "/about", destination: "/about.html" },
      { source: "/services", destination: "/services.html" },
      { source: "/projects", destination: "/projects.html" },
      { source: "/news", destination: "/news.html" },
      { source: "/contact", destination: "/contact.html" },

      // Portfolio Project rewrites
      { source: "/portfolio/the-petronas-twin-towers/:path*", destination: "/portfolio/the-petronas-twin-towers.html" },
      { source: "/portfolio/smartfactoryx/:path*", destination: "/portfolio/smartfactoryx.html" },
      { source: "/portfolio/sports-stadiums/:path*", destination: "/portfolio/sports-stadiums.html" },
      { source: "/portfolio/innovproto/:path*", destination: "/portfolio/innovproto.html" },
      { source: "/portfolio/theme-parks/:path*", destination: "/portfolio/theme-parks.html" },
      { source: "/portfolio/energyx/:path*", destination: "/portfolio/energyx.html" },
      { source: "/portfolio/museums/:path*", destination: "/portfolio/museums.html" },
      { source: "/portfolio/maintech/:path*", destination: "/portfolio/maintech.html" },
      { source: "/portfolio/skyscrapers/:path*", destination: "/portfolio/skyscrapers.html" },
      { source: "/portfolio/ai-indauto/:path*", destination: "/portfolio/ai-indauto.html" },
      { source: "/portfolio/landmarks/:path*", destination: "/portfolio/landmarks.html" },
      { source: "/portfolio/enermanage/:path*", destination: "/portfolio/enermanage.html" },

      // News Post rewrites (both root level and /news/ level)
      { source: "/acme-robotics-next-gen-automation/:path*", destination: "/news/acme-robotics-next-gen-automation.html" },
      { source: "/industry-4-0-at-alphamanufacturing/:path*", destination: "/news/industry-4-0-at-alphamanufacturing.html" },
      { source: "/precisiontech-expands-globally/:path*", destination: "/news/precisiontech-expands-globally.html" },
      { source: "/innovtech-sets-new-standards/:path*", destination: "/news/innovtech-sets-new-standards.html" },
      { source: "/smarttechs-iot-platform/:path*", destination: "/news/smarttechs-iot-platform.html" },
      { source: "/xpotech-conference-highlights/:path*", destination: "/news/xpotech-conference-highlights.html" },

      { source: "/news/acme-robotics-next-gen-automation/:path*", destination: "/news/acme-robotics-next-gen-automation.html" },
      { source: "/news/industry-4-0-at-alphamanufacturing/:path*", destination: "/news/industry-4-0-at-alphamanufacturing.html" },
      { source: "/news/precisiontech-expands-globally/:path*", destination: "/news/precisiontech-expands-globally.html" },
      { source: "/news/innovtech-sets-new-standards/:path*", destination: "/news/innovtech-sets-new-standards.html" },
      { source: "/news/smarttechs-iot-platform/:path*", destination: "/news/smarttechs-iot-platform.html" },
      { source: "/news/xpotech-conference-highlights/:path*", destination: "/news/xpotech-conference-highlights.html" },

      // Generic fallback rewrites for portfolio & news
      { source: "/portfolio/:slug", destination: "/portfolio/:slug.html" },
      { source: "/portfolio/:slug/", destination: "/portfolio/:slug.html" },
      { source: "/news/:slug", destination: "/news/:slug.html" },
      { source: "/news/:slug/", destination: "/news/:slug.html" },
    ];
  },
};

export default nextConfig;