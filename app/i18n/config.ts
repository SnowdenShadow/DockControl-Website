/**
 * Configuration i18n centralisée.
 *
 * Les 14 langues sont servies en sous-chemin (/en/, /fr/, /ru/…). L'anglais
 * est la langue par défaut (x-default) et le repli quand la langue du visiteur
 * n'est pas disponible.
 */

export const locales = [
  "en",
  "fr",
  "ru",
  "de",
  "es",
  "it",
  "pt",
  "nl",
  "pl",
  "tr",
  "zh",
  "ja",
  "ar",
  "ko",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Langues à écriture droite-à-gauche (pour l'attribut dir et le layout). */
export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Métadonnées d'affichage par langue :
 *  - label : nom natif (pour le sélecteur de langue)
 *  - htmlLang : valeur de l'attribut <html lang> / hreflang (BCP-47)
 *  - ogLocale : code OpenGraph (xx_XX)
 */
export const localeMeta: Record<
  Locale,
  { label: string; htmlLang: string; ogLocale: string }
> = {
  en: { label: "English", htmlLang: "en", ogLocale: "en_US" },
  fr: { label: "Français", htmlLang: "fr", ogLocale: "fr_FR" },
  ru: { label: "Русский", htmlLang: "ru", ogLocale: "ru_RU" },
  de: { label: "Deutsch", htmlLang: "de", ogLocale: "de_DE" },
  es: { label: "Español", htmlLang: "es", ogLocale: "es_ES" },
  it: { label: "Italiano", htmlLang: "it", ogLocale: "it_IT" },
  pt: { label: "Português", htmlLang: "pt", ogLocale: "pt_PT" },
  nl: { label: "Nederlands", htmlLang: "nl", ogLocale: "nl_NL" },
  pl: { label: "Polski", htmlLang: "pl", ogLocale: "pl_PL" },
  tr: { label: "Türkçe", htmlLang: "tr", ogLocale: "tr_TR" },
  zh: { label: "中文", htmlLang: "zh", ogLocale: "zh_CN" },
  ja: { label: "日本語", htmlLang: "ja", ogLocale: "ja_JP" },
  ar: { label: "العربية", htmlLang: "ar", ogLocale: "ar_SA" },
  ko: { label: "한국어", htmlLang: "ko", ogLocale: "ko_KR" },
};
