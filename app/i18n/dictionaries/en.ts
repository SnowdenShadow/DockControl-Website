import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "DockControl — Turn your VPS into a deployment platform",
    description:
      "The open-source alternative to Heroku, Vercel and Render: install it on your own VPS, point a domain, and run apps, databases, SSL and backups — without SSH.",
    ogDescription:
      "The open-source alternative to Heroku, Vercel and Render. Your servers, your data, zero lock-in.",
  },

  nav: {
    features: "Features",
    compare: "Comparison",
    install: "Install",
  },

  hero: {
    badge: "Open source · MIT licensed · Self-hosted",
    titleLine1: "Your VPS becomes a",
    titleLine2: "deployment platform.",
    lead: "DockControl is the open-source alternative to Heroku, Vercel and Render. Install it on your own hardware, point a domain, and drive your apps, databases, SSL, monitoring and backups from a single dashboard — without ever touching SSH again.",
    installLabel: "INSTALL · ROOT",
    installNote:
      "// idempotent installer — re-run it anytime, it preserves .env.",
    ctaGuide: "Installation guide",
    ctaCode: "Explore the code",
  },

  mockup: {
    statusAll: "all operational",
    nav: ["Apps", "Deployments", "Databases", "Domains", "Monitoring", "Backups"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "REPLACES",
    tagline: "→ your servers, your data, zero lock-in.",
  },

  features: {
    kicker: "// Features",
    title: "Everything a PaaS gives you — on your own infra.",
    subtitle:
      "From Git deploys to encrypted backups, via SSL and monitoring. No usage-based billing, no surprise invoices.",
    items: [
      {
        title: "App marketplace",
        body: "One-click install of curated stacks — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Git deployments",
        body: "Connect a GitHub / GitLab / Bitbucket repo, pick a branch, build + deploy triggered by webhook.",
        tag: "→ HMAC on the raw body",
      },
      {
        title: "Automatic SSL",
        body: "Attach a domain and Caddy provisions a Let's Encrypt certificate on the next request. HTTPS on custom ports included.",
        tag: "→ via Caddy",
      },
      {
        title: "Monitoring + alerts",
        body: "CPU / RAM / disk / network per server, configurable retention, threshold alerts.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Multi-server",
        body: "Start in LOCAL on one VPS, switch to MULTI to enroll more servers via a Go agent.",
        tag: "→ long-poll queue, safe claim",
      },
      {
        title: "2FA authentication",
        body: "Per-user TOTP enrollment, enforced on next login, recovery codes generated at setup.",
        tag: "→ TOTP + recovery codes",
      },
      {
        title: "Encrypted backups",
        body: "Postgres / MySQL / file dumps encrypted with AES-256-GCM, SHA-256 verified on restore. Schedulable, pushable to S3 / R2 / B2.",
        tag: "→ siloed BACKUP key",
      },
    ],
  },

  openSource: {
    kicker: "100% OPEN SOURCE",
    titleLine1: "MIT licensed.",
    titleLine2: "No strings attached.",
    body: "Use it, fork it, run it in commercial production. The code is fully public, auditable, and sends nothing beyond what you configure. No hidden telemetry, no locked “Enterprise” tier.",
    badges: [
      "Fork and redistribute freely",
      "Auditable code, zero telemetry",
      "No license fee, just pay for your VPS",
    ],
  },

  compare: {
    kicker: "// Comparison",
    title: "DockControl vs managed PaaS",
    colCriteria: "CRITERION",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Hosting", us: "Your servers", them: "Vendor cloud" },
      { k: "Cost", us: "Your VPS, fixed price", them: "Usage-based billing" },
      { k: "License", us: "MIT, open source", them: "Proprietary" },
      { k: "Lock-in", us: "None", them: "High" },
      { k: "DB · mail · SSL", us: "Included", them: "Paid add-ons" },
      { k: "Data & secrets", us: "On your side, encrypted", them: "On the vendor's side" },
    ],
  },

  marketplace: {
    kicker: "// Marketplace",
    title: "Ready-to-run stacks in one click.",
    bodyBefore:
      "Every marketplace app is generated as Docker Compose under ",
    bodyAfter: " — versionable, readable, and 100% under your control.",
  },

  install: {
    reqsKicker: "// Requirements",
    reqsTitle: "What you need",
    reqs: [
      "Linux VPS — Ubuntu 22.04+ or Debian 12+ (other distros: untested).",
      "Docker Engine 24+ with the docker compose plugin.",
      "2 GB RAM minimum (4 GB recommended once apps are deployed).",
      "Ports 80 and 443 open to the Internet (Caddy + Let's Encrypt HTTP-01).",
      "Ports 3000 (dashboard) and 4000 (API) reachable on first boot.",
      "A public IPv4 (auto-detected, overridable via PUBLIC_API_URL).",
    ],
    quickKicker: "// Quick install",
    quickTitle: "Three lines, and you're live",
    steps: [
      "Fresh Ubuntu/Debian VPS, connected as root.",
      "Paste the install command below.",
      "Open the dashboard on :3000, point a domain.",
    ],
  },

  contributing: {
    kicker: "// Contributing",
    title: "PRs are welcome.",
    bodyBefore:
      "Open an issue before any change bigger than a typo. ",
    bodyAfter:
      " from the root for a local dev loop — the API and dashboard hot-reload independently.",
    ctaRepo: "View the repo",
    ctaInstall: "Read INSTALL.md",
  },

  footer: {
    tagline: "Self-hosted PaaS · MIT",
  },

  copy: {
    idle: "copy",
    done: "copied ✓",
    aria: "Copy the install command",
  },

  music: {
    on: "sound on",
    off: "sound off",
  },

  notFound: {
    title: "This page isn't deployed.",
    body: "The requested URL doesn't exist or has moved. Head back to the dashboard or explore the repo.",
    terminal: "› status 404: not found",
    home: "Back to home",
    code: "Explore the code",
  },

  langSwitcher: {
    label: "Change language",
  },

  skipToContent: "Skip to content",
};

export default en;
