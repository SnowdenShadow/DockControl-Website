import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { SITE } from "../lib/site";
import {
  locales,
  defaultLocale,
  isLocale,
  isRtl,
  localeMeta,
  type Locale,
} from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { buildAlternates, ogImageFor } from "../i18n/seo";
import JsonLd from "../components/JsonLd";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE.themeColor,
  colorScheme: "dark",
};

// Pré-génère les 14 langues à la build (toutes statiques).
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);
  const meta = localeMeta[locale];

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.title,
      template: `%s · ${SITE.name}`,
    },
    description: dict.meta.description,
    applicationName: SITE.name,
    keywords: [...SITE.keywords],
    authors: [{ name: SITE.author, url: SITE.repo }],
    creator: SITE.author,
    publisher: SITE.author,
    category: "technology",
    // hreflang complet : une entrée par langue + x-default.
    alternates: buildAlternates(locale),
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeMeta[l].ogLocale),
      url: `/${locale}`,
      siteName: SITE.name,
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      images: [ogImageFor(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      images: [ogImageFor(locale)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      dir={isRtl(locale) ? "rtl" : "ltr"}
      className={`${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <JsonLd locale={locale} />
        {children}
      </body>
    </html>
  );
}
