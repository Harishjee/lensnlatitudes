/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.lensnlatitudes.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  additionalPaths: async () => [
    { loc: "/", changefreq: "weekly", priority: 1.0 },
    { loc: "/upcoming-safaris", changefreq: "weekly", priority: 0.9 },
    { loc: "/explore-latitudes", changefreq: "monthly", priority: 0.8 },
    { loc: "/awards", changefreq: "monthly", priority: 0.8 },
    { loc: "/who-is-behind-the-lens", changefreq: "monthly", priority: 0.8 },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
  },
};
