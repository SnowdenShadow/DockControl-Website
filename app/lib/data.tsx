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

/**
 * Icônes des 7 fonctionnalités, dans le MÊME ordre que dict.features.items.
 * Le texte est traduit (dictionnaires) ; les icônes ne le sont pas.
 */
export const featureIcons: ReactNode[] = [
  MarketplaceIcon,
  GitDeployIcon,
  SslIcon,
  MonitoringIcon,
  MultiServerIcon,
  TwoFaIcon,
  BackupIcon,
];

/** Apps de la marketplace — noms propres, non traduits. */
export type App = { g: string; n: string };

export const apps: App[] = [
  { g: "W", n: "WordPress" },
  { g: "G", n: "Ghost" },
  { g: "n", n: "n8n" },
  { g: "M", n: "MinIO" },
  { g: "P", n: "PostgreSQL" },
  { g: "R", n: "Redis" },
];
