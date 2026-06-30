"use client";

import { useEffect, useRef, useState } from "react";
import { ACCENT } from "../lib/style";
import type { Dictionary } from "../i18n/types";

/**
 * Musique de fond — démarrage le plus automatique possible.
 *
 * Aucun voile (donc aucun impact SEO : pas d'interstitiel, le contenu n'est
 * jamais couvert). On tente la lecture dès le montage ; si le navigateur la
 * bloque (cas d'un visiteur neuf), on redémarre au TOUT PREMIER geste réel
 * (clic, touche, tap) — seule chose qui débloque l'audio. Sur une landing,
 * ça part dans la première seconde. Un bouton discret permet de couper.
 */
const SRC = "/music/track.mp3";
const TARGET_VOLUME = 0.5;
const FADE_MS = 1200;

export default function BackgroundMusic({
  dict,
  src = SRC,
}: {
  dict: Dictionary;
  src?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | undefined>(undefined);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const audio = el; // capture non-null pour les closures
    audio.volume = TARGET_VOLUME;
    setReady(true);

    // Monte le volume de 0 à TARGET_VOLUME pour un démarrage en douceur.
    const fadeIn = () => {
      window.clearInterval(fadeRef.current);
      const steps = 24;
      let i = 0;
      audio.volume = 0;
      fadeRef.current = window.setInterval(() => {
        i += 1;
        audio.volume = Math.min(TARGET_VOLUME, (i / steps) * TARGET_VOLUME);
        if (i >= steps) window.clearInterval(fadeRef.current);
      }, FADE_MS / steps);
    };

    // Seuls les vrais gestes débloquent l'audio (clic / touche / tap).
    // mousemove et scroll N'EN FONT PAS PARTIE.
    const gestures: (keyof WindowEventMap)[] = [
      "pointerdown",
      "click",
      "keydown",
      "touchstart",
    ];

    const onVisible = () => {
      if (document.visibilityState === "visible") start();
    };

    function cleanup() {
      gestures.forEach((e) => window.removeEventListener(e, start));
      audio.removeEventListener("canplaythrough", start);
      document.removeEventListener("visibilitychange", onVisible);
    }

    function start() {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          fadeIn();
          cleanup(); // démarré : on retire les réessais
        })
        .catch(() => {
          /* pas encore autorisé — on retentera au prochain geste */
        });
    }

    // Essai immédiat (réussit si le domaine est déjà débloqué), puis on arme
    // les réessais sur tout ce qui peut autoriser la lecture.
    start();
    gestures.forEach((e) =>
      window.addEventListener(e, start, { passive: true }),
    );
    audio.addEventListener("canplaythrough", start);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      window.clearInterval(fadeRef.current);
      cleanup();
    };
  }, [src]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      {ready && (
        <button
          type="button"
          onClick={toggle}
          // L'action décrit ce que fait le clic : couper si ça joue, lancer sinon.
          aria-label={playing ? dict.music.off : dict.music.on}
          aria-pressed={playing}
          title={playing ? dict.music.off : dict.music.on}
          style={{
            position: "fixed",
            insetInlineEnd: 18,
            bottom: 18,
            zIndex: 80,
            width: 42,
            height: 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: playing ? ACCENT : "#a9aba4",
            background: "rgba(8,9,10,.72)",
            backdropFilter: "saturate(140%) blur(14px)",
            WebkitBackdropFilter: "saturate(140%) blur(14px)",
            border: `1px solid ${
              playing ? "rgba(0,224,138,.4)" : "rgba(255,255,255,.14)"
            }`,
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: playing
              ? "0 0 0 3px rgba(0,224,138,.08), 0 8px 24px -10px rgba(0,224,138,.4)"
              : "0 8px 24px -12px rgba(0,0,0,.6)",
            transition: "color .2s ease, border-color .2s ease, box-shadow .2s ease",
          }}
        >
          {playing ? (
            // Égaliseur animé : 4 barres qui « dansent ».
            <span
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                height: 16,
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 2.5,
                    height: "100%",
                    background: "currentColor",
                    borderRadius: 2,
                    transformOrigin: "center",
                    animation: `dcbar 0.9s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </span>
          ) : (
            // Haut-parleur barré (muet).
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11 5 6 9H3v6h3l5 4V5z" />
              <line x1="22" y1="9" x2="16" y2="15" />
              <line x1="16" y1="9" x2="22" y2="15" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
