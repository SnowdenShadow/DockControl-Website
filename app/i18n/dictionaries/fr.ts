import type { Dictionary } from "../types";

const fr: Dictionary = {
  meta: {
    title: "DockControl — Votre VPS devient une plateforme de déploiement",
    description:
      "L'alternative open-source à Heroku, Vercel et Render : installez-la sur votre VPS, pointez un domaine, et pilotez apps, bases, SSL et backups — sans SSH.",
    ogDescription:
      "L'alternative open-source à Heroku, Vercel et Render. Vos serveurs, vos données, zéro lock-in.",
  },

  nav: {
    features: "Fonctionnalités",
    compare: "Comparatif",
    install: "Installation",
  },

  hero: {
    badge: "Open source · Licence MIT · Auto-hébergé",
    titleLine1: "Votre VPS devient une",
    titleLine2: "plateforme de déploiement.",
    lead: "DockControl est l'alternative open-source à Heroku, Vercel et Render. Installez-le sur votre propre matériel, pointez un domaine, et pilotez vos apps, bases de données, SSL, monitoring et backups depuis un seul dashboard — sans jamais ressortir le SSH.",
    installLabel: "INSTALLATION · ROOT",
    installNote:
      "// installeur idempotent — re-lancez-le quand vous voulez, il préserve .env.",
    ctaGuide: "Guide d'installation",
    ctaCode: "Explorer le code",
  },

  mockup: {
    statusAll: "tout opérationnel",
    nav: ["Apps", "Déploiements", "Bases", "Domaines", "Monitoring", "Backups"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "REMPLACE",
    tagline: "→ vos serveurs, vos données, zéro lock-in.",
  },

  features: {
    kicker: "// Fonctionnalités",
    title: "Tout ce qu'un PaaS vous donne — sur votre propre infra.",
    subtitle:
      "Du déploiement Git aux backups chiffrés, en passant par le SSL et le monitoring. Sans abonnement à l'usage, sans facture surprise.",
    items: [
      {
        title: "Marketplace apps",
        body: "Installation en un clic de stacks curatées — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Déploiements Git",
        body: "Connectez un repo GitHub / GitLab / Bitbucket, choisissez une branche, build + deploy déclenché par webhook.",
        tag: "→ HMAC sur le body brut",
      },
      {
        title: "SSL automatique",
        body: "Attachez un domaine, Caddy provisionne un certificat Let's Encrypt à la requête suivante. HTTPS sur port custom inclus.",
        tag: "→ via Caddy",
      },
      {
        title: "Monitoring + alertes",
        body: "CPU / RAM / disque / réseau par serveur, rétention configurable, alertes par seuil.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Multi-serveurs",
        body: "Démarrez en LOCAL sur un VPS, passez en MULTI pour enrôler d'autres serveurs via un agent Go.",
        tag: "→ file long-poll, claim safe",
      },
      {
        title: "Authentification 2FA",
        body: "Enrôlement TOTP par utilisateur, imposé à la prochaine connexion, codes de récupération générés au setup.",
        tag: "→ TOTP + recovery codes",
      },
      {
        title: "Backups chiffrés",
        body: "Dumps Postgres / MySQL / fichiers chiffrés AES-256-GCM, vérifiés SHA-256 à la restauration. Planifiables, poussables vers S3 / R2 / B2.",
        tag: "→ clé BACKUP siloée",
      },
    ],
  },

  openSource: {
    kicker: "100% OPEN SOURCE",
    titleLine1: "Sous licence MIT.",
    titleLine2: "Sans contrepartie.",
    body: "Utilisez-le, forkez-le, faites-le tourner en production commerciale. Le code est entièrement public, auditable, et n'envoie rien d'autre que ce que vous configurez. Pas de télémétrie cachée, pas de plan « Enterprise » verrouillé.",
    badges: [
      "Forkez et redistribuez librement",
      "Code auditable, zéro télémétrie",
      "Aucune licence, payez juste votre VPS",
    ],
  },

  compare: {
    kicker: "// Comparatif",
    title: "DockControl vs le PaaS managé",
    colCriteria: "CRITÈRE",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Hébergement", us: "Vos serveurs", them: "Cloud du vendeur" },
      { k: "Coût", us: "Votre VPS, prix fixe", them: "Facturé à l'usage" },
      { k: "Licence", us: "MIT, open source", them: "Propriétaire" },
      { k: "Lock-in", us: "Aucun", them: "Élevé" },
      { k: "BDD · mail · SSL", us: "Inclus", them: "Add-ons payants" },
      { k: "Données & secrets", us: "Chez vous, chiffrés", them: "Chez le vendeur" },
    ],
  },

  marketplace: {
    kicker: "// Marketplace",
    title: "Des stacks prêtes en un clic.",
    bodyBefore:
      "Chaque app de la marketplace est générée en Docker Compose sous ",
    bodyAfter: " — versionnable, lisible, et 100% sous votre contrôle.",
  },

  install: {
    reqsKicker: "// Prérequis",
    reqsTitle: "Ce qu'il vous faut",
    reqs: [
      "VPS Linux — Ubuntu 22.04+ ou Debian 12+ (autres distros : non testées).",
      "Docker Engine 24+ avec le plugin docker compose.",
      "2 Go de RAM minimum (4 Go recommandé une fois des apps déployées).",
      "Ports 80 et 443 ouverts sur Internet (Caddy + Let's Encrypt HTTP-01).",
      "Ports 3000 (dashboard) et 4000 (API) joignables au premier boot.",
      "Une IPv4 publique (auto-détectée, surchargeable via PUBLIC_API_URL).",
    ],
    quickKicker: "// Quick install",
    quickTitle: "Trois lignes, et c'est en ligne",
    steps: [
      "VPS Ubuntu/Debian frais, connecté en root.",
      "Collez la commande d'installation ci-dessous.",
      "Ouvrez le dashboard sur :3000, pointez un domaine.",
    ],
  },

  contributing: {
    kicker: "// Contribuer",
    title: "Les PRs sont les bienvenues.",
    bodyBefore:
      "Ouvrez une issue avant tout changement plus gros qu'une typo. ",
    bodyAfter:
      " depuis la racine pour une boucle de dev locale — l'API et le dashboard hot-reload indépendamment.",
    ctaRepo: "Voir le dépôt",
    ctaInstall: "Lire INSTALL.md",
  },

  footer: {
    tagline: "PaaS auto-hébergé · MIT",
  },

  copy: {
    idle: "copier",
    done: "copié ✓",
    aria: "Copier la commande d'installation",
  },

  music: {
    on: "son on",
    off: "son off",
  },

  notFound: {
    title: "Cette page n'est pas déployée.",
    body: "L'URL demandée n'existe pas ou a été déplacée. Revenez au dashboard ou explorez le dépôt.",
    terminal: "› status 404: not found",
    home: "Retour à l'accueil",
    code: "Explorer le code",
  },

  langSwitcher: {
    label: "Changer de langue",
  },

  skipToContent: "Aller au contenu",
};

export default fr;
