import { MANIFEST } from "@constants";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return MANIFEST;
}
