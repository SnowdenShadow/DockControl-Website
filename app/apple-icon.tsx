import { ImageResponse } from "next/og";

// Icône Apple touch (180×180). Même marque, mais le carré vert remplit le
// cadre (iOS applique son propre masque arrondi).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#00e08a",
        }}
      >
        <div
          style={{
            width: 78,
            height: 78,
            border: "17px solid #06231a",
            borderRadius: 21,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
