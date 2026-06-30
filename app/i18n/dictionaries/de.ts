import type { Dictionary } from "../types";

const de: Dictionary = {
  meta: {
    title: "DockControl — Verwandle deinen VPS in eine Deployment-Plattform",
    description:
      "Die Open-Source-Alternative zu Heroku, Vercel und Render: auf deinem VPS installieren, Domain verbinden, Apps, Datenbanken, SSL und Backups steuern — ohne SSH.",
    ogDescription:
      "Die Open-Source-Alternative zu Heroku, Vercel und Render. Deine Server, deine Daten, null Lock-in.",
  },

  nav: {
    features: "Funktionen",
    compare: "Vergleich",
    install: "Installation",
  },

  hero: {
    badge: "Open Source · MIT-Lizenz · Selbst gehostet",
    titleLine1: "Dein VPS wird zur",
    titleLine2: "Deployment-Plattform.",
    lead: "DockControl ist die Open-Source-Alternative zu Heroku, Vercel und Render. Installiere es auf deiner eigenen Hardware, verbinde eine Domain und steuere deine Apps, Datenbanken, SSL, Monitoring und Backups aus einem einzigen Dashboard — ohne je wieder SSH anzufassen.",
    installLabel: "INSTALLATION · ROOT",
    installNote:
      "// idempotenter Installer — beliebig oft erneut ausführbar, .env bleibt erhalten.",
    ctaGuide: "Installationsanleitung",
    ctaCode: "Code erkunden",
  },

  mockup: {
    statusAll: "alles betriebsbereit",
    nav: ["Apps", "Deployments", "Datenbanken", "Domains", "Monitoring", "Backups"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "ERSETZT",
    tagline: "→ deine Server, deine Daten, null Lock-in.",
  },

  features: {
    kicker: "// Funktionen",
    title: "Alles, was ein PaaS bietet — auf deiner eigenen Infrastruktur.",
    subtitle:
      "Von Git-Deployments bis zu verschlüsselten Backups, dazu SSL und Monitoring. Keine nutzungsbasierte Abrechnung, keine Überraschungsrechnungen.",
    items: [
      {
        title: "App-Marketplace",
        body: "Stacks per Klick installieren — kuratiert: WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Git-Deployments",
        body: "GitHub-, GitLab- oder Bitbucket-Repo verbinden, Branch wählen, Build + Deploy per Webhook ausgelöst.",
        tag: "→ HMAC auf dem Raw-Body",
      },
      {
        title: "Automatisches SSL",
        body: "Domain anhängen und Caddy stellt beim nächsten Request ein Let's Encrypt-Zertifikat bereit. HTTPS auf benutzerdefinierten Ports inklusive.",
        tag: "→ via Caddy",
      },
      {
        title: "Monitoring + Alerts",
        body: "CPU / RAM / Disk / Netzwerk pro Server, konfigurierbare Aufbewahrung, Schwellwert-Alerts.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Multi-Server",
        body: "Starte im LOCAL-Modus auf einem VPS, wechsle zu MULTI, um weitere Server über einen Go-Agent einzubinden.",
        tag: "→ Long-Poll-Queue, sicheres Claim",
      },
      {
        title: "2FA-Authentifizierung",
        body: "TOTP-Einrichtung pro Nutzer, beim nächsten Login erzwungen, Recovery-Codes beim Setup generiert.",
        tag: "→ TOTP + Recovery-Codes",
      },
      {
        title: "Verschlüsselte Backups",
        body: "Postgres- / MySQL- / Datei-Dumps mit AES-256-GCM verschlüsselt, beim Restore per SHA-256 geprüft. Planbar, push-bar zu S3 / R2 / B2.",
        tag: "→ isolierter BACKUP-Key",
      },
    ],
  },

  openSource: {
    kicker: "100% OPEN SOURCE",
    titleLine1: "MIT-lizenziert.",
    titleLine2: "Ohne Hintertüren.",
    body: "Nutze es, forke es, betreibe es im kommerziellen Produktivbetrieb. Der Code ist vollständig öffentlich, auditierbar und sendet nichts über das hinaus, was du konfigurierst. Keine versteckte Telemetrie, kein gesperrter „Enterprise“-Tarif.",
    badges: [
      "Frei forken und weitergeben",
      "Auditierbarer Code, null Telemetrie",
      "Keine Lizenzgebühr, du zahlst nur deinen VPS",
    ],
  },

  compare: {
    kicker: "// Vergleich",
    title: "DockControl vs. Managed PaaS",
    colCriteria: "KRITERIUM",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Hosting", us: "Deine Server", them: "Anbieter-Cloud" },
      { k: "Kosten", us: "Dein VPS, Festpreis", them: "Nutzungsbasierte Abrechnung" },
      { k: "Lizenz", us: "MIT, Open Source", them: "Proprietär" },
      { k: "Lock-in", us: "Keiner", them: "Hoch" },
      { k: "DB · Mail · SSL", us: "Inklusive", them: "Kostenpflichtige Add-ons" },
      { k: "Daten & Secrets", us: "Bei dir, verschlüsselt", them: "Beim Anbieter" },
    ],
  },

  marketplace: {
    kicker: "// Marketplace",
    title: "Sofort lauffähige Stacks per Klick.",
    bodyBefore:
      "Jede Marketplace-App wird als Docker Compose unter ",
    bodyAfter: " generiert — versionierbar, lesbar und zu 100% unter deiner Kontrolle.",
  },

  install: {
    reqsKicker: "// Voraussetzungen",
    reqsTitle: "Was du brauchst",
    reqs: [
      "Linux-VPS — Ubuntu 22.04+ oder Debian 12+ (andere Distros: ungetestet).",
      "Docker Engine 24+ mit dem docker compose-Plugin.",
      "2 GB RAM minimum (4 GB empfohlen, sobald Apps deployt sind).",
      "Ports 80 und 443 zum Internet offen (Caddy + Let's Encrypt HTTP-01).",
      "Ports 3000 (Dashboard) und 4000 (API) beim ersten Boot erreichbar.",
      "Eine öffentliche IPv4 (auto-erkannt, überschreibbar via PUBLIC_API_URL).",
    ],
    quickKicker: "// Schnellinstallation",
    quickTitle: "Drei Zeilen, und du bist live",
    steps: [
      "Frischer Ubuntu-/Debian-VPS, als root verbunden.",
      "Füge den Installationsbefehl unten ein.",
      "Öffne das Dashboard auf :3000, verbinde eine Domain.",
    ],
  },

  contributing: {
    kicker: "// Mitwirken",
    title: "PRs sind willkommen.",
    bodyBefore:
      "Eröffne ein Issue vor jeder Änderung, die größer als ein Tippfehler ist. ",
    bodyAfter:
      " vom Root aus für einen lokalen Dev-Loop — API und Dashboard machen Hot-Reload unabhängig voneinander.",
    ctaRepo: "Repo ansehen",
    ctaInstall: "INSTALL.md lesen",
  },

  footer: {
    tagline: "Selbst gehostetes PaaS · MIT",
  },

  copy: {
    idle: "kopieren",
    done: "kopiert ✓",
    aria: "Installationsbefehl kopieren",
  },

  music: {
    on: "Ton an",
    off: "Ton aus",
  },

  notFound: {
    title: "Diese Seite ist nicht deployt.",
    body: "Die angeforderte URL existiert nicht oder wurde verschoben. Kehre zum Dashboard zurück oder erkunde das Repo.",
    terminal: "› status 404: not found",
    home: "Zurück zur Startseite",
    code: "Code erkunden",
  },

  langSwitcher: {
    label: "Sprache ändern",
  },

  skipToContent: "Zum Inhalt springen",
};

export default de;
