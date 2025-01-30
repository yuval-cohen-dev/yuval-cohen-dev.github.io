// @ts-nocheck
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://yuval-cohen.com",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [], // exclude: ['/protected-page', '/awesome/secret-page'],
  alternateRefs: [
    {
      href: "https://he.yuval-cohen.com",
      hreflang: "he",
    },
  ],
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [await config.transform(config, "/")],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: ["/"],
      },
      {
        userAgent: "test-bot",
        allow: ["/"],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/"],
      },
    ],
    additionalSitemaps: [
      // 'https://example.com/my-custom-sitemap-1.xml',
    ],
  },
};
