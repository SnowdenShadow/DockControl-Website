import { MONO, HEAD } from "../lib/style";

const replaces = ["Heroku", "Vercel", "Render"];

export default function ValueStrip() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,255,255,.06)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "26px 32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "14px 40px",
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 12,
            color: "#6e716a",
            letterSpacing: ".04em",
          }}
        >
          REMPLACE
        </span>
        {replaces.map((name, i) => (
          <span key={name} style={{ display: "contents" }}>
            <span
              style={{
                fontFamily: HEAD,
                fontSize: 18,
                color: "#8d908a",
                fontWeight: 500,
              }}
            >
              {name}
            </span>
            {i < replaces.length - 1 && <span style={{ color: "#34372f" }}>/</span>}
          </span>
        ))}
        <span
          style={{
            marginLeft: "auto",
            fontFamily: MONO,
            fontSize: 12.5,
            color: "#9b9e97",
          }}
        >
          → vos serveurs, vos données, zéro lock-in.
        </span>
      </div>
    </section>
  );
}
