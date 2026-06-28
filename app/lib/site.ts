/**
 * Configuration SEO centralisée.
 *
 * L'URL de production pilote les balises canoniques, OpenGraph/Twitter (qui
 * exigent des URLs absolues), le sitemap et le robots.txt. Elle est lue depuis
 * NEXT_PUBLIC_SITE_URL au build (injectée via un build-arg Docker), avec un
 * repli sain en local.
 */
const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

// Valide tôt avec un message qui nomme la variable, pour qu'un scheme manquant
// fasse échouer le build Docker avec une cause claire, au lieu d'un
// `TypeError: Invalid URL` opaque levé plus tard par `new URL(SITE.url)`.
let parsedUrl: URL;
try {
  parsedUrl = new URL(rawUrl);
} catch {
  throw new Error(
    `NEXT_PUBLIC_SITE_URL n'est pas une URL absolue valide : "${rawUrl}". ` +
      `Elle doit inclure le scheme, ex. https://votre-domaine.io (sans slash final).`,
  );
}

// Normalise : pas de slash final, sinon les URLs absolues doublent les "/".
export const SITE_URL = `${parsedUrl.origin}${parsedUrl.pathname}`.replace(
  /\/+$/,
  "",
);

export const SITE = {
  url: SITE_URL,
  name: "DockControl",
  // Titre par défaut + gabarit pour les pages enfants éventuelles.
  title: "DockControl — Votre VPS devient une plateforme de déploiement",
  titleTemplate: "%s · DockControl",
  shortDescription:
    "L'alternative open-source à Heroku, Vercel et Render. Vos serveurs, vos données, zéro lock-in.",
  // Meta description HTML (~155 car.) : sous le seuil de troncature SERP de
  // Google (~160), valeur distincte de la longue `description` ci-dessous.
  metaDescription:
    "L'alternative open-source à Heroku, Vercel et Render : installez-la sur votre VPS, pointez un domaine, et pilotez apps, bases, SSL et backups — sans SSH.",
  // Description longue : réservée au JSON-LD (SoftwareApplication.description),
  // où la longueur n'est pas pénalisée.
  description:
    "DockControl est l'alternative open-source à Heroku, Vercel et Render. Installez-le sur votre propre VPS, pointez un domaine, et pilotez vos apps, bases de données, SSL, monitoring et backups chiffrés depuis un seul dashboard — sans jamais ressortir le SSH.",
  locale: "fr_FR",
  lang: "fr",
  themeColor: "#08090a",
  accent: "#00e08a",
  repo: "https://github.com/SnowdenShadow/Kryptalis",
  author: "DockControl",
  keywords: [
    "PaaS open source",
    "PaaS auto-hébergé",
    "alternative Heroku",
    "alternative Vercel",
    "alternative Render",
    "self-hosted PaaS",
    "déploiement Docker",
    "déploiement Git",
    "VPS dashboard",
    "Caddy SSL Let's Encrypt",
    "backups chiffrés",
    "monitoring serveur",
    "Docker Compose",
    "DockControl",
  ],
} as const;

/** Construit une URL absolue à partir d'un chemin relatif. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
