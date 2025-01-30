import { MetadataRoute } from "next";
import { SITEMAP_FILE } from "@/lib/constants";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_FILE;
}
