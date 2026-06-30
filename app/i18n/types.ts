/**
 * Contrat de traduction.
 *
 * Chaque langue fournit un objet `Dictionary` complet — TypeScript signale
 * toute clé manquante. Seul le TEXTE est ici ; les icônes, couleurs, URLs et
 * la structure vivent dans le code et ne se traduisent pas.
 *
 * Les tableaux à taille fixe (features ×7, compareRows ×6, reqs ×6,
 * installSteps ×3) garantissent que chaque langue couvre exactement les mêmes
 * éléments, dans le même ordre que les icônes/données non traduites.
 */

export type Feature7 = [
  Feature,
  Feature,
  Feature,
  Feature,
  Feature,
  Feature,
  Feature,
];
export type CompareRow6 = [
  CompareRow,
  CompareRow,
  CompareRow,
  CompareRow,
  CompareRow,
  CompareRow,
];
export type Str6 = [string, string, string, string, string, string];
export type Str3 = [string, string, string];

export type Feature = { title: string; body: string; tag: string };
export type CompareRow = { k: string; us: string; them: string };

export type Dictionary = {
  /** Métadonnées SEO (title/description par langue). */
  meta: {
    title: string;
    description: string; // ~150-160 car. pour la meta description
    ogDescription: string; // version courte OG/Twitter
  };

  nav: {
    features: string;
    compare: string;
    install: string;
  };

  hero: {
    badge: string; // "Open source · Licence MIT · Auto-hébergé"
    titleLine1: string;
    titleLine2: string;
    lead: string;
    installLabel: string; // "INSTALLATION · ROOT"
    installNote: string; // "// installeur idempotent…"
    ctaGuide: string;
    ctaCode: string;
  };

  mockup: {
    statusAll: string; // "tout opérationnel"
    nav: Str6; // Apps, Déploiements, Bases, Domaines, Monitoring, Backups
    live: string;
    build: string;
    cpuLabel: string; // "CPU · 60 min"
  };

  valueStrip: {
    replaces: string; // "REMPLACE"
    tagline: string; // "→ vos serveurs, vos données, zéro lock-in."
  };

  features: {
    kicker: string; // "// Fonctionnalités"
    title: string;
    subtitle: string;
    items: Feature7;
  };

  openSource: {
    kicker: string; // "100% OPEN SOURCE"
    titleLine1: string;
    titleLine2: string;
    body: string;
    badges: Str3; // textes des 3 badges (MIT / { } / $0)
  };

  compare: {
    kicker: string;
    title: string;
    colCriteria: string; // "CRITÈRE"
    colThem: string; // "Heroku / Vercel / Render"
    rows: CompareRow6;
  };

  marketplace: {
    kicker: string;
    title: string;
    bodyBefore: string; // texte avant le chemin .dockcontrol/apps/
    bodyAfter: string; // texte après
  };

  install: {
    reqsKicker: string; // "// Prérequis"
    reqsTitle: string; // "Ce qu'il vous faut"
    reqs: Str6;
    quickKicker: string; // "// Quick install"
    quickTitle: string; // "Trois lignes, et c'est en ligne"
    steps: Str3;
  };

  contributing: {
    kicker: string;
    title: string;
    bodyBefore: string; // avant "pnpm install && pnpm dev"
    bodyAfter: string; // après
    ctaRepo: string;
    ctaInstall: string;
  };

  footer: {
    tagline: string; // "PaaS auto-hébergé · MIT"
  };

  copy: {
    idle: string; // "copier"
    done: string; // "copié ✓"
    aria: string; // aria-label "Copier la commande d'installation"
  };

  music: {
    on: string;
    off: string;
  };

  notFound: {
    title: string;
    body: string;
    terminal: string; // texte rouge "status 404: not found"
    home: string;
    code: string;
  };

  langSwitcher: {
    label: string; // aria-label "Changer de langue"
  };

  /** Lien d'évitement (accessibilité). */
  skipToContent: string;
};
