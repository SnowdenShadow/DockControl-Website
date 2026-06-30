import { MONO, HEAD, ACCENT } from "../lib/style";
import { apps } from "../lib/data";
import type { Dictionary } from "../i18n/types";

export default function Marketplace({ dict }: { dict: Dictionary }) {
  return (
    <section
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "60px clamp(20px, 5vw, 32px)",
      }}
    >
      <div className="dc-market-grid">
        <div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            {dict.marketplace.kicker}
          </div>
          <h2
            style={{
              fontFamily: HEAD,
              fontWeight: 600,
              fontSize: "clamp(25px, 5vw, 32px)",
              letterSpacing: "-.02em",
              margin: "0 0 14px",
              color: "#fbfcfa",
            }}
          >
            {dict.marketplace.title}
          </h2>
          <p style={{ fontSize: 16, color: "#9b9e97", margin: 0 }}>
            {dict.marketplace.bodyBefore}
            <span style={{ fontFamily: MONO, color: "#bcbeb8" }}>
              .dockcontrol/apps/
            </span>
            {dict.marketplace.bodyAfter}
          </p>
        </div>
        <div className="dc-market-apps">
          {apps.map((a) => (
            <div
              key={a.n}
              className="hl-app"
              style={{
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 12,
                padding: "18px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,.014)",
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: "#101113",
                  border: "1px solid rgba(255,255,255,.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: MONO,
                  fontWeight: 600,
                  fontSize: 16,
                  color: ACCENT,
                }}
              >
                {a.g}
              </span>
              <span style={{ fontSize: 13, color: "#cdcfc9", fontWeight: 500 }}>
                {a.n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
