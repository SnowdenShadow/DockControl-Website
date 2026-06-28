import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Landing page unique. Les ancres (#features, #compare, #install) ne sont pas
  // des URLs distinctes et n'ont pas leur place dans le sitemap.
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
