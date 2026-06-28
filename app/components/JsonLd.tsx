import { SITE, absoluteUrl } from "../lib/site";

/**
 * Données structurées Schema.org (JSON-LD).
 *
 * Un seul graphe lié par @id : SoftwareApplication (le produit, gratuit et
 * open-source) + Organization (l'éditeur) + WebSite. Le contenu reflète
 * fidèlement la page — fonctionnalités, licence MIT, prix nul — pour éviter
 * tout signal trompeur aux moteurs.
 */
export default function JsonLd() {
  const orgId = absoluteUrl("/#organization");
  const siteId = absoluteUrl("/#website");
  const appId = absoluteUrl("/#software");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.name,
        url: SITE.url,
        logo: absoluteUrl("/icon"),
        sameAs: [SITE.repo],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE.url,
        name: SITE.name,
        description: SITE.shortDescription,
        inLanguage: SITE.lang,
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": appId,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "Platform as a Service",
        operatingSystem: "Linux (Ubuntu 22.04+, Debian 12+)",
        inLanguage: SITE.lang,
        license: "https://opensource.org/licenses/MIT",
        // Logiciel libre : la gratuité est signalée par isAccessibleForFree.
        // Pas d'Offer avec une devise fabriquée (aucun prix n'est affiché sur
        // la page, et l'Offer SoftwareApplication n'ouvre pas de rich result).
        isAccessibleForFree: true,
        publisher: { "@id": orgId },
        author: { "@id": orgId },
        featureList: [
          "Marketplace d'apps en un clic (WordPress, Ghost, n8n, MinIO, PostgreSQL, Redis)",
          "Déploiements Git par webhook (GitHub / GitLab / Bitbucket)",
          "SSL automatique via Caddy et Let's Encrypt",
          "Monitoring CPU / RAM / disque / réseau avec alertes",
          "Gestion multi-serveurs via agent Go",
          "Authentification 2FA (TOTP + codes de récupération)",
          "Backups chiffrés AES-256-GCM vers S3 / R2 / B2",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Données statiques contrôlées — pas d'entrée utilisateur.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
