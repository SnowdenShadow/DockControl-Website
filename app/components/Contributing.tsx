import { MONO, HEAD, ACCENT } from "../lib/style";
import { GitHubIcon } from "../lib/icons";
import { REPO_URL } from "../lib/data";

export default function Contributing() {
  return (
    <section
      style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 32px 90px" }}
    >
      <div
        style={{
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 18,
          padding: "52px 44px",
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
          // Contribuer
        </div>
        <h2
          style={{
            fontFamily: HEAD,
            fontWeight: 600,
            fontSize: 36,
            letterSpacing: "-.02em",
            margin: "0 0 16px",
            color: "#fbfcfa",
          }}
        >
          Les PRs sont les bienvenues.
        </h2>
        <p
          style={{
            fontSize: 16.5,
            color: "#a9aba4",
            margin: "0 auto 30px",
            maxWidth: 560,
          }}
        >
          Ouvrez une issue avant tout changement plus gros qu&apos;une typo.{" "}
          <span style={{ fontFamily: MONO, color: "#cdcfc9" }}>
            pnpm install &amp;&amp; pnpm dev
          </span>{" "}
          depuis la racine pour une boucle de dev locale — l&apos;API et le
          dashboard hot-reload indépendamment.
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
            Voir le dépôt
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
            Lire INSTALL.md
          </a>
        </div>
      </div>
    </section>
  );
}
