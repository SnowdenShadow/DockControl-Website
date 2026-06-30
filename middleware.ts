import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "./app/i18n/config";

const COOKIE = "NEXT_LOCALE";

/**
 * Détection de langue + redirection.
 *
 * - Si l'URL contient déjà une locale (/fr/…), on laisse passer (et on
 *   rafraîchit le cookie de préférence).
 * - Sinon on choisit la langue dans l'ordre : cookie → Accept-Language →
 *   défaut (en), puis on redirige vers /<locale><path>.
 */
function parseAcceptLanguage(header: string | null): string | undefined {
  if (!header) return undefined;
  // "fr-FR,fr;q=0.9,en;q=0.8" → ["fr", "en"] par q décroissant
  const ranked = header
    .split(",")
    .map((part) => {
      // Tolère les espaces autour du « ;q= » (certains proxies en émettent).
      const [tag, ...rest] = part.trim().split(";");
      const qPart = rest.find((s) => s.trim().startsWith("q="));
      const q = qPart ? parseFloat(qPart.split("=")[1]) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return undefined;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // L'URL contient-elle déjà une locale en tête ?
  const segments = pathname.split("/");
  const first = segments[1];

  if (isLocale(first)) {
    // Rafraîchit le cookie de préférence pour les prochaines visites.
    const res = NextResponse.next();
    if (request.cookies.get(COOKIE)?.value !== first) {
      res.cookies.set(COOKIE, first, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return res;
  }

  // Pas de locale → on en choisit une et on redirige.
  const cookieLocale = request.cookies.get(COOKIE)?.value;
  const chosen =
    (cookieLocale && isLocale(cookieLocale) ? cookieLocale : undefined) ??
    parseAcceptLanguage(request.headers.get("accept-language")) ??
    defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${chosen}${pathname === "/" ? "" : pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE, chosen, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  // On exclut les fichiers de métadonnées, assets et routes internes Next :
  // tout le reste passe par la détection de langue.
  // Exclusions ancrées sur un segment complet (/ ou fin), pour qu'une future
  // route comme /iconography ou /api-status reçoive bien la détection de langue.
  // Les fichiers à extension (robots.txt, sitemap.xml…) sont couverts par .*\..*
  // ; icon/apple-icon sont servis sans extension donc gardés explicitement.
  matcher: [
    "/((?!_next/|api/|.*\\..*|icon$|icon/|apple-icon$|apple-icon/|opengraph-image$|opengraph-image/|twitter-image$|twitter-image/).*)",
  ],
};
