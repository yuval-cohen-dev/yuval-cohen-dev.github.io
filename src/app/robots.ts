import { ROBOTS } from "@constants";
import { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return ROBOTS;
}
