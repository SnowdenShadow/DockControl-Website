import type { Dictionary } from "../types";

const ko: Dictionary = {
  meta: {
    title: "DockControl — VPS를 배포 플랫폼으로",
    description:
      "Heroku, Vercel, Render의 오픈소스 대안: 직접 운영하는 VPS에 설치하고 도메인을 연결해 SSH 없이 앱, 데이터베이스, SSL, 백업을 운영하세요.",
    ogDescription:
      "Heroku, Vercel, Render의 오픈소스 대안. 당신의 서버, 당신의 데이터, 락인 제로.",
  },

  nav: {
    features: "기능",
    compare: "비교",
    install: "설치",
  },

  hero: {
    badge: "오픈소스 · MIT 라이선스 · 셀프 호스팅",
    titleLine1: "당신의 VPS가",
    titleLine2: "배포 플랫폼이 됩니다.",
    lead: "DockControl은 Heroku, Vercel, Render의 오픈소스 대안입니다. 직접 보유한 하드웨어에 설치하고 도메인을 연결하면, 앱·데이터베이스·SSL·모니터링·백업을 단일 대시보드에서 운영할 수 있습니다 — 다시는 SSH를 꺼낼 필요 없이.",
    installLabel: "설치 · ROOT",
    installNote:
      "// 멱등성 인스톨러 — 언제든 다시 실행하세요, .env는 그대로 보존됩니다.",
    ctaGuide: "설치 가이드",
    ctaCode: "코드 살펴보기",
  },

  mockup: {
    statusAll: "전체 정상",
    nav: ["앱", "배포", "데이터베이스", "도메인", "모니터링", "백업"],
    live: "live",
    build: "build",
    cpuLabel: "CPU · 60분",
  },

  valueStrip: {
    replaces: "대체합니다",
    tagline: "→ 당신의 서버, 당신의 데이터, 락인 제로.",
  },

  features: {
    kicker: "// 기능",
    title: "PaaS가 주는 모든 것 — 당신의 인프라 위에서.",
    subtitle:
      "Git 배포부터 암호화 백업까지, SSL과 모니터링을 거쳐. 사용량 과금도, 깜짝 청구서도 없습니다.",
    items: [
      {
        title: "앱 마켓플레이스",
        body: "큐레이션된 스택을 원클릭 설치 — WordPress, Ghost, n8n, MinIO, Postgres, Redis…",
        tag: "→ .dockcontrol/apps/",
      },
      {
        title: "Git 배포",
        body: "GitHub / GitLab / Bitbucket 저장소를 연결하고 브랜치를 선택하면, 웹훅으로 빌드 + 배포가 트리거됩니다.",
        tag: "→ raw body에 HMAC",
      },
      {
        title: "자동 SSL",
        body: "도메인을 연결하면 다음 요청 시 Caddy가 Let's Encrypt 인증서를 발급합니다. 커스텀 포트의 HTTPS도 포함.",
        tag: "→ Caddy 경유",
      },
      {
        title: "모니터링 + 알림",
        body: "서버별 CPU / RAM / 디스크 / 네트워크, 설정 가능한 보존 기간, 임계값 알림.",
        tag: "→ SMTP · Discord · Slack",
      },
      {
        title: "멀티 서버",
        body: "VPS 한 대에서 LOCAL로 시작하고, MULTI로 전환해 Go 에이전트로 서버를 추가 등록하세요.",
        tag: "→ long-poll 큐, 안전한 claim",
      },
      {
        title: "2FA 인증",
        body: "사용자별 TOTP 등록, 다음 로그인 시 강제 적용, 설정 시 복구 코드 생성.",
        tag: "→ TOTP + 복구 코드",
      },
      {
        title: "암호화 백업",
        body: "Postgres / MySQL / 파일 덤프를 AES-256-GCM으로 암호화하고, 복원 시 SHA-256으로 검증합니다. 스케줄링 가능, S3 / R2 / B2로 전송 가능.",
        tag: "→ 격리된 BACKUP 키",
      },
    ],
  },

  openSource: {
    kicker: "100% 오픈소스",
    titleLine1: "MIT 라이선스.",
    titleLine2: "조건은 없습니다.",
    body: "사용하고, 포크하고, 상용 프로덕션에서 돌리세요. 코드는 완전히 공개되어 있고 감사 가능하며, 당신이 설정한 것 외에는 아무것도 전송하지 않습니다. 숨겨진 텔레메트리도, 잠긴 ‘Enterprise’ 등급도 없습니다.",
    badges: [
      "자유롭게 포크하고 재배포하세요",
      "감사 가능한 코드, 텔레메트리 제로",
      "라이선스 비용 없이, VPS 비용만",
    ],
  },

  compare: {
    kicker: "// 비교",
    title: "DockControl vs 매니지드 PaaS",
    colCriteria: "기준",
    colThem: "Heroku / Vercel / Render",
    rows: [
      { k: "호스팅", us: "당신의 서버", them: "벤더 클라우드" },
      { k: "비용", us: "당신의 VPS, 고정 가격", them: "사용량 기반 과금" },
      { k: "라이선스", us: "MIT, 오픈소스", them: "독점" },
      { k: "락인", us: "없음", them: "높음" },
      { k: "DB · 메일 · SSL", us: "포함", them: "유료 애드온" },
      { k: "데이터 & 시크릿", us: "당신 쪽에, 암호화", them: "벤더 쪽에" },
    ],
  },

  marketplace: {
    kicker: "// 마켓플레이스",
    title: "바로 실행 가능한 스택을 원클릭으로.",
    bodyBefore:
      "마켓플레이스의 모든 앱은 다음 경로에 Docker Compose로 생성됩니다 ",
    bodyAfter: " — 버전 관리 가능하고, 읽기 쉬우며, 100% 당신의 통제 아래.",
  },

  install: {
    reqsKicker: "// 요구사항",
    reqsTitle: "필요한 것",
    reqs: [
      "Linux VPS — Ubuntu 22.04+ 또는 Debian 12+ (다른 배포판: 미검증).",
      "docker compose 플러그인이 포함된 Docker Engine 24+.",
      "RAM 최소 2 GB (앱 배포 후에는 4 GB 권장).",
      "80번과 443번 포트가 인터넷에 개방 (Caddy + Let's Encrypt HTTP-01).",
      "최초 부팅 시 3000(대시보드)과 4000(API) 포트에 접근 가능.",
      "공인 IPv4 (자동 감지, PUBLIC_API_URL로 재정의 가능).",
    ],
    quickKicker: "// 빠른 설치",
    quickTitle: "세 줄이면, 바로 라이브",
    steps: [
      "새 Ubuntu/Debian VPS에 root로 접속.",
      "아래 설치 명령을 붙여넣기.",
      ":3000에서 대시보드를 열고, 도메인을 연결.",
    ],
  },

  contributing: {
    kicker: "// 기여하기",
    title: "PR을 환영합니다.",
    bodyBefore:
      "오타 수정보다 큰 변경에는 먼저 이슈를 열어주세요. ",
    bodyAfter:
      " 를 루트에서 실행하면 로컬 개발 루프가 시작됩니다 — API와 대시보드는 각각 독립적으로 핫 리로드됩니다.",
    ctaRepo: "저장소 보기",
    ctaInstall: "INSTALL.md 읽기",
  },

  footer: {
    tagline: "셀프 호스팅 PaaS · MIT",
  },

  copy: {
    idle: "복사",
    done: "복사됨 ✓",
    aria: "설치 명령 복사",
  },

  music: {
    on: "소리 켜짐",
    off: "소리 꺼짐",
  },

  notFound: {
    title: "이 페이지는 배포되지 않았습니다.",
    body: "요청한 URL이 존재하지 않거나 이동되었습니다. 대시보드로 돌아가거나 저장소를 살펴보세요.",
    terminal: "› status 404: not found",
    home: "홈으로 돌아가기",
    code: "코드 살펴보기",
  },

  langSwitcher: {
    label: "언어 변경",
  },

  skipToContent: "본문으로 건너뛰기",
};

export default ko;
