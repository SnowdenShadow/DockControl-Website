import type { Dictionary } from "../types";

const pt: Dictionary = {
  meta: {
    title: "DockControl — Transforme o seu VPS numa plataforma de deployment",
    description:
      "A alternativa open-source a Heroku, Vercel e Render: instale-a no seu VPS, aponte um domínio e gira apps, bases de dados, SSL e backups — sem SSH.",
    ogDescription:
      "A alternativa open-source a Heroku, Vercel e Render. Os seus servidores, os seus dados, zero lock-in.",
  },

  nav: {
    features: "Funcionalidades",
    compare: "Comparação",
    install: "Instalação",
  },

  hero: {
    badge: "Open source · Licença MIT · Auto-alojado",
    titleLine1: "O seu VPS torna-se uma",
    titleLine2: "plataforma de deployment.",
    lead: "O DockControl é a alternativa open-source a Heroku, Vercel e Render. Instale-o no seu próprio hardware, aponte um domínio e conduza as suas apps, bases de dados, SSL, monitorização e backups a partir de um único dashboard — sem voltar a recorrer ao SSH.",
    installLabel: "INSTALAÇÃO · ROOT",
    installNote:
      "// instalador idempotente — execute-o sempre que quiser, preserva o .env.",
    ctaGuide: "Guia de instalação",
    ctaCode: "Explorar o código",
  },

  mockup: {
    statusAll: "tudo operacional",
    nav: ["Apps", "Deployments", "Bases de dados", "Domínios", "Monitorização", "Backups"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "SUBSTITUI",
    tagline: "→ os seus servidores, os seus dados, zero lock-in.",
  },

  features: {
    kicker: "// Funcionalidades",
    title: "Tudo o que um PaaS lhe dá — na sua própria infraestrutura.",
    subtitle:
      "Do deployment via Git aos backups encriptados, passando pelo SSL e pela monitorização. Sem faturação por uso, sem faturas surpresa.",
    items: [
      {
        title: "Marketplace de apps",
        body: "Instalação com um clique de stacks selecionadas — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Deployments Git",
        body: "Ligue um repositório GitHub / GitLab / Bitbucket, escolha uma branch, build + deploy acionado por webhook.",
        tag: "→ HMAC sobre o body bruto",
      },
      {
        title: "SSL automático",
        body: "Associe um domínio e o Caddy aprovisiona um certificado Let's Encrypt no pedido seguinte. HTTPS em portas personalizadas incluído.",
        tag: "→ via Caddy",
      },
      {
        title: "Monitorização + alertas",
        body: "CPU / RAM / disco / rede por servidor, retenção configurável, alertas por limite.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Multi-servidor",
        body: "Comece em LOCAL num VPS, passe para MULTI para inscrever mais servidores através de um agente Go.",
        tag: "→ fila long-poll, claim seguro",
      },
      {
        title: "Autenticação 2FA",
        body: "Inscrição TOTP por utilizador, imposta no próximo login, códigos de recuperação gerados na configuração.",
        tag: "→ TOTP + códigos de recuperação",
      },
      {
        title: "Backups encriptados",
        body: "Dumps de Postgres / MySQL / ficheiros encriptados com AES-256-GCM, verificados por SHA-256 no restauro. Agendáveis, exportáveis para S3 / R2 / B2.",
        tag: "→ chave BACKUP isolada",
      },
    ],
  },

  openSource: {
    kicker: "100% OPEN SOURCE",
    titleLine1: "Sob licença MIT.",
    titleLine2: "Sem contrapartidas.",
    body: "Use-o, faça fork, ponha-o a correr em produção comercial. O código é totalmente público, auditável e não envia nada além do que configurar. Sem telemetria escondida, sem um nível «Enterprise» bloqueado.",
    badges: [
      "Faça fork e redistribua livremente",
      "Código auditável, zero telemetria",
      "Sem licença a pagar, pague só o seu VPS",
    ],
  },

  compare: {
    kicker: "// Comparação",
    title: "DockControl vs PaaS geridos",
    colCriteria: "CRITÉRIO",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Alojamento", us: "Os seus servidores", them: "Cloud do fornecedor" },
      { k: "Custo", us: "O seu VPS, preço fixo", them: "Faturado por uso" },
      { k: "Licença", us: "MIT, open source", them: "Proprietária" },
      { k: "Lock-in", us: "Nenhum", them: "Elevado" },
      { k: "BD · mail · SSL", us: "Incluído", them: "Add-ons pagos" },
      { k: "Dados e segredos", us: "Do seu lado, encriptados", them: "Do lado do fornecedor" },
    ],
  },

  marketplace: {
    kicker: "// Marketplace",
    title: "Stacks prontas a correr com um clique.",
    bodyBefore:
      "Cada app da marketplace é gerada como Docker Compose em ",
    bodyAfter: " — versionável, legível e 100% sob o seu controlo.",
  },

  install: {
    reqsKicker: "// Requisitos",
    reqsTitle: "Do que precisa",
    reqs: [
      "VPS Linux — Ubuntu 22.04+ ou Debian 12+ (outras distros: não testadas).",
      "Docker Engine 24+ com o plugin docker compose.",
      "2 GB de RAM no mínimo (4 GB recomendado assim que tiver apps em produção).",
      "Portas 80 e 443 abertas à Internet (Caddy + Let's Encrypt HTTP-01).",
      "Portas 3000 (dashboard) e 4000 (API) acessíveis no primeiro arranque.",
      "Um IPv4 público (detetado automaticamente, substituível via PUBLIC_API_URL).",
    ],
    quickKicker: "// Instalação rápida",
    quickTitle: "Três linhas e está online",
    steps: [
      "VPS Ubuntu/Debian acabado de criar, ligado como root.",
      "Cole o comando de instalação abaixo.",
      "Abra o dashboard em :3000, aponte um domínio.",
    ],
  },

  contributing: {
    kicker: "// Contribuir",
    title: "PRs são bem-vindos.",
    bodyBefore:
      "Abra uma issue antes de qualquer alteração maior do que uma gralha. ",
    bodyAfter:
      " a partir da raiz para um ciclo de desenvolvimento local — a API e o dashboard fazem hot-reload de forma independente.",
    ctaRepo: "Ver o repositório",
    ctaInstall: "Ler o INSTALL.md",
  },

  footer: {
    tagline: "PaaS auto-alojado · MIT",
  },

  copy: {
    idle: "copiar",
    done: "copiado ✓",
    aria: "Copiar o comando de instalação",
  },

  music: {
    on: "som ligado",
    off: "som desligado",
  },

  notFound: {
    title: "Esta página não está em produção.",
    body: "O URL pedido não existe ou foi movido. Volte ao dashboard ou explore o repositório.",
    terminal: "› status 404: not found",
    home: "Voltar ao início",
    code: "Explorar o código",
  },

  langSwitcher: {
    label: "Mudar de idioma",
  },

  skipToContent: "Saltar para o conteúdo",
};

export default pt;
