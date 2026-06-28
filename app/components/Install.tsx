import { MONO, HEAD, ACCENT } from "../lib/style";
import { reqs } from "../lib/data";

const steps = [
  <>VPS Ubuntu/Debian frais, connecté en root.</>,
  <>Collez la commande d&apos;installation ci-dessous.</>,
  <>
    Ouvrez le dashboard sur{" "}
    <span style={{ fontFamily: MONO, color: "#bcbeb8" }}>:3000</span>, pointez un
    domaine.
  </>,
];

export default function Install() {
  return (
    <section
      id="install"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 32px 40px" }}
    >
      <div className="dc-install-grid">
        {/* requirements */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 16,
            padding: 32,
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
            // Prérequis
          </div>
          <h2
            style={{
              fontFamily: HEAD,
              fontWeight: 600,
              fontSize: 24,
              margin: "0 0 22px",
              color: "#fbfcfa",
            }}
          >
            Ce qu&apos;il vous faut
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {reqs.map((q, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 13,
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(255,255,255,.05)",
                }}
              >
                <span
                  style={{
                    color: ACCENT,
                    fontFamily: MONO,
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  →
                </span>
                <span style={{ fontSize: 14, color: "#cdcfc9", lineHeight: 1.5 }}>
                  {q}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* install steps */}
        <div
          style={{
            border: "1px solid rgba(0,224,138,.2)",
            borderRadius: 16,
            padding: 32,
            background:
              "linear-gradient(180deg, rgba(0,224,138,.05), transparent 40%)",
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
            // Quick install
          </div>
          <h2
            style={{
              fontFamily: HEAD,
              fontWeight: 600,
              fontSize: 24,
              margin: "0 0 22px",
              color: "#fbfcfa",
            }}
          >
            Trois lignes, et c&apos;est en ligne
          </h2>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {steps.map((step, i) => (
              <li key={i} style={{ display: "flex", gap: 14 }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    border: "1px solid rgba(0,224,138,.4)",
                    color: ACCENT,
                    fontFamily: MONO,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 14, color: "#cdcfc9", lineHeight: 1.55 }}>
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <div
            style={{
              marginTop: 22,
              border: "1px solid rgba(255,255,255,.1)",
              background: "#0c0d0f",
              borderRadius: 11,
              padding: "14px 16px",
              fontFamily: MONO,
              fontSize: 12.5,
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
      </div>
    </section>
  );
}
