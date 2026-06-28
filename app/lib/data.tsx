import type { ReactNode } from "react";
import {
  MarketplaceIcon,
  GitDeployIcon,
  SslIcon,
  MonitoringIcon,
  MultiServerIcon,
  TwoFaIcon,
  BackupIcon,
} from "./icons";

export const INSTALL_CMD =
  "curl -fsSL https://raw.githubusercontent.com/SnowdenShadow/Kryptalis/main/install.sh | sudo sh";

export const REPO_URL = "https://github.com/SnowdenShadow/Kryptalis";

export type Feature = {
  title: string;
  body: string;
  tag: string;
  icon: ReactNode;
};

export const features: Feature[] = [
  {
    title: "Marketplace apps",
    body: "Installation en un clic de stacks curatées — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
    tag: "→ .dockcontrol/apps/",
    icon: MarketplaceIcon,
  },
  {
    title: "Déploiements Git",
    body: "Connectez un repo GitHub / GitLab / Bitbucket, choisissez une branche, build + deploy déclenché par webhook.",
    tag: "→ HMAC sur le body brut",
    icon: GitDeployIcon,
  },
  {
    title: "SSL automatique",
    body: "Attachez un domaine, Caddy provisionne un certificat Let's Encrypt à la requête suivante. HTTPS sur port custom inclus.",
    tag: "→ via Caddy",
    icon: SslIcon,
  },
  {
    title: "Monitoring + alertes",
    body: "CPU / RAM / disque / réseau par serveur, rétention configurable, alertes par seuil.",
    tag: "→ SMTP · Discord · Slack",
    icon: MonitoringIcon,
  },
  {
    title: "Multi-serveurs",
    body: "Démarrez en LOCAL sur un VPS, passez en MULTI pour enrôler d'autres serveurs via un agent Go.",
    tag: "→ file long-poll, claim safe",
    icon: MultiServerIcon,
  },
  {
    title: "Authentification 2FA",
    body: "Enrôlement TOTP par utilisateur, imposé à la prochaine connexion, codes de récupération générés au setup.",
    tag: "→ TOTP + recovery codes",
    icon: TwoFaIcon,
  },
  {
    title: "Backups chiffrés",
    body: "Dumps Postgres / MySQL / fichiers chiffrés AES-256-GCM, vérifiés SHA-256 à la restauration. Planifiables, poussables vers S3 / R2 / B2.",
    tag: "→ clé BACKUP siloée",
    icon: BackupIcon,
  },
];

export type CompareRow = { k: string; us: string; them: string };

export const rows: CompareRow[] = [
  { k: "Hébergement", us: "Vos serveurs", them: "Cloud du vendeur" },
  { k: "Coût", us: "Votre VPS, prix fixe", them: "Facturé à l’usage" },
  { k: "Licence", us: "MIT, open source", them: "Propriétaire" },
  { k: "Lock-in", us: "Aucun", them: "Élevé" },
  { k: "BDD · mail · SSL", us: "Inclus", them: "Add-ons payants" },
  { k: "Données & secrets", us: "Chez vous, chiffrés", them: "Chez le vendeur" },
];

export type App = { g: string; n: string };

export const apps: App[] = [
  { g: "W", n: "WordPress" },
  { g: "G", n: "Ghost" },
  { g: "n", n: "n8n" },
  { g: "M", n: "MinIO" },
  { g: "P", n: "PostgreSQL" },
  { g: "R", n: "Redis" },
];

export const reqs: string[] = [
  "VPS Linux — Ubuntu 22.04+ ou Debian 12+ (autres distros : non testées).",
  "Docker Engine 24+ avec le plugin docker compose.",
  "2 Go de RAM minimum (4 Go recommandé une fois des apps déployées).",
  "Ports 80 et 443 ouverts sur Internet (Caddy + Let’s Encrypt HTTP-01).",
  "Ports 3000 (dashboard) et 4000 (API) joignables au premier boot.",
  "Une IPv4 publique (auto-détectée, surchargeable via PUBLIC_API_URL).",
];
