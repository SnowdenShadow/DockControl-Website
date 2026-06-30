"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  locales,
  localeMeta,
  isLocale,
  type Locale,
} from "../i18n/config";
import { MONO, ACCENT } from "../lib/style";

/**
 * Sélecteur de langue.
 *
 * Reconstruit l'URL courante en remplaçant le segment de locale, pose le
 * cookie de préférence, et navigue. Fermeture au clic extérieur / Échap.
 */
export default function LangSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const switchTo = (target: Locale) => {
    setOpen(false);
    if (target === locale) return;
    // Remplace le 1er segment (la locale) du chemin courant.
    const segments = (pathname || "/").split("/");
    if (isLocale(segments[1])) segments[1] = target;
    else segments.splice(1, 0, target);
    const next = segments.join("/") || `/${target}`;
    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    router.push(next);
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="hl-github"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontFamily: MONO,
          fontSize: 13,
          color: "#e9eae7",
          background: "transparent",
          border: "1px solid rgba(255,255,255,.14)",
          padding: "8px 12px",
          borderRadius: 9,
          cursor: "pointer",
        }}
      >
        {/* icône globe */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
        </svg>
        {localeMeta[locale].htmlLang.toUpperCase()}
        <span aria-hidden="true" style={{ fontSize: 9, opacity: 0.7 }}>
          ▼
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            zIndex: 60,
            margin: 0,
            padding: 6,
            listStyle: "none",
            minWidth: 168,
            maxHeight: 320,
            overflowY: "auto",
            background: "rgba(12,13,15,.98)",
            backdropFilter: "saturate(140%) blur(14px)",
            WebkitBackdropFilter: "saturate(140%) blur(14px)",
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: 11,
            boxShadow: "0 24px 60px -24px rgba(0,0,0,.9)",
          }}
        >
          {locales.map((l) => {
            const active = l === locale;
            return (
              <li key={l} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => switchTo(l)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: 10,
                    fontFamily: MONO,
                    fontSize: 13,
                    textAlign: "start",
                    color: active ? ACCENT : "#cdcfc9",
                    background: active ? "rgba(0,224,138,.1)" : "transparent",
                    border: "none",
                    padding: "8px 10px",
                    borderRadius: 7,
                    cursor: "pointer",
                  }}
                >
                  <span>{localeMeta[l].label}</span>
                  <span style={{ fontSize: 10, color: "#74776f" }}>
                    {localeMeta[l].htmlLang.toUpperCase()}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
