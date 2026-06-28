import { MONO, HEAD, ACCENT } from "../lib/style";
import { features } from "../lib/data";

export default function Features() {
  return (
    <section
      id="features"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "92px 32px 40px" }}
    >
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
        // Fonctionnalités
      </div>
      <h2
        style={{
          fontFamily: HEAD,
          fontWeight: 600,
          fontSize: 38,
          lineHeight: 1.1,
          letterSpacing: "-.02em",
          margin: "0 0 14px",
          maxWidth: 680,
          color: "#fbfcfa",
        }}
      >
        Tout ce qu&apos;un PaaS vous donne — sur votre propre infra.
      </h2>
      <p
        style={{
          fontSize: 17,
          color: "#9b9e97",
          margin: "0 0 48px",
          maxWidth: 600,
        }}
      >
        Du déploiement Git aux backups chiffrés, en passant par le SSL et le
        monitoring. Sans abonnement à l&apos;usage, sans facture surprise.
      </p>

      <div className="dc-features-grid">
        {features.map((f) => (
          <div
            key={f.title}
            className="hl-feature"
            style={{
              border: "1px solid rgba(255,255,255,.07)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,.018), rgba(255,255,255,0))",
              borderRadius: 14,
              padding: 22,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(0,224,138,.1)",
                border: "1px solid rgba(0,224,138,.18)",
                color: ACCENT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {f.icon}
            </div>
            <h3
              style={{
                fontFamily: HEAD,
                fontWeight: 600,
                fontSize: 16.5,
                margin: "4px 0 0",
                color: "#f3f4f1",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.6,
                color: "#969994",
                margin: 0,
              }}
            >
              {f.body}
            </p>
            <div
              style={{
                marginTop: "auto",
                paddingTop: 6,
                fontFamily: MONO,
                fontSize: 11,
                color: "#6e716a",
              }}
            >
              {f.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
