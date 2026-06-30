import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";
import { locales, defaultLocale, localeMeta } from "./i18n/config";

/**
 * Sitemap multilingue.
 *
 * Une entrée par langue, chacune déclarant ses alternates hreflang (toutes les
 * langues + x-default → anglais) pour signaler les versions équivalentes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeMeta[l].htmlLang] = absoluteUrl(`/${l}`);
  }
  languages["x-default"] = absoluteUrl(`/${defaultLocale}`);

  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified,
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
