import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mantis - Unified Security Control for macOS";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Logo/Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "rgba(34, 197, 94, 0.15)",
            marginBottom: 32,
            border: "2px solid rgba(34, 197, 94, 0.3)",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
            display: "flex",
          }}
        >
          Mantis
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "#22c55e",
            marginBottom: 24,
            display: "flex",
          }}
        >
          Unified Security Control for macOS
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.6)",
            maxWidth: 800,
            textAlign: "center",
            display: "flex",
          }}
        >
          See every connection. Control every layer.
        </div>

        {/* Terminal preview hint */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 24px",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: 8,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <span style={{ color: "#22c55e", fontSize: 18 }}>$</span>
          <span style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 18 }}>
            brew install mantiscli/tap/mantis
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
