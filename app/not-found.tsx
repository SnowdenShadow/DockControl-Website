import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { MONO, HEAD, ACCENT } from "./lib/style";
import { GitHubIcon } from "./lib/icons";
import { REPO_URL } from "./lib/data";
import { defaultLocale, localeMeta } from "./i18n/config";
import en from "./i18n/dictionaries/en";

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

export const metadata: Metadata = {
  title: "404",
};

/**
 * 404 globale (routes hors langue).
 *
 * Rendue avec le layout racine, qui ne fournit pas <html>/<body> (ceux-ci
 * vivent dans [locale]/layout) : cette page est donc auto-suffisante et sert
 * le texte par défaut (anglais). Une 404 dans une langue donnée passe par le
 * layout localisé.
 */
export default function NotFound() {
  const dict = en.notFound;
  return (
    <html
      lang={localeMeta[defaultLocale].htmlLang}
      className={`${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <div
          style={{
            position: "relative",
            minHeight: "100dvh",
            background: "#08090a",
            color: "#e9eae7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "32px 24px",
            overflow: "hidden",
          }}
        >
          {/* glow radial vert */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(680px 400px at 50% 30%, rgba(0,224,138,.13), transparent 62%)",
              pointerEvents: "none",
            }}
          />
          {/* logo */}
          <Link
            href={`/${defaultLocale}`}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 11,
              marginBottom: 34,
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: ACCENT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 18px rgba(0,224,138,.4)",
              }}
            >
              <span
                style={{
                  width: 13,
                  height: 13,
                  border: "2px solid #06231a",
                  borderRadius: 4,
                }}
              />
            </span>
            <span
              style={{
                fontFamily: HEAD,
                fontWeight: 600,
                fontSize: 18,
                letterSpacing: "-.01em",
              }}
            >
              DockControl
            </span>
          </Link>

          {/* code 404 */}
          <div
            style={{
              position: "relative",
              fontFamily: MONO,
              fontWeight: 600,
              fontSize: 108,
              lineHeight: 1,
              letterSpacing: "-.04em",
              color: "#fbfcfa",
              textShadow: "0 0 60px rgba(0,224,138,.25)",
            }}
          >
            4<span style={{ color: ACCENT }}>0</span>4
          </div>

          <h1
            style={{
              position: "relative",
              fontFamily: HEAD,
              fontWeight: 600,
              fontSize: 26,
              letterSpacing: "-.02em",
              margin: "22px 0 12px",
              color: "#fbfcfa",
            }}
          >
            {dict.title}
          </h1>
          <p
            style={{
              position: "relative",
              fontSize: 16,
              lineHeight: 1.6,
              color: "#a9aba4",
              margin: "0 0 26px",
              maxWidth: 440,
            }}
          >
            {dict.body}
          </p>

          {/* faux terminal */}
          <div
            style={{
              position: "relative",
              fontFamily: MONO,
              fontSize: 13,
              color: "#dfe0db",
              background: "#0c0d0f",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: 10,
              padding: "12px 16px",
              marginBottom: 30,
              maxWidth: "100%",
              overflowX: "auto",
              whiteSpace: "nowrap",
              boxShadow: "0 18px 48px -24px rgba(0,0,0,.8)",
            }}
          >
            <span style={{ color: ACCENT, userSelect: "none" }}>$ </span>
            dockcontrol open <span style={{ color: "#74776f" }}>--path</span> ./404{" "}
            <span style={{ color: "#ff6b6b" }}>{dict.terminal}</span>
          </div>

          {/* actions */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Link
              href={`/${defaultLocale}`}
              className="hl-bright"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: ACCENT,
                color: "#04130d",
                fontWeight: 600,
                fontSize: 15,
                padding: "13px 22px",
                borderRadius: 10,
                boxShadow:
                  "0 0 0 1px rgba(0,224,138,.3), 0 14px 30px -12px rgba(0,224,138,.55)",
              }}
            >
              {dict.home}
              <span style={{ fontFamily: MONO }}>→</span>
            </Link>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hl-border"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                color: "#e9eae7",
                fontWeight: 500,
                fontSize: 15,
                padding: "13px 22px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,.16)",
              }}
            >
              <GitHubIcon size={16} />
              {dict.code}
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
