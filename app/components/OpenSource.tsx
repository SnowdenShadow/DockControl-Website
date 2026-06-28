import { HEAD, MONO, ACCENT } from "../lib/style";
import { GitHubIcon } from "../lib/icons";

const badges = [
  { mark: "MIT", text: "Forkez et redistribuez librement" },
  { mark: "{ }", text: "Code auditable, zéro télémétrie" },
  { mark: "$0", text: "Aucune licence, payez juste votre VPS" },
];

export default function OpenSource() {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "52px 32px" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(0,224,138,.2)",
          borderRadius: 18,
          background:
            "linear-gradient(120deg, rgba(0,224,138,.08), rgba(0,224,138,.015) 55%, transparent)",
          padding: "46px 44px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,224,138,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,224,138,.05) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "radial-gradient(400px 200px at 90% 0%, #000, transparent)",
            WebkitMaskImage:
              "radial-gradient(400px 200px at 90% 0%, #000, transparent)",
            pointerEvents: "none",
          }}
        />
        <div className="dc-os-grid" style={{ position: "relative" }}>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: MONO,
                fontSize: 12,
                color: ACCENT,
                marginBottom: 16,
              }}
            >
              <GitHubIcon size={16} />
              100% OPEN SOURCE
            </div>
            <h2
              style={{
                fontFamily: HEAD,
                fontWeight: 600,
                fontSize: 33,
                lineHeight: 1.12,
                letterSpacing: "-.02em",
                margin: "0 0 14px",
                color: "#fbfcfa",
              }}
            >
              Sous licence MIT.
              <br />
              Sans contrepartie.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#a9aba4",
                margin: 0,
                maxWidth: 480,
              }}
            >
              Utilisez-le, forkez-le, faites-le tourner en production
              commerciale. Le code est entièrement public, auditable, et
              n&apos;envoie rien d&apos;autre que ce que vous configurez. Pas de
              télémétrie cachée, pas de plan « Enterprise » verrouillé.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {badges.map((b) => (
              <div
                key={b.mark}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 11,
                  background: "rgba(8,9,10,.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontWeight: 600,
                    color: ACCENT,
                  }}
                >
                  {b.mark}
                </span>
                <span style={{ fontSize: 13.5, color: "#bcbeb8" }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
