import { MetadataRoute } from "next";
import { WEB_URL, WEB_URL_LANGUAGES } from "@/lib/constants";
export const dynamic = "force-static";

const today = new Date()

export const CHANGE_FREQUENCY:
  | "daily"
  | "never"
  | "always"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | undefined = "monthly";

export const SITE_MAPS = [
  {
    url: `${WEB_URL}`,
    lastModified: today,
    changeFrequency: CHANGE_FREQUENCY,
    priority: 1,
    alternates: WEB_URL_LANGUAGES,
    images: [
      `${WEB_URL}/favicon.ico`,
    ],
    videos: []
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_MAPS
}
