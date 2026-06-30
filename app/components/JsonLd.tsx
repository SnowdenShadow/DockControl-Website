import { SITE, absoluteUrl } from "../lib/site";
import { localeMeta, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

/**
 * Données structurées Schema.org (JSON-LD), localisées.
 *
 * Un seul graphe lié par @id : SoftwareApplication (le produit, gratuit et
 * open-source) + Organization (l'éditeur) + WebSite. Les textes (description,
 * featureList) et inLanguage suivent la langue de la page.
 */
export default async function JsonLd({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const lang = localeMeta[locale].htmlLang;
  const pageUrl = absoluteUrl(`/${locale}`);

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
        logo: absoluteUrl(`/${locale}/icon`),
        sameAs: [SITE.repo],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: pageUrl,
        name: SITE.name,
        description: dict.meta.ogDescription,
        inLanguage: lang,
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": appId,
        name: SITE.name,
        url: pageUrl,
        description: dict.meta.description,
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "Platform as a Service",
        operatingSystem: "Linux (Ubuntu 22.04+, Debian 12+)",
        inLanguage: lang,
        license: "https://opensource.org/licenses/MIT",
        // Logiciel libre : la gratuité est signalée par isAccessibleForFree.
        isAccessibleForFree: true,
        publisher: { "@id": orgId },
        author: { "@id": orgId },
        // Liste des fonctionnalités, dans la langue de la page.
        featureList: dict.features.items.map((f) => f.title),
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
