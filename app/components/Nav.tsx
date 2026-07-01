import { GitHubIcon } from "../lib/icons";
import { MONO, HEAD, ACCENT } from "../lib/style";
import { REPO_URL } from "../lib/data";
import type { Dictionary } from "../i18n/types";
import type { Locale } from "../i18n/config";
import LangSwitcher from "./LangSwitcher";

export default function Nav({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(140%) blur(14px)",
        WebkitBackdropFilter: "saturate(140%) blur(14px)",
        background: "rgba(8,9,10,.72)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 32px)",
          height: 64,
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 7,
              background: ACCENT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: 11,
                height: 11,
                border: "2px solid #06231a",
                borderRadius: 3,
                display: "block",
              }}
            />
          </span>
          <span
            style={{
              fontFamily: HEAD,
              fontWeight: 600,
              fontSize: 16.5,
              letterSpacing: "-.01em",
            }}
          >
            DockControl
          </span>
          <span
            className="dc-nav-badge"
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: "#7d8079",
              border: "1px solid rgba(255,255,255,.12)",
              padding: "2px 6px",
              borderRadius: 5,
              letterSpacing: ".06em",
            }}
          >
            PaaS
          </span>
        </a>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px, 3vw, 28px)",
          }}
        >
          <a
            href="#features"
            className="hl-nav dc-nav-text"
            style={{ fontSize: 14, color: "#a9aba6" }}
          >
            {dict.nav.features}
          </a>
          <a
            href="#compare"
            className="hl-nav dc-nav-text"
            style={{ fontSize: 14, color: "#a9aba6" }}
          >
            {dict.nav.compare}
          </a>
          <a
            href="#install"
            className="hl-nav dc-nav-text"
            style={{ fontSize: 14, color: "#a9aba6" }}
          >
            {dict.nav.install}
          </a>
          <LangSwitcher locale={locale} label={dict.langSwitcher.label} />
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hl-github"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: MONO,
              fontSize: 13,
              color: "#e9eae7",
              border: "1px solid rgba(255,255,255,.14)",
              padding: "8px 14px",
              borderRadius: 9,
            }}
          >
            <GitHubIcon size={15} />
            <span className="dc-nav-text">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
