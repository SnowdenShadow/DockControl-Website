import { MONO, HEAD, ACCENT } from "../lib/style";

const navItems = [
  { label: "Apps", active: true },
  { label: "Déploiements", active: false },
  { label: "Bases", active: false },
  { label: "Domaines", active: false },
  { label: "Monitoring", active: false },
  { label: "Backups", active: false },
];

const bars = [42, 60, 38, 72, 55, 48, 80, 34, 50, 66];

export default function DashboardMockup() {
  return (
    // Purely decorative product illustration — hidden from assistive tech so
    // the fake dashboard labels aren't announced as real content.
    <div className="dc-mockup" aria-hidden="true" style={{ minWidth: 0 }}>
      <div
        style={{
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 14,
          overflow: "hidden",
          background: "#0c0d0f",
          boxShadow:
            "0 40px 90px -30px rgba(0,0,0,.9), 0 0 0 1px rgba(0,224,138,.06)",
        }}
      >
        {/* titlebar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 14px",
            borderBottom: "1px solid rgba(255,255,255,.06)",
            background: "rgba(255,255,255,.02)",
          }}
        >
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
          <span
            style={{
              marginLeft: 12,
              fontFamily: MONO,
              fontSize: 11,
              color: "#74776f",
              background: "rgba(255,255,255,.04)",
              padding: "3px 10px",
              borderRadius: 6,
            }}
          >
            dashboard.votredomaine.io
          </span>
          <span
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: MONO,
              fontSize: 10.5,
              color: ACCENT,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: ACCENT,
                boxShadow: `0 0 8px ${ACCENT}`,
              }}
            />
            LOCAL
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "128px 1fr" }}>
          {/* sidebar */}
          <div
            style={{
              borderRight: "1px solid rgba(255,255,255,.06)",
              padding: "14px 10px",
              background: "rgba(255,255,255,.012)",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 9px",
                  borderRadius: 7,
                  background: item.active ? "rgba(0,224,138,.1)" : undefined,
                  color: item.active ? ACCENT : "#9b9e97",
                  fontSize: 12,
                  fontWeight: item.active ? 500 : 400,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 2,
                    background: item.active ? ACCENT : "#3a3d39",
                  }}
                />
                {item.label}
              </div>
            ))}
          </div>

          {/* main */}
          <div style={{ padding: 16, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <span style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 14 }}>Apps</span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  color: ACCENT,
                  background: "rgba(0,224,138,.08)",
                  border: "1px solid rgba(0,224,138,.2)",
                  padding: "3px 8px",
                  borderRadius: 6,
                }}
              >
                tout opérationnel
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {/* app row 1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: 10,
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: 9,
                  background: "rgba(255,255,255,.015)",
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: "rgba(0,224,138,.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: MONO,
                    fontSize: 11,
                    color: ACCENT,
                  }}
                >
                  G
                </span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>ghost-blog</div>
                  <div style={{ fontFamily: MONO, fontSize: 10, color: "#74776f" }}>
                    blog.votredomaine.io
                  </div>
                </div>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontFamily: MONO,
                    fontSize: 10,
                    color: ACCENT,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT }} />
                  live
                </span>
              </div>

              {/* app row 2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: 10,
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: 9,
                  background: "rgba(255,255,255,.015)",
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: "rgba(0,224,138,.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: MONO,
                    fontSize: 11,
                    color: ACCENT,
                  }}
                >
                  n
                </span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>n8n-automations</div>
                  <div style={{ fontFamily: MONO, fontSize: 10, color: "#74776f" }}>
                    build · deploy via webhook
                  </div>
                </div>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontFamily: MONO,
                    fontSize: 10,
                    color: "#febc2e",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#febc2e" }} />
                  build
                </span>
              </div>
            </div>

            {/* mini monitor */}
            <div
              style={{
                marginTop: 12,
                padding: 12,
                border: "1px solid rgba(255,255,255,.06)",
                borderRadius: 9,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 9,
                  fontFamily: MONO,
                  fontSize: 10,
                  color: "#74776f",
                }}
              >
                <span>CPU · 60 min</span>
                <span style={{ color: ACCENT }}>23%</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 38 }}>
                {bars.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background:
                        h === 80
                          ? ACCENT
                          : h >= 72
                            ? "rgba(0,224,138,.45)"
                            : "rgba(0,224,138,.3)",
                      borderRadius: 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
