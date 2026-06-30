import type { Dictionary } from "../types";

const es: Dictionary = {
  meta: {
    title: "DockControl — Convierte tu VPS en una plataforma de despliegue",
    description:
      "La alternativa open source a Heroku, Vercel y Render: instálala en tu VPS, apunta un dominio y gestiona apps, bases de datos, SSL y backups — sin SSH.",
    ogDescription:
      "La alternativa open source a Heroku, Vercel y Render. Tus servidores, tus datos, cero lock-in.",
  },

  nav: {
    features: "Funcionalidades",
    compare: "Comparativa",
    install: "Instalación",
  },

  hero: {
    badge: "Open source · Licencia MIT · Autoalojado",
    titleLine1: "Tu VPS se convierte en una",
    titleLine2: "plataforma de despliegue.",
    lead: "DockControl es la alternativa open source a Heroku, Vercel y Render. Instálalo en tu propio hardware, apunta un dominio y gestiona tus apps, bases de datos, SSL, monitorización y backups desde un solo panel — sin volver a tocar el SSH.",
    installLabel: "INSTALACIÓN · ROOT",
    installNote:
      "// instalador idempotente — vuélvelo a ejecutar cuando quieras, conserva el .env.",
    ctaGuide: "Guía de instalación",
    ctaCode: "Explorar el código",
  },

  mockup: {
    statusAll: "todo operativo",
    nav: ["Apps", "Despliegues", "Bases de datos", "Dominios", "Monitorización", "Backups"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "REEMPLAZA",
    tagline: "→ tus servidores, tus datos, cero lock-in.",
  },

  features: {
    kicker: "// Funcionalidades",
    title: "Todo lo que te da un PaaS — en tu propia infraestructura.",
    subtitle:
      "Desde despliegues con Git hasta backups cifrados, pasando por SSL y monitorización. Sin facturación por uso, sin facturas sorpresa.",
    items: [
      {
        title: "Marketplace de apps",
        body: "Instalación en un clic de stacks curados — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Despliegues con Git",
        body: "Conecta un repo de GitHub / GitLab / Bitbucket, elige una rama, build + deploy disparado por webhook.",
        tag: "→ HMAC sobre el body en crudo",
      },
      {
        title: "SSL automático",
        body: "Asocia un dominio y Caddy provisiona un certificado Let's Encrypt en la siguiente petición. HTTPS en puertos personalizados incluido.",
        tag: "→ vía Caddy",
      },
      {
        title: "Monitorización + alertas",
        body: "CPU / RAM / disco / red por servidor, retención configurable, alertas por umbral.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Multiservidor",
        body: "Empieza en LOCAL con un VPS, pasa a MULTI para enrolar más servidores mediante un agente en Go.",
        tag: "→ cola long-poll, claim seguro",
      },
      {
        title: "Autenticación 2FA",
        body: "Enrolamiento TOTP por usuario, exigido en el siguiente inicio de sesión, códigos de recuperación generados en el setup.",
        tag: "→ TOTP + códigos de recuperación",
      },
      {
        title: "Backups cifrados",
        body: "Dumps de Postgres / MySQL / archivos cifrados con AES-256-GCM, verificados con SHA-256 al restaurar. Programables y subibles a S3 / R2 / B2.",
        tag: "→ clave BACKUP aislada",
      },
    ],
  },

  openSource: {
    kicker: "100% OPEN SOURCE",
    titleLine1: "Licencia MIT.",
    titleLine2: "Sin ataduras.",
    body: "Úsalo, haz un fork, ponlo en producción comercial. El código es totalmente público, auditable y no envía nada más allá de lo que tú configures. Sin telemetría oculta, sin un nivel «Enterprise» bloqueado.",
    badges: [
      "Haz fork y redistribuye libremente",
      "Código auditable, cero telemetría",
      "Sin cuota de licencia, solo paga tu VPS",
    ],
  },

  compare: {
    kicker: "// Comparativa",
    title: "DockControl frente al PaaS gestionado",
    colCriteria: "CRITERIO",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Alojamiento", us: "Tus servidores", them: "Cloud del proveedor" },
      { k: "Coste", us: "Tu VPS, precio fijo", them: "Facturación por uso" },
      { k: "Licencia", us: "MIT, open source", them: "Propietaria" },
      { k: "Lock-in", us: "Ninguno", them: "Alto" },
      { k: "BD · correo · SSL", us: "Incluidos", them: "Add-ons de pago" },
      { k: "Datos y secretos", us: "En tu lado, cifrados", them: "En el lado del proveedor" },
    ],
  },

  marketplace: {
    kicker: "// Marketplace",
    title: "Stacks listos para usar en un clic.",
    bodyBefore:
      "Cada app del marketplace se genera como Docker Compose en ",
    bodyAfter: " — versionable, legible y 100% bajo tu control.",
  },

  install: {
    reqsKicker: "// Requisitos",
    reqsTitle: "Lo que necesitas",
    reqs: [
      "VPS Linux — Ubuntu 22.04+ o Debian 12+ (otras distros: sin probar).",
      "Docker Engine 24+ con el plugin docker compose.",
      "2 GB de RAM mínimo (4 GB recomendado una vez desplegadas las apps).",
      "Puertos 80 y 443 abiertos a Internet (Caddy + Let's Encrypt HTTP-01).",
      "Puertos 3000 (panel) y 4000 (API) accesibles en el primer arranque.",
      "Una IPv4 pública (autodetectada, anulable vía PUBLIC_API_URL).",
    ],
    quickKicker: "// Instalación rápida",
    quickTitle: "Tres líneas, y ya está en línea",
    steps: [
      "VPS Ubuntu/Debian recién creado, conectado como root.",
      "Pega el comando de instalación de abajo.",
      "Abre el panel en :3000, apunta un dominio.",
    ],
  },

  contributing: {
    kicker: "// Contribuir",
    title: "Los PRs son bienvenidos.",
    bodyBefore:
      "Abre una issue antes de cualquier cambio mayor que una errata. ",
    bodyAfter:
      " desde la raíz para un bucle de desarrollo local — la API y el panel hacen hot-reload de forma independiente.",
    ctaRepo: "Ver el repositorio",
    ctaInstall: "Leer INSTALL.md",
  },

  footer: {
    tagline: "PaaS autoalojado · MIT",
  },

  copy: {
    idle: "copiar",
    done: "copiado ✓",
    aria: "Copiar el comando de instalación",
  },

  music: {
    on: "sonido activado",
    off: "sonido desactivado",
  },

  notFound: {
    title: "Esta página no está desplegada.",
    body: "La URL solicitada no existe o se ha movido. Vuelve al panel o explora el repositorio.",
    terminal: "› status 404: not found",
    home: "Volver al inicio",
    code: "Explorar el código",
  },

  langSwitcher: {
    label: "Cambiar de idioma",
  },

  skipToContent: "Saltar al contenido",
};

export default es;
