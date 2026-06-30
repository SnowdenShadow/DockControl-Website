import type { Dictionary } from "../types";

const pl: Dictionary = {
  meta: {
    title: "DockControl — Zamień swój VPS w platformę wdrożeniową",
    description:
      "Otwartoźródłowa alternatywa dla Heroku, Vercel i Render: zainstaluj na własnym VPS, wskaż domenę i zarządzaj aplikacjami, bazami, SSL i backupami — bez SSH.",
    ogDescription:
      "Otwartoźródłowa alternatywa dla Heroku, Vercel i Render. Twoje serwery, twoje dane, zero uzależnienia.",
  },

  nav: {
    features: "Funkcje",
    compare: "Porównanie",
    install: "Instalacja",
  },

  hero: {
    badge: "Open source · Licencja MIT · Self-hosted",
    titleLine1: "Twój VPS staje się",
    titleLine2: "platformą wdrożeniową.",
    lead: "DockControl to otwartoźródłowa alternatywa dla Heroku, Vercel i Render. Zainstaluj go na własnym sprzęcie, wskaż domenę i steruj aplikacjami, bazami danych, SSL, monitoringiem i backupami z jednego pulpitu — bez sięgania po SSH.",
    installLabel: "INSTALACJA · ROOT",
    installNote:
      "// idempotentny instalator — uruchamiaj go ponownie kiedy chcesz, zachowuje .env.",
    ctaGuide: "Przewodnik instalacji",
    ctaCode: "Przejrzyj kod",
  },

  mockup: {
    statusAll: "wszystko sprawne",
    nav: ["Aplikacje", "Wdrożenia", "Bazy danych", "Domeny", "Monitoring", "Backupy"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60 min",
  },

  valueStrip: {
    replaces: "ZASTĘPUJE",
    tagline: "→ twoje serwery, twoje dane, zero uzależnienia.",
  },

  features: {
    kicker: "// Funkcje",
    title: "Wszystko, co daje PaaS — na własnej infrastrukturze.",
    subtitle:
      "Od wdrożeń z Gita po szyfrowane backupy, przez SSL i monitoring. Bez rozliczeń za zużycie, bez faktur z niespodzianką.",
    items: [
      {
        title: "Marketplace aplikacji",
        body: "Instalacja jednym kliknięciem wyselekcjonowanych stacków — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Wdrożenia z Gita",
        body: "Podłącz repo GitHub / GitLab / Bitbucket, wybierz gałąź, build + deploy wyzwalany przez webhook.",
        tag: "→ HMAC na surowym body",
      },
      {
        title: "Automatyczne SSL",
        body: "Podłącz domenę, a Caddy wystawi certyfikat Let's Encrypt przy następnym żądaniu. HTTPS na własnych portach w komplecie.",
        tag: "→ przez Caddy",
      },
      {
        title: "Monitoring + alerty",
        body: "CPU / RAM / dysk / sieć na serwer, konfigurowalna retencja, alerty progowe.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "Multi-serwer",
        body: "Zacznij w trybie LOCAL na jednym VPS, przełącz na MULTI, by dołączać kolejne serwery przez agenta w Go.",
        tag: "→ kolejka long-poll, bezpieczny claim",
      },
      {
        title: "Uwierzytelnianie 2FA",
        body: "Rejestracja TOTP per użytkownik, wymuszana przy następnym logowaniu, kody odzyskiwania generowane przy konfiguracji.",
        tag: "→ TOTP + kody odzyskiwania",
      },
      {
        title: "Szyfrowane backupy",
        body: "Zrzuty Postgres / MySQL / plików szyfrowane AES-256-GCM, weryfikowane SHA-256 przy odtwarzaniu. Planowalne, wypychane do S3 / R2 / B2.",
        tag: "→ odseparowany klucz BACKUP",
      },
    ],
  },

  openSource: {
    kicker: "100% OPEN SOURCE",
    titleLine1: "Na licencji MIT.",
    titleLine2: "Bez żadnych haczyków.",
    body: "Używaj, forkuj, uruchamiaj w komercyjnej produkcji. Kod jest w pełni publiczny, audytowalny i nie wysyła niczego poza tym, co skonfigurujesz. Bez ukrytej telemetrii, bez zablokowanego planu „Enterprise”.",
    badges: [
      "Forkuj i redystrybuuj dowolnie",
      "Audytowalny kod, zero telemetrii",
      "Bez opłat licencyjnych, płacisz tylko za VPS",
    ],
  },

  compare: {
    kicker: "// Porównanie",
    title: "DockControl kontra zarządzany PaaS",
    colCriteria: "KRYTERIUM",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "Hosting", us: "Twoje serwery", them: "Chmura dostawcy" },
      { k: "Koszt", us: "Twój VPS, stała cena", them: "Rozliczenie za zużycie" },
      { k: "Licencja", us: "MIT, open source", them: "Zamknięta" },
      { k: "Uzależnienie", us: "Brak", them: "Wysokie" },
      { k: "Baza · mail · SSL", us: "W komplecie", them: "Płatne dodatki" },
      { k: "Dane i sekrety", us: "U ciebie, szyfrowane", them: "Po stronie dostawcy" },
    ],
  },

  marketplace: {
    kicker: "// Marketplace",
    title: "Gotowe do uruchomienia stacki w jednym kliknięciu.",
    bodyBefore:
      "Każda aplikacja z marketplace jest generowana jako Docker Compose w ",
    bodyAfter: " — wersjonowalna, czytelna i w 100% pod twoją kontrolą.",
  },

  install: {
    reqsKicker: "// Wymagania",
    reqsTitle: "Czego potrzebujesz",
    reqs: [
      "VPS z Linuksem — Ubuntu 22.04+ lub Debian 12+ (inne dystrybucje: nietestowane).",
      "Docker Engine 24+ z wtyczką docker compose.",
      "Minimum 2 GB RAM (4 GB zalecane po wdrożeniu aplikacji).",
      "Porty 80 i 443 otwarte na Internet (Caddy + Let's Encrypt HTTP-01).",
      "Porty 3000 (pulpit) i 4000 (API) osiągalne przy pierwszym uruchomieniu.",
      "Publiczne IPv4 (wykrywane automatycznie, nadpisywalne przez PUBLIC_API_URL).",
    ],
    quickKicker: "// Szybka instalacja",
    quickTitle: "Trzy linie i jesteś online",
    steps: [
      "Świeży VPS Ubuntu/Debian, połączony jako root.",
      "Wklej poniższą komendę instalacyjną.",
      "Otwórz pulpit na :3000, wskaż domenę.",
    ],
  },

  contributing: {
    kicker: "// Współtworzenie",
    title: "PR-y mile widziane.",
    bodyBefore:
      "Otwórz issue przed każdą zmianą większą niż literówka. ",
    bodyAfter:
      " z katalogu głównego dla lokalnej pętli dev — API i pulpit przeładowują się na żywo niezależnie.",
    ctaRepo: "Zobacz repo",
    ctaInstall: "Przeczytaj INSTALL.md",
  },

  footer: {
    tagline: "Self-hosted PaaS · MIT",
  },

  copy: {
    idle: "kopiuj",
    done: "skopiowano ✓",
    aria: "Skopiuj komendę instalacyjną",
  },

  music: {
    on: "dźwięk wł.",
    off: "dźwięk wył.",
  },

  notFound: {
    title: "Ta strona nie jest wdrożona.",
    body: "Żądany adres URL nie istnieje lub został przeniesiony. Wróć do pulpitu albo przejrzyj repo.",
    terminal: "› status 404: not found",
    home: "Powrót do strony głównej",
    code: "Przejrzyj kod",
  },

  langSwitcher: {
    label: "Zmień język",
  },

  skipToContent: "Przejdź do treści",
};

export default pl;
