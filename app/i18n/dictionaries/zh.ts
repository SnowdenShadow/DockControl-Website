import type { Dictionary } from "../types";

const zh: Dictionary = {
  meta: {
    title: "DockControl — 让你的 VPS 变身部署平台",
    description:
      "Heroku、Vercel 与 Render 的开源替代方案：装到你自己的 VPS 上，指向一个域名，即可管理应用、数据库、SSL 与备份——全程无需 SSH。",
    ogDescription:
      "Heroku、Vercel 与 Render 的开源替代方案。你的服务器，你的数据，零锁定。",
  },

  nav: {
    features: "功能",
    compare: "对比",
    install: "安装",
  },

  hero: {
    badge: "开源 · MIT 许可 · 自托管",
    titleLine1: "让你的 VPS 变身",
    titleLine2: "部署平台。",
    lead: "DockControl 是 Heroku、Vercel 与 Render 的开源替代方案。把它装到你自己的硬件上，指向一个域名，从同一个仪表盘掌控你的应用、数据库、SSL、监控与备份——再也不用碰 SSH。",
    installLabel: "安装 · ROOT",
    installNote:
      "// 幂等安装器——随时可重跑，会保留 .env。",
    ctaGuide: "安装指南",
    ctaCode: "查看代码",
  },

  mockup: {
    statusAll: "全部正常运行",
    nav: ["应用", "部署", "数据库", "域名", "监控", "备份"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 分钟",
  },

  valueStrip: {
    replaces: "替代",
    tagline: "→ 你的服务器，你的数据，零锁定。",
  },

  features: {
    kicker: "// 功能",
    title: "PaaS 给你的一切——都在你自己的基础设施上。",
    subtitle:
      "从 Git 部署到加密备份，再到 SSL 与监控。没有按量计费，没有意外账单。",
    items: [
      {
        title: "应用市场",
        body: "一键安装精选技术栈——WordPress、Ghost、n8n、MinIO、Postgres、Redis……",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Git 部署",
        body: "连接 GitHub / GitLab / Bitbucket 仓库，选择分支，由 webhook 触发构建 + 部署。",
        tag: "→ 对原始 body 做 HMAC",
      },
      {
        title: "自动 SSL",
        body: "绑定一个域名，Caddy 会在下一次请求时签发 Let's Encrypt 证书。包含自定义端口上的 HTTPS。",
        tag: "→ 通过 Caddy",
      },
      {
        title: "监控 + 告警",
        body: "按服务器统计 CPU / RAM / 磁盘 / 网络，可配置保留期，按阈值告警。",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "多服务器",
        body: "先在单台 VPS 上以 LOCAL 模式起步，再切到 MULTI，通过 Go 代理纳管更多服务器。",
        tag: "→ 长轮询队列，安全认领",
      },
      {
        title: "2FA 认证",
        body: "按用户进行 TOTP 注册，下次登录时强制启用，设置时生成恢复码。",
        tag: "→ TOTP + 恢复码",
      },
      {
        title: "加密备份",
        body: "Postgres / MySQL / 文件转储以 AES-256-GCM 加密，恢复时用 SHA-256 校验。可定时，可推送到 S3 / R2 / B2。",
        tag: "→ 隔离的 BACKUP 密钥",
      },
    ],
  },

  openSource: {
    kicker: "100% 开源",
    titleLine1: "MIT 许可。",
    titleLine2: "毫无附加条件。",
    body: "用它、fork 它、放进商业生产环境运行。代码完全公开、可审计，除了你配置的内容之外什么都不会外发。没有隐藏的遥测，没有上锁的“企业版”。",
    badges: [
      "自由 fork 与再分发",
      "代码可审计，零遥测",
      "无许可费，只为你的 VPS 付费",
    ],
  },

  compare: {
    kicker: "// 对比",
    title: "DockControl 对比托管型 PaaS",
    colCriteria: "对比项",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "托管", us: "你的服务器", them: "厂商云" },
      { k: "成本", us: "你的 VPS，固定价格", them: "按量计费" },
      { k: "许可", us: "MIT，开源", them: "专有" },
      { k: "锁定", us: "无", them: "高" },
      { k: "数据库 · 邮件 · SSL", us: "已包含", them: "付费插件" },
      { k: "数据与密钥", us: "在你这边，加密保存", them: "在厂商那边" },
    ],
  },

  marketplace: {
    kicker: "// 应用市场",
    title: "开箱即用的技术栈，一键搞定。",
    bodyBefore:
      "市场里的每个应用都以 Docker Compose 形式生成于 ",
    bodyAfter: " ——可版本化、可读、100% 由你掌控。",
  },

  install: {
    reqsKicker: "// 前置条件",
    reqsTitle: "你需要准备",
    reqs: [
      "Linux VPS——Ubuntu 22.04+ 或 Debian 12+（其他发行版：未经测试）。",
      "Docker Engine 24+，带 docker compose 插件。",
      "至少 2 GB RAM（部署应用后建议 4 GB）。",
      "80 与 443 端口对公网开放（Caddy + Let's Encrypt HTTP-01）。",
      "首次启动时可访问 3000（仪表盘）与 4000（API）端口。",
      "一个公网 IPv4（自动探测，可通过 PUBLIC_API_URL 覆盖）。",
    ],
    quickKicker: "// 快速安装",
    quickTitle: "三行命令，立刻上线",
    steps: [
      "全新的 Ubuntu/Debian VPS，以 root 身份连接。",
      "粘贴下面的安装命令。",
      "在 :3000 打开仪表盘，指向一个域名。",
    ],
  },

  contributing: {
    kicker: "// 贡献",
    title: "欢迎提交 PR。",
    bodyBefore:
      "在做出任何比错别字更大的改动前，先开一个 issue。",
    bodyAfter:
      " 在根目录运行即可获得本地开发循环——API 与仪表盘各自独立热重载。",
    ctaRepo: "查看仓库",
    ctaInstall: "阅读 INSTALL.md",
  },

  footer: {
    tagline: "自托管 PaaS · MIT",
  },

  copy: {
    idle: "复制",
    done: "已复制 ✓",
    aria: "复制安装命令",
  },

  music: {
    on: "声音开",
    off: "声音关",
  },

  notFound: {
    title: "此页面尚未部署。",
    body: "请求的 URL 不存在或已迁移。返回仪表盘，或去探索仓库。",
    terminal: "› status 404: not found",
    home: "返回首页",
    code: "查看代码",
  },

  langSwitcher: {
    label: "切换语言",
  },

  skipToContent: "跳转到正文",
};

export default zh;
