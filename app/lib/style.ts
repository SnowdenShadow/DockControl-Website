/**
 * Shared style tokens.
 *
 * The fonts are loaded through next/font, which generates hashed @font-face
 * family names exposed via CSS variables (set on <html> in layout.tsx). The
 * inline styles therefore reference the variables rather than the literal
 * "IBM Plex …" names the original design used.
 *
 * ACCENT / HEAD mirror the design's `--accent` (#00e08a) and `--head`
 * (IBM Plex Sans, since the `monoHeadlines` prop defaults to false).
 */
export const MONO = "var(--font-plex-mono), 'IBM Plex Mono', monospace";
export const HEAD = "var(--font-plex-sans), 'IBM Plex Sans', sans-serif";
export const ACCENT = "#00e08a";
