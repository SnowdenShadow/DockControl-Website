import { MONO, HEAD, ACCENT } from "../lib/style";
import { GitHubIcon } from "../lib/icons";
import { REPO_URL } from "../lib/data";
import type { Dictionary } from "../i18n/types";

export default function Contributing({ dict }: { dict: Dictionary }) {
  return (
    <section
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "60px clamp(20px, 5vw, 32px) 90px",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 18,
          padding: "clamp(34px, 6vw, 52px) clamp(22px, 4vw, 44px)",
          textAlign: "center",
          background:
            "radial-gradient(600px 280px at 50% 0%, rgba(0,224,138,.08), transparent 65%)",
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: ACCENT,
            marginBottom: 18,
          }}
        >
          {dict.contributing.kicker}
        </div>
        <h2
          style={{
            fontFamily: HEAD,
            fontWeight: 600,
            fontSize: "clamp(26px, 5vw, 36px)",
            letterSpacing: "-.02em",
            margin: "0 0 16px",
            color: "#fbfcfa",
          }}
        >
          {dict.contributing.title}
        </h2>
        <p
          style={{
            fontSize: 16.5,
            color: "#a9aba4",
            margin: "0 auto 30px",
            maxWidth: 560,
          }}
        >
          {dict.contributing.bodyBefore}
          <span style={{ fontFamily: MONO, color: "#cdcfc9" }}>
            pnpm install &amp;&amp; pnpm dev
          </span>
          {dict.contributing.bodyAfter}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hl-bright"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: ACCENT,
              color: "#04130d",
              fontWeight: 600,
              fontSize: 15,
              padding: "13px 24px",
              borderRadius: 10,
            }}
          >
            <GitHubIcon size={16} />
            {dict.contributing.ctaRepo}
          </a>
          <a
            href="#install"
            className="hl-border"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              color: "#e9eae7",
              fontWeight: 500,
              fontSize: 15,
              padding: "13px 24px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,.16)",
            }}
          >
            {dict.contributing.ctaInstall}
          </a>
        </div>
      </div>
    </section>
  );
}
