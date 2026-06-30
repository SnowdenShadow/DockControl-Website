import { MONO, HEAD, ACCENT } from "../lib/style";
import { REPO_URL } from "../lib/data";
import type { Dictionary } from "../i18n/types";
import CopyButton from "./CopyButton";
import DashboardMockup from "./DashboardMockup";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <header id="top" style={{ position: "relative", overflow: "hidden" }}>
      {/* radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 420px at 78% -8%, rgba(0,224,138,.13), transparent 60%), radial-gradient(700px 500px at 8% 10%, rgba(0,224,138,.05), transparent 55%)",
          pointerEvents: "none",
        }}
      />
      {/* grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "linear-gradient(#000, transparent 78%)",
          WebkitMaskImage: "linear-gradient(#000, transparent 78%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="dc-hero-grid"
        style={{
          position: "relative",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(56px, 11vw, 84px) clamp(20px, 5vw, 32px) 64px",
        }}
      >
        {/* left column */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: ".04em",
              color: "#b8bbb4",
              border: "1px solid rgba(255,255,255,.1)",
              background: "rgba(255,255,255,.02)",
              padding: "6px 12px",
              borderRadius: 999,
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: ACCENT,
                boxShadow: `0 0 10px ${ACCENT}`,
                animation: "dcpulse 2.4s ease-in-out infinite",
              }}
            />
            {dict.hero.badge}
          </div>

          <h1
            style={{
              fontFamily: HEAD,
              fontWeight: 600,
              fontSize: "clamp(34px, 7vw, 53px)",
              lineHeight: 1.04,
              letterSpacing: "-.025em",
              margin: "0 0 22px",
              color: "#fbfcfa",
            }}
          >
            {dict.hero.titleLine1}
            <br />
            {dict.hero.titleLine2}
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.62,
              color: "#a9aba4",
              margin: "0 0 32px",
              maxWidth: 520,
            }}
          >
            {dict.hero.lead}
          </p>

          {/* install command */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,.1)",
              background: "#0c0d0f",
              borderRadius: 12,
              overflow: "hidden",
              maxWidth: 560,
              boxShadow: "0 18px 48px -22px rgba(0,0,0,.8)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "9px 14px",
                borderBottom: "1px solid rgba(255,255,255,.06)",
                background: "rgba(255,255,255,.015)",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  color: "#74776f",
                  letterSpacing: ".04em",
                }}
              >
                {dict.hero.installLabel}
              </span>
              <CopyButton dict={dict} />
            </div>
            <div
              style={{
                padding: "14px 16px",
                fontFamily: MONO,
                fontSize: 13,
                lineHeight: 1.7,
                color: "#dfe0db",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: ACCENT, userSelect: "none" }}>$ </span>
              curl -fsSL
              https://raw.githubusercontent.com/SnowdenShadow/Kryptalis/main/install.sh{" "}
              <span style={{ color: "#74776f" }}>|</span> sudo sh
            </div>
          </div>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 12,
              color: "#6e716a",
              margin: "12px 0 0",
            }}
          >
            {dict.hero.installNote}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 30,
            }}
          >
            <a
              href="#install"
              className="hl-bright"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: ACCENT,
                color: "#04130d",
                fontWeight: 600,
                fontSize: 15,
                padding: "13px 22px",
                borderRadius: 10,
                boxShadow:
                  "0 0 0 1px rgba(0,224,138,.3), 0 14px 30px -12px rgba(0,224,138,.55)",
              }}
            >
              {dict.hero.ctaGuide}
              <span style={{ fontFamily: MONO }}>→</span>
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hl-border"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                color: "#e9eae7",
                fontWeight: 500,
                fontSize: 15,
                padding: "13px 22px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,.16)",
              }}
            >
              {dict.hero.ctaCode}
            </a>
          </div>
        </div>

        {/* right column — dashboard mockup */}
        <DashboardMockup dict={dict} />
      </div>
    </header>
  );
}
