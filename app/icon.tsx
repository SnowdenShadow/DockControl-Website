import { ImageResponse } from "next/og";

// Favicon généré — le logo DockControl : carré arrondi vert avec liseré
// intérieur sombre, sur fond #08090a.
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090a",
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 96,
            background: "#00e08a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 150,
              height: 150,
              border: "32px solid #06231a",
              borderRadius: 40,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
