import { MONO, HEAD, ACCENT } from "../lib/style";
import { REPO_URL } from "../lib/data";
import type { Dictionary } from "../i18n/types";

const links = [
  { label: "INSTALL.md", href: "#" },
  { label: "ARCHITECTURE.md", href: "#" },
  { label: "CONFIG.md", href: "#" },
  { label: "GitHub", href: REPO_URL },
];

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "34px clamp(20px, 5vw, 32px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 18,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: ACCENT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                border: "2px solid #06231a",
                borderRadius: 3,
              }}
            />
          </span>
          <span style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 14 }}>
            DockControl
          </span>
        </span>
        <span style={{ fontFamily: MONO, fontSize: 12, color: "#6e716a" }}>
          {dict.footer.tagline}
        </span>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            fontSize: 13,
            color: "#9b9e97",
          }}
        >
          {links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                className="hl-footer"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
