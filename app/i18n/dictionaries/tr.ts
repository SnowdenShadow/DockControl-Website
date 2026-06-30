import type { Dictionary } from "../types";

const tr: Dictionary = {
  meta: {
    title: "DockControl — VPS'inizi bir dağıtım platformuna dönüştürün",
    description:
      "Heroku, Vercel ve Render'a açık kaynak alternatif: kendi VPS'inize kurun, bir alan adı yönlendirin; uygulamaları, veritabanlarını, SSL ve yedekleri SSH'siz yönetin.",
    ogDescription:
      "Heroku, Vercel ve Render'a açık kaynak alternatif. Sunucularınız, verileriniz, sıfır bağımlılık.",
  },

  nav: {
    features: "Özellikler",
    compare: "Karşılaştırma",
    install: "Kurulum",
  },

  hero: {
    badge: "Açık kaynak · MIT lisanslı · Kendi sunucunuzda",
    titleLine1: "VPS'iniz bir",
    titleLine2: "dağıtım platformuna dönüşür.",
    lead: "DockControl, Heroku, Vercel ve Render'a açık kaynak alternatiftir. Kendi donanımınıza kurun, bir alan adı yönlendirin ve uygulamalarınızı, veritabanlarınızı, SSL, izleme ve yedeklerinizi tek bir panodan yönetin — bir daha asla SSH'a dokunmadan.",
    installLabel: "KURULUM · ROOT",
    installNote:
      "// idempotent kurulum aracı — istediğiniz zaman yeniden çalıştırın, .env dosyasını korur.",
    ctaGuide: "Kurulum kılavuzu",
    ctaCode: "Kodu keşfedin",
  },

  mockup: {
    statusAll: "tümü çalışıyor",
    nav: ["Uygulamalar", "Dağıtımlar", "Veritabanları", "Alan Adları", "İzleme", "Yedekler"],
    live: "canlı",
    build: "derleme",
    cpuLabel: "CPU · 60 dk",
  },

  valueStrip: {
    replaces: "YERİNİ ALIR",
    tagline: "→ sunucularınız, verileriniz, sıfır bağımlılık.",
  },

  features: {
    kicker: "// Özellikler",
    title: "Bir PaaS'ın sunduğu her şey — kendi altyapınızda.",
    subtitle:
      "Git dağıtımlarından şifreli yedeklere, SSL ve izlemeden geçerek. Kullanıma dayalı faturalama yok, sürpriz fatura yok.",
    items: [
      {
        title: "Uygulama pazarı",
        body: "Özenle seçilmiş yığınların tek tıkla kurulumu — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Git dağıtımları",
        body: "Bir GitHub / GitLab / Bitbucket deposu bağlayın, bir dal seçin, webhook ile tetiklenen build + deploy.",
        tag: "→ ham gövdede HMAC",
      },
      {
        title: "Otomatik SSL",
        body: "Bir alan adı bağlayın, Caddy bir sonraki istekte Let's Encrypt sertifikası sağlar. Özel portlarda HTTPS dahildir.",
        tag: "→ Caddy ile",
      },
      {
        title: "İzleme + uyarılar",
        body: "Sunucu başına CPU / RAM / disk / ağ, yapılandırılabilir saklama süresi, eşik tabanlı uyarılar.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Çok sunuculu",
        body: "Tek bir VPS'te LOCAL ile başlayın, daha fazla sunucuyu bir Go ajanı aracılığıyla kaydetmek için MULTI'ye geçin.",
        tag: "→ long-poll kuyruğu, güvenli claim",
      },
      {
        title: "2FA kimlik doğrulama",
        body: "Kullanıcı başına TOTP kaydı, bir sonraki girişte zorunlu kılınır, kurulumda kurtarma kodları oluşturulur.",
        tag: "→ TOTP + kurtarma kodları",
      },
      {
        title: "Şifreli yedekler",
        body: "Postgres / MySQL / dosya dökümleri AES-256-GCM ile şifrelenir, geri yüklemede SHA-256 ile doğrulanır. Zamanlanabilir, S3 / R2 / B2'ye gönderilebilir.",
        tag: "→ izole BACKUP anahtarı",
      },
    ],
  },

  openSource: {
    kicker: "100% AÇIK KAYNAK",
    titleLine1: "MIT lisanslı.",
    titleLine2: "Hiçbir koşul yok.",
    body: "Kullanın, fork'layın, ticari üretimde çalıştırın. Kod tamamen herkese açık, denetlenebilir ve siz yapılandırmadığınız sürece hiçbir şey göndermez. Gizli telemetri yok, kilitli bir “Enterprise” katmanı yok.",
    badges: [
      "Özgürce fork'layın ve dağıtın",
      "Denetlenebilir kod, sıfır telemetri",
      "Lisans ücreti yok, yalnızca VPS'inizi ödeyin",
    ],
  },

  compare: {
    kicker: "// Karşılaştırma",
    title: "DockControl ile yönetilen PaaS",
    colCriteria: "KRİTER",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Barındırma", us: "Sunucularınız", them: "Sağlayıcı bulutu" },
      { k: "Maliyet", us: "VPS'iniz, sabit fiyat", them: "Kullanıma dayalı faturalama" },
      { k: "Lisans", us: "MIT, açık kaynak", them: "Tescilli" },
      { k: "Bağımlılık", us: "Yok", them: "Yüksek" },
      { k: "Veritabanı · mail · SSL", us: "Dahil", them: "Ücretli eklentiler" },
      { k: "Veri ve sırlar", us: "Sizde, şifreli", them: "Sağlayıcının elinde" },
    ],
  },

  marketplace: {
    kicker: "// Pazar",
    title: "Tek tıkla çalıştırmaya hazır yığınlar.",
    bodyBefore:
      "Her pazar uygulaması şu dizin altında Docker Compose olarak oluşturulur: ",
    bodyAfter: " — sürümlenebilir, okunabilir ve %100 sizin kontrolünüzde.",
  },

  install: {
    reqsKicker: "// Gereksinimler",
    reqsTitle: "İhtiyacınız olanlar",
    reqs: [
      "Linux VPS — Ubuntu 22.04+ veya Debian 12+ (diğer dağıtımlar: test edilmedi).",
      "docker compose eklentisiyle Docker Engine 24+.",
      "En az 2 GB RAM (uygulamalar dağıtıldığında 4 GB önerilir).",
      "80 ve 443 portları İnternet'e açık (Caddy + Let's Encrypt HTTP-01).",
      "İlk açılışta erişilebilir 3000 (pano) ve 4000 (API) portları.",
      "Genel bir IPv4 (otomatik algılanır, PUBLIC_API_URL ile geçersiz kılınabilir).",
    ],
    quickKicker: "// Hızlı kurulum",
    quickTitle: "Üç satır ve yayındasınız",
    steps: [
      "Yeni bir Ubuntu/Debian VPS'i, root olarak bağlı.",
      "Aşağıdaki kurulum komutunu yapıştırın.",
      "Panoyu :3000 üzerinde açın, bir alan adı yönlendirin.",
    ],
  },

  contributing: {
    kicker: "// Katkıda bulunma",
    title: "PR'lar memnuniyetle karşılanır.",
    bodyBefore:
      "Bir yazım hatasından büyük her değişiklikten önce bir issue açın. ",
    bodyAfter:
      " kök dizinden yerel bir geliştirme döngüsü için — API ve pano bağımsız olarak hot-reload yapar.",
    ctaRepo: "Depoyu görüntüle",
    ctaInstall: "INSTALL.md'yi oku",
  },

  footer: {
    tagline: "Kendi sunucunuzda PaaS · MIT",
  },

  copy: {
    idle: "kopyala",
    done: "kopyalandı ✓",
    aria: "Kurulum komutunu kopyala",
  },

  music: {
    on: "ses açık",
    off: "ses kapalı",
  },

  notFound: {
    title: "Bu sayfa dağıtılmadı.",
    body: "İstenen URL mevcut değil veya taşınmış. Panoya geri dönün ya da depoyu keşfedin.",
    terminal: "› status 404: not found",
    home: "Ana sayfaya dön",
    code: "Kodu keşfedin",
  },

  langSwitcher: {
    label: "Dili değiştir",
  },

  skipToContent: "İçeriğe geç",
};

export default tr;
