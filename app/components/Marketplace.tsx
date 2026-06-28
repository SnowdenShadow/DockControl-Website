import { MONO, HEAD, ACCENT } from "../lib/style";
import { apps } from "../lib/data";

export default function Marketplace() {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 32px" }}>
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
            // Marketplace
          </div>
          <h2
            style={{
              fontFamily: HEAD,
              fontWeight: 600,
              fontSize: 32,
              letterSpacing: "-.02em",
              margin: "0 0 14px",
              color: "#fbfcfa",
            }}
          >
            Des stacks prêtes en un clic.
          </h2>
          <p style={{ fontSize: 16, color: "#9b9e97", margin: 0 }}>
            Chaque app de la marketplace est générée en Docker&nbsp;Compose sous{" "}
            <span style={{ fontFamily: MONO, color: "#bcbeb8" }}>
              .dockcontrol/apps/
            </span>{" "}
            — versionnable, lisible, et 100% sous votre contrôle.
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
