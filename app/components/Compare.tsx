import { MONO, HEAD, ACCENT } from "../lib/style";
import { rows } from "../lib/data";

export default function Compare() {
  return (
    <section
      id="compare"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 32px" }}
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
        // Comparatif
      </div>
      <h2
        style={{
          fontFamily: HEAD,
          fontWeight: 600,
          fontSize: 34,
          letterSpacing: "-.02em",
          margin: "0 0 36px",
          color: "#fbfcfa",
        }}
      >
        DockControl vs le PaaS managé
      </h2>
      <div
        style={{
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        <div className="dc-compare-scroll">
          <table
            className="dc-compare-table"
            style={{ borderCollapse: "collapse", borderSpacing: 0 }}
          >
            <thead>
              <tr
                style={{
                  background: "rgba(0,224,138,.04)",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    padding: "16px 20px",
                    fontFamily: MONO,
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#74776f",
                    background: "rgba(0,224,138,.04)",
                    borderBottom: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  CRITÈRE
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    padding: "16px 20px",
                    fontFamily: HEAD,
                    fontWeight: 600,
                    fontSize: 14,
                    color: ACCENT,
                    background: "rgba(0,224,138,.04)",
                    borderBottom: "1px solid rgba(255,255,255,.08)",
                    borderLeft: "1px solid rgba(255,255,255,.06)",
                  }}
                >
                  DockControl
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    padding: "16px 20px",
                    fontFamily: HEAD,
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#9b9e97",
                    background: "rgba(0,224,138,.04)",
                    borderBottom: "1px solid rgba(255,255,255,.08)",
                    borderLeft: "1px solid rgba(255,255,255,.06)",
                  }}
                >
                  Heroku / Vercel / Render
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k}>
                  <th
                    scope="row"
                    style={{
                      textAlign: "left",
                      fontWeight: 400,
                      padding: "15px 20px",
                      fontSize: 14,
                      color: "#cdcfc9",
                      borderBottom: "1px solid rgba(255,255,255,.05)",
                    }}
                  >
                    {r.k}
                  </th>
                  <td
                    style={{
                      padding: "15px 20px",
                      fontSize: 13.5,
                      color: "#e9eae7",
                      borderBottom: "1px solid rgba(255,255,255,.05)",
                      borderLeft: "1px solid rgba(255,255,255,.05)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ color: ACCENT, fontFamily: MONO }}
                      >
                        ✓
                      </span>
                      {r.us}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "15px 20px",
                      fontSize: 13.5,
                      color: "#85877f",
                      borderBottom: "1px solid rgba(255,255,255,.05)",
                      borderLeft: "1px solid rgba(255,255,255,.05)",
                    }}
                  >
                    {r.them}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
