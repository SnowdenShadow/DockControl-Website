import type { Dictionary } from "../types";

const it: Dictionary = {
  meta: {
    title: "DockControl — Il tuo VPS diventa una piattaforma di deploy",
    description:
      "L'alternativa open-source a Heroku, Vercel e Render: installala sul tuo VPS, punta un dominio e gestisci app, database, SSL e backup — senza SSH.",
    ogDescription:
      "L'alternativa open-source a Heroku, Vercel e Render. I tuoi server, i tuoi dati, zero lock-in.",
  },

  nav: {
    features: "Funzionalità",
    compare: "Confronto",
    install: "Installazione",
  },

  hero: {
    badge: "Open source · Licenza MIT · Self-hosted",
    titleLine1: "Il tuo VPS diventa una",
    titleLine2: "piattaforma di deploy.",
    lead: "DockControl è l'alternativa open-source a Heroku, Vercel e Render. Installalo sul tuo hardware, punta un dominio e gestisci app, database, SSL, monitoraggio e backup da un'unica dashboard — senza più mettere mano a SSH.",
    installLabel: "INSTALLAZIONE · ROOT",
    installNote:
      "// installer idempotente — rilancialo quando vuoi, preserva il .env.",
    ctaGuide: "Guida all'installazione",
    ctaCode: "Esplora il codice",
  },

  mockup: {
    statusAll: "tutto operativo",
    nav: ["App", "Deploy", "Database", "Domini", "Monitoraggio", "Backup"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "SOSTITUISCE",
    tagline: "→ i tuoi server, i tuoi dati, zero lock-in.",
  },

  features: {
    kicker: "// Funzionalità",
    title: "Tutto ciò che ti dà un PaaS — sulla tua infrastruttura.",
    subtitle:
      "Dal deploy via Git ai backup cifrati, passando per SSL e monitoraggio. Niente fatturazione a consumo, niente fatture a sorpresa.",
    items: [
      {
        title: "Marketplace di app",
        body: "Installazione in un clic di stack curati — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Deploy via Git",
        body: "Collega un repo GitHub / GitLab / Bitbucket, scegli un branch, build + deploy attivati da webhook.",
        tag: "→ HMAC sul body grezzo",
      },
      {
        title: "SSL automatico",
        body: "Collega un dominio e Caddy genera un certificato Let's Encrypt alla richiesta successiva. HTTPS su porte custom incluso.",
        tag: "→ via Caddy",
      },
      {
        title: "Monitoraggio + alert",
        body: "CPU / RAM / disco / rete per server, retention configurabile, alert su soglia.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Multi-server",
        body: "Parti in LOCAL su un VPS, passa a MULTI per aggiungere altri server tramite un agent Go.",
        tag: "→ coda long-poll, claim sicuro",
      },
      {
        title: "Autenticazione 2FA",
        body: "Registrazione TOTP per utente, imposta al login successivo, codici di recupero generati al setup.",
        tag: "→ TOTP + codici di recupero",
      },
      {
        title: "Backup cifrati",
        body: "Dump Postgres / MySQL / file cifrati con AES-256-GCM, verificati con SHA-256 al ripristino. Pianificabili, esportabili su S3 / R2 / B2.",
        tag: "→ chiave BACKUP isolata",
      },
    ],
  },

  openSource: {
    kicker: "100% OPEN SOURCE",
    titleLine1: "Licenza MIT.",
    titleLine2: "Senza vincoli.",
    body: "Usalo, forkalo, mettilo in produzione commerciale. Il codice è interamente pubblico, verificabile e non invia nulla oltre a ciò che configuri. Nessuna telemetria nascosta, nessun piano «Enterprise» bloccato.",
    badges: [
      "Forka e ridistribuisci liberamente",
      "Codice verificabile, zero telemetria",
      "Nessuna licenza, paghi solo il tuo VPS",
    ],
  },

  compare: {
    kicker: "// Confronto",
    title: "DockControl vs PaaS gestito",
    colCriteria: "CRITERIO",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Hosting", us: "I tuoi server", them: "Cloud del vendor" },
      { k: "Costo", us: "Il tuo VPS, prezzo fisso", them: "Fatturazione a consumo" },
      { k: "Licenza", us: "MIT, open source", them: "Proprietaria" },
      { k: "Lock-in", us: "Nessuno", them: "Elevato" },
      { k: "DB · mail · SSL", us: "Inclusi", them: "Add-on a pagamento" },
      { k: "Dati e segreti", us: "Da te, cifrati", them: "Dal vendor" },
    ],
  },

  marketplace: {
    kicker: "// Marketplace",
    title: "Stack pronti all'uso in un clic.",
    bodyBefore:
      "Ogni app del marketplace viene generata come Docker Compose sotto ",
    bodyAfter: " — versionabile, leggibile e al 100% sotto il tuo controllo.",
  },

  install: {
    reqsKicker: "// Requisiti",
    reqsTitle: "Cosa ti serve",
    reqs: [
      "VPS Linux — Ubuntu 22.04+ o Debian 12+ (altre distro: non testate).",
      "Docker Engine 24+ con il plugin docker compose.",
      "2 GB di RAM minimo (4 GB consigliati una volta deployate le app).",
      "Porte 80 e 443 aperte su Internet (Caddy + Let's Encrypt HTTP-01).",
      "Porte 3000 (dashboard) e 4000 (API) raggiungibili al primo boot.",
      "Un IPv4 pubblico (rilevato in automatico, sovrascrivibile via PUBLIC_API_URL).",
    ],
    quickKicker: "// Quick install",
    quickTitle: "Tre righe e sei online",
    steps: [
      "VPS Ubuntu/Debian appena creato, connesso come root.",
      "Incolla il comando di installazione qui sotto.",
      "Apri la dashboard su :3000, punta un dominio.",
    ],
  },

  contributing: {
    kicker: "// Contribuire",
    title: "Le PR sono benvenute.",
    bodyBefore:
      "Apri una issue prima di qualsiasi modifica più grande di un typo. ",
    bodyAfter:
      " dalla root per un ciclo di dev locale — API e dashboard fanno hot-reload in modo indipendente.",
    ctaRepo: "Vedi il repo",
    ctaInstall: "Leggi INSTALL.md",
  },

  footer: {
    tagline: "PaaS self-hosted · MIT",
  },

  copy: {
    idle: "copia",
    done: "copiato ✓",
    aria: "Copia il comando di installazione",
  },

  music: {
    on: "audio on",
    off: "audio off",
  },

  notFound: {
    title: "Questa pagina non è deployata.",
    body: "L'URL richiesto non esiste o è stato spostato. Torna alla dashboard o esplora il repo.",
    terminal: "› status 404: not found",
    home: "Torna alla home",
    code: "Esplora il codice",
  },

  langSwitcher: {
    label: "Cambia lingua",
  },

  skipToContent: "Vai al contenuto",
};

export default it;
