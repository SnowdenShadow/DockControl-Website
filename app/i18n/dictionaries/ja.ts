import type { Dictionary } from "../types";

const ja: Dictionary = {
  meta: {
    title: "DockControl — あなたのVPSをデプロイプラットフォームに",
    description:
      "Heroku、Vercel、Renderのオープンソース代替。自分のVPSにインストールし、ドメインを向け、SSHなしでアプリ・データベース・SSL・バックアップを運用できます。",
    ogDescription:
      "Heroku、Vercel、Renderのオープンソース代替。あなたのサーバー、あなたのデータ、ロックインゼロ。",
  },

  nav: {
    features: "機能",
    compare: "比較",
    install: "インストール",
  },

  hero: {
    badge: "オープンソース · MITライセンス · セルフホスト",
    titleLine1: "あなたのVPSが",
    titleLine2: "デプロイプラットフォームに。",
    lead: "DockControlは、Heroku、Vercel、Renderのオープンソース代替です。自分のハードウェアにインストールし、ドメインを向ければ、アプリ・データベース・SSL・モニタリング・バックアップを単一のダッシュボードから操作できます — もうSSHに触れる必要はありません。",
    installLabel: "インストール · ROOT",
    installNote:
      "// 冪等なインストーラー — いつでも再実行可能、.env は保持されます。",
    ctaGuide: "インストールガイド",
    ctaCode: "コードを見る",
  },

  mockup: {
    statusAll: "すべて稼働中",
    nav: ["アプリ", "デプロイ", "データベース", "ドメイン", "モニタリング", "バックアップ"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "置き換える対象",
    tagline: "→ あなたのサーバー、あなたのデータ、ロックインゼロ。",
  },

  features: {
    kicker: "// 機能",
    title: "PaaSが提供するすべてを — 自分のインフラ上で。",
    subtitle:
      "Gitデプロイから暗号化バックアップまで、SSLとモニタリングを含めて。従量課金なし、想定外の請求なし。",
    items: [
      {
        title: "アプリマーケットプレイス",
        body: "厳選されたスタックをワンクリックでインストール — WordPress、Ghost、n8n、MinIO、Postgres、Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Gitデプロイ",
        body: "GitHub / GitLab / Bitbucket のリポジトリを接続し、ブランチを選択。webhookでビルドとデプロイをトリガー。",
        tag: "→ rawボディにHMAC",
      },
      {
        title: "自動SSL",
        body: "ドメインを紐付ければ、次のリクエスト時にCaddyがLet's Encrypt証明書をプロビジョニング。カスタムポートでのHTTPSも対応。",
        tag: "→ Caddy経由",
      },
      {
        title: "モニタリング + アラート",
        body: "サーバーごとのCPU / RAM / ディスク / ネットワーク、保持期間を設定可能、しきい値アラート付き。",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "マルチサーバー",
        body: "1台のVPSでLOCALモードから始め、MULTIに切り替えてGoエージェント経由で他のサーバーを登録。",
        tag: "→ long-pollキュー、安全なclaim",
      },
      {
        title: "2FA認証",
        body: "ユーザーごとのTOTP登録、次回ログイン時に強制適用、セットアップ時にリカバリーコードを生成。",
        tag: "→ TOTP + リカバリーコード",
      },
      {
        title: "暗号化バックアップ",
        body: "Postgres / MySQL / ファイルのダンプをAES-256-GCMで暗号化、復元時にSHA-256で検証。スケジュール可能、S3 / R2 / B2へプッシュ可能。",
        tag: "→ 隔離されたBACKUPキー",
      },
    ],
  },

  openSource: {
    kicker: "100% オープンソース",
    titleLine1: "MITライセンス。",
    titleLine2: "条件は一切なし。",
    body: "使う、フォークする、商用本番環境で動かす — 自由です。コードは完全に公開され、監査可能で、設定した以外のものは一切送信しません。隠れたテレメトリも、ロックされた「Enterprise」プランもありません。",
    badges: [
      "自由にフォーク・再配布",
      "監査可能なコード、テレメトリゼロ",
      "ライセンス料なし、VPS代だけ",
    ],
  },

  compare: {
    kicker: "// 比較",
    title: "DockControl とマネージドPaaSの比較",
    colCriteria: "基準",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "ホスティング", us: "あなたのサーバー", them: "ベンダーのクラウド" },
      { k: "コスト", us: "あなたのVPS、固定料金", them: "従量課金" },
      { k: "ライセンス", us: "MIT、オープンソース", them: "プロプライエタリ" },
      { k: "ロックイン", us: "なし", them: "高い" },
      { k: "DB · メール · SSL", us: "込み", them: "有料アドオン" },
      { k: "データと機密情報", us: "あなたの側で暗号化", them: "ベンダーの側" },
    ],
  },

  marketplace: {
    kicker: "// マーケットプレイス",
    title: "すぐ動くスタックをワンクリックで。",
    bodyBefore:
      "マーケットプレイスの各アプリは、以下の場所にDocker Composeとして生成されます ",
    bodyAfter: " — バージョン管理でき、読みやすく、100%あなたの管理下に。",
  },

  install: {
    reqsKicker: "// 要件",
    reqsTitle: "必要なもの",
    reqs: [
      "Linux VPS — Ubuntu 22.04+ または Debian 12+（その他のディストロ：未検証）。",
      "docker compose プラグイン付きの Docker Engine 24+。",
      "最低2 GBのRAM（アプリをデプロイ後は4 GB推奨）。",
      "ポート80と443がインターネットに開放されていること（Caddy + Let's Encrypt HTTP-01）。",
      "初回起動時にポート3000（ダッシュボード）と4000（API）に到達できること。",
      "パブリックなIPv4（自動検出、PUBLIC_API_URL で上書き可能）。",
    ],
    quickKicker: "// クイックインストール",
    quickTitle: "3行で、すぐ公開",
    steps: [
      "まっさらなUbuntu/Debian VPSにrootで接続。",
      "下のインストールコマンドを貼り付け。",
      ":3000 でダッシュボードを開き、ドメインを向ける。",
    ],
  },

  contributing: {
    kicker: "// コントリビュート",
    title: "PRを歓迎します。",
    bodyBefore:
      "タイポより大きな変更は、まずissueを立ててください。 ",
    bodyAfter:
      " をルートで実行すればローカル開発ループに入れます — APIとダッシュボードはそれぞれ独立してホットリロードします。",
    ctaRepo: "リポジトリを見る",
    ctaInstall: "INSTALL.md を読む",
  },

  footer: {
    tagline: "セルフホストPaaS · MIT",
  },

  copy: {
    idle: "コピー",
    done: "コピー済み ✓",
    aria: "インストールコマンドをコピー",
  },

  music: {
    on: "サウンドON",
    off: "サウンドOFF",
  },

  notFound: {
    title: "このページはデプロイされていません。",
    body: "リクエストされたURLは存在しないか、移動されました。ダッシュボードに戻るか、リポジトリを見てみてください。",
    terminal: "› status 404: not found",
    home: "ホームに戻る",
    code: "コードを見る",
  },

  langSwitcher: {
    label: "言語を変更",
  },

  skipToContent: "コンテンツへスキップ",
};

export default ja;
