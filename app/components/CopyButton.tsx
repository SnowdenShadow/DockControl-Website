"use client";

import { useState, useRef, useEffect } from "react";
import { INSTALL_CMD } from "../lib/data";
import { MONO, ACCENT } from "../lib/style";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onCopy = () => {
    // Swallow both the sync (no clipboard API) and async (denied/insecure
    // origin) failure paths so a denied copy never logs an uncaught rejection.
    navigator.clipboard?.writeText(INSTALL_CMD).catch(() => {});
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copier la commande d'installation"
      className="hl-copy"
      style={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontFamily: MONO,
        fontSize: 11.5,
        color: ACCENT,
        background: "rgba(0,224,138,.08)",
        border: "1px solid rgba(0,224,138,.22)",
        padding: "4px 9px",
        borderRadius: 7,
        cursor: "pointer",
      }}
    >
      {copied ? "copié ✓" : "copier"}
    </button>
  );
}
