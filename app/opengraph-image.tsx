import { ImageResponse } from "next/og";
import { SITE } from "./lib/site";
import { INSTALL_CMD } from "./lib/data";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image OpenGraph générée — reprend l'esthétique de la landing page :
// fond #08090a, glow vert, logo + wordmark, titre, commande d'installation.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090a",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* glow radial vert, coin haut-droit.
            Satori ignore le raccourci `inset` → on étire via top/left/right/bottom. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(900px 460px at 82% -10%, rgba(0,224,138,.20), transparent 60%)",
          }}
        />

        {/* en-tête : logo + wordmark + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "#00e08a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                border: "7px solid #06231a",
                borderRadius: 9,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: "#fbfcfa",
              letterSpacing: "-0.02em",
            }}
          >
            DockControl
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#7d8079",
              border: "1px solid rgba(255,255,255,.16)",
              borderRadius: 9,
              padding: "6px 14px",
            }}
          >
            PaaS
          </div>
        </div>

        {/* titre + sous-titre */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              color: "#fbfcfa",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Votre VPS devient une plateforme de déploiement.
          </div>
          <div style={{ fontSize: 30, color: "#a9aba4", maxWidth: 940 }}>
            {SITE.shortDescription}
          </div>
        </div>

        {/* commande d'installation réelle (source unique : INSTALL_CMD) +
            badge. Police réduite pour que la commande complète tienne sans
            troncature ni ellipse trompeuse. */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flex: 1,
              minWidth: 0,
              fontSize: 19,
              color: "#dfe0db",
              background: "#0c0d0f",
              border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 14,
              padding: "20px 24px",
            }}
          >
            <span style={{ color: "#00e08a" }}>$</span>
            <span>{INSTALL_CMD}</span>
          </div>
          <span
            style={{
              flexShrink: 0,
              fontSize: 21,
              color: "#00e08a",
              border: "1px solid rgba(0,224,138,.3)",
              borderRadius: 999,
              padding: "12px 22px",
            }}
          >
            Open source · MIT
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
