import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "./lib/site";
import JsonLd from "./components/JsonLd";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  // The original imports 400;450;500;600;700, but next/font only exposes
  // standard static weights for IBM Plex Sans (no 450). No element in the
  // design uses 450, so omitting it is visually identical.
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: SITE.titleTemplate,
  },
  description: SITE.metaDescription,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.author, url: SITE.repo }],
  creator: SITE.author,
  publisher: SITE.author,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.shortDescription,
    // opengraph-image.tsx est repris automatiquement par Next.js.
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.shortDescription,
    // twitter-image.tsx est repris automatiquement par Next.js.
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
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={SITE.lang}
      className={`${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
