import { WEB_URL } from "@/lib/constants";
import { MetadataRoute } from "next";
import { SITE_MAPS } from "./sitemap";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      // disallow: [ ]
      // crawlDelay

    },
    host: WEB_URL,
    sitemap: [...SITE_MAPS.map((sitemap) => sitemap.url)]
  };
}
