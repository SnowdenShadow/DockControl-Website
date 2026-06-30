import "server-only";
import type { Locale } from "./config";
import { defaultLocale } from "./config";
import type { Dictionary } from "./types";

/**
 * Chargeur de dictionnaires.
 *
 * Import dynamique par langue : chaque page ne charge que son dictionnaire.
 * Repli sur l'anglais si une langue n'est pas (encore) disponible.
 */
const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./dictionaries/en"),
  fr: () => import("./dictionaries/fr"),
  ru: () => import("./dictionaries/ru"),
  de: () => import("./dictionaries/de"),
  es: () => import("./dictionaries/es"),
  it: () => import("./dictionaries/it"),
  pt: () => import("./dictionaries/pt"),
  nl: () => import("./dictionaries/nl"),
  pl: () => import("./dictionaries/pl"),
  tr: () => import("./dictionaries/tr"),
  zh: () => import("./dictionaries/zh"),
  ja: () => import("./dictionaries/ja"),
  ar: () => import("./dictionaries/ar"),
  ko: () => import("./dictionaries/ko"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = loaders[locale] ?? loaders[defaultLocale];
  const mod = await load();
  return mod.default;
}
