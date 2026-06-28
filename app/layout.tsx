import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
  title: "DockControl — Votre VPS devient une plateforme de déploiement",
  description:
    "DockControl est l'alternative open-source à Heroku, Vercel et Render. Installez-le sur votre propre matériel et pilotez vos apps, bases de données, SSL, monitoring et backups depuis un seul dashboard.",
  keywords: [
    "PaaS",
    "open source",
    "self-hosted",
    "Heroku alternative",
    "Vercel alternative",
    "Docker",
    "VPS",
    "DockControl",
  ],
  authors: [{ name: "DockControl" }],
  openGraph: {
    title: "DockControl — PaaS open-source auto-hébergé",
    description:
      "L'alternative open-source à Heroku, Vercel et Render. Vos serveurs, vos données, zéro lock-in.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
