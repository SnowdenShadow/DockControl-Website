import type { Metadata } from "next";
import { absoluteUrl } from "../lib/site";
import { locales, defaultLocale, localeMeta, type Locale } from "./config";

/**
 * Construit le bloc `alternates` (canonical + hreflang).
 *
 * - canonical : l'URL de la langue courante (/<locale>)
 * - languages : une entrée hreflang par langue + x-default (→ anglais)
 */
export function buildAlternates(locale: Locale): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeMeta[l].htmlLang] = `/${l}`;
  }
  languages["x-default"] = `/${defaultLocale}`;

  return {
    canonical: `/${locale}`,
    languages,
  };
}

/**
 * URL de l'image OpenGraph localisée.
 * opengraph-image.tsx vit sous app/[locale]/, donc l'image est par-langue.
 */
export function ogImageFor(locale: Locale): string {
  return absoluteUrl(`/${locale}/opengraph-image`);
}
