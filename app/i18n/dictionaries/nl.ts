import type { Dictionary } from "../types";

const nl: Dictionary = {
  meta: {
    title: "DockControl — Maak van je VPS een deploymentplatform",
    description:
      "Het open-source alternatief voor Heroku, Vercel en Render: installeer het op je eigen VPS, koppel een domein, en beheer apps, databases, SSL en backups — zonder SSH.",
    ogDescription:
      "Het open-source alternatief voor Heroku, Vercel en Render. Jouw servers, jouw data, nul lock-in.",
  },

  nav: {
    features: "Functies",
    compare: "Vergelijking",
    install: "Installatie",
  },

  hero: {
    badge: "Open source · MIT-licentie · Zelf gehost",
    titleLine1: "Je VPS wordt een",
    titleLine2: "deploymentplatform.",
    lead: "DockControl is het open-source alternatief voor Heroku, Vercel en Render. Installeer het op je eigen hardware, koppel een domein, en stuur je apps, databases, SSL, monitoring en backups aan vanuit één dashboard — zonder ooit nog SSH aan te raken.",
    installLabel: "INSTALLATIE · ROOT",
    installNote:
      "// idempotente installer — voer hem opnieuw uit wanneer je wilt, hij behoudt .env.",
    ctaGuide: "Installatiegids",
    ctaCode: "Verken de code",
  },

  mockup: {
    statusAll: "alles operationeel",
    nav: ["Apps", "Deployments", "Databases", "Domeinen", "Monitoring", "Backups"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "VERVANGT",
    tagline: "→ jouw servers, jouw data, nul lock-in.",
  },

  features: {
    kicker: "// Functies",
    title: "Alles wat een PaaS je biedt — op je eigen infra.",
    subtitle:
      "Van Git-deploys tot versleutelde backups, via SSL en monitoring. Geen verbruiksgebaseerde facturatie, geen onverwachte facturen.",
    items: [
      {
        title: "App-marketplace",
        body: "Installeer met één klik samengestelde stacks — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Git-deployments",
        body: "Verbind een GitHub / GitLab / Bitbucket repo, kies een branch, build + deploy getriggerd door webhook.",
        tag: "→ HMAC op de ruwe body",
      },
      {
        title: "Automatische SSL",
        body: "Koppel een domein en Caddy levert bij de volgende request een Let's Encrypt-certificaat. HTTPS op custom poorten inbegrepen.",
        tag: "→ via Caddy",
      },
      {
        title: "Monitoring + alerts",
        body: "CPU / RAM / schijf / netwerk per server, instelbare retentie, drempelwaarde-alerts.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Multi-server",
        body: "Begin in LOCAL op één VPS, schakel over naar MULTI om meer servers in te schrijven via een Go-agent.",
        tag: "→ long-poll queue, veilige claim",
      },
      {
        title: "2FA-authenticatie",
        body: "TOTP-inschrijving per gebruiker, afgedwongen bij de volgende login, herstelcodes gegenereerd bij de setup.",
        tag: "→ TOTP + herstelcodes",
      },
      {
        title: "Versleutelde backups",
        body: "Postgres / MySQL / bestandsdumps versleuteld met AES-256-GCM, SHA-256-geverifieerd bij herstel. Inplanbaar, pushbaar naar S3 / R2 / B2.",
        tag: "→ afgeschermde BACKUP-sleutel",
      },
    ],
  },

  openSource: {
    kicker: "100% OPEN SOURCE",
    titleLine1: "MIT-gelicentieerd.",
    titleLine2: "Zonder voorwaarden.",
    body: "Gebruik het, fork het, draai het in commerciële productie. De code is volledig openbaar, controleerbaar, en stuurt niets meer dan wat jij configureert. Geen verborgen telemetrie, geen vergrendelde “Enterprise”-laag.",
    badges: [
      "Fork en herdistribueer vrij",
      "Controleerbare code, nul telemetrie",
      "Geen licentiekosten, betaal alleen je VPS",
    ],
  },

  compare: {
    kicker: "// Vergelijking",
    title: "DockControl vs managed PaaS",
    colCriteria: "CRITERIUM",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Hosting", us: "Jouw servers", them: "Cloud van de leverancier" },
      { k: "Kosten", us: "Jouw VPS, vaste prijs", them: "Verbruiksgebaseerde facturatie" },
      { k: "Licentie", us: "MIT, open source", them: "Propriëtair" },
      { k: "Lock-in", us: "Geen", them: "Hoog" },
      { k: "DB · mail · SSL", us: "Inbegrepen", them: "Betaalde add-ons" },
      { k: "Data & secrets", us: "Bij jou, versleuteld", them: "Bij de leverancier" },
    ],
  },

  marketplace: {
    kicker: "// Marketplace",
    title: "Kant-en-klare stacks met één klik.",
    bodyBefore:
      "Elke marketplace-app wordt gegenereerd als Docker Compose onder ",
    bodyAfter: " — versioneerbaar, leesbaar, en 100% onder jouw controle.",
  },

  install: {
    reqsKicker: "// Vereisten",
    reqsTitle: "Wat je nodig hebt",
    reqs: [
      "Linux-VPS — Ubuntu 22.04+ of Debian 12+ (andere distro's: niet getest).",
      "Docker Engine 24+ met de docker compose-plugin.",
      "Minimaal 2 GB RAM (4 GB aanbevolen zodra er apps zijn gedeployd).",
      "Poorten 80 en 443 open naar het internet (Caddy + Let's Encrypt HTTP-01).",
      "Poorten 3000 (dashboard) en 4000 (API) bereikbaar bij de eerste boot.",
      "Een publiek IPv4 (automatisch gedetecteerd, overschrijfbaar via PUBLIC_API_URL).",
    ],
    quickKicker: "// Snelle installatie",
    quickTitle: "Drie regels, en je bent live",
    steps: [
      "Verse Ubuntu/Debian-VPS, verbonden als root.",
      "Plak het installatiecommando hieronder.",
      "Open het dashboard op :3000, koppel een domein.",
    ],
  },

  contributing: {
    kicker: "// Bijdragen",
    title: "PR's zijn welkom.",
    bodyBefore:
      "Open een issue voor elke wijziging groter dan een typefout. ",
    bodyAfter:
      " vanuit de root voor een lokale dev-loop — de API en het dashboard hot-reloaden onafhankelijk.",
    ctaRepo: "Bekijk de repo",
    ctaInstall: "Lees INSTALL.md",
  },

  footer: {
    tagline: "Zelf gehoste PaaS · MIT",
  },

  copy: {
    idle: "kopiëren",
    done: "gekopieerd ✓",
    aria: "Kopieer het installatiecommando",
  },

  music: {
    on: "geluid aan",
    off: "geluid uit",
  },

  notFound: {
    title: "Deze pagina is niet gedeployd.",
    body: "De opgevraagde URL bestaat niet of is verplaatst. Ga terug naar het dashboard of verken de repo.",
    terminal: "› status 404: not found",
    home: "Terug naar home",
    code: "Verken de code",
  },

  langSwitcher: {
    label: "Taal wijzigen",
  },

  skipToContent: "Naar inhoud springen",
};

export default nl;
