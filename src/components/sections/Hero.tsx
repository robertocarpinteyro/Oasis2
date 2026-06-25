"use client";

import { useEffect, useRef, useState } from "react";
import { heroIntro, media } from "@/lib/site";
import { useTypewriter } from "@/components/ui/useTypewriter";

const BRAND = "#0b6fdb"; // color principal

export default function Hero() {
  const { displayed, done } = useTypewriter(heroIntro.typed);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Las pills aparecen 400 ms tras la carga, sin esperar al typewriter.
  useEffect(() => {
    const t = setTimeout(() => setPillsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(heroIntro.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard no disponible */
    }
  };

  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden bg-[#0b6fdb]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ── Demo reel vertical (izquierda en desktop, fondo completo en móvil) ── */}
      <div className="absolute inset-0 z-0 md:right-auto md:w-[58%]">
        <Reel />
      </div>

      {/* ── Gradiente de fade hacia el azul sólido donde va el texto ── */}
      {/* Móvil: de abajo (sólido) hacia arriba. */}
      <div
        className="absolute inset-0 z-[1] md:hidden"
        style={{
          background:
            "linear-gradient(to top, #0b6fdb 0%, #0b6fdb 32%, rgba(11,111,219,0) 78%)",
        }}
      />
      {/* Desktop: de la derecha (sólido) hacia la izquierda. */}
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        style={{
          background:
            "linear-gradient(to left, #0b6fdb 0%, #0b6fdb 44%, rgba(11,111,219,0) 80%)",
        }}
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0">
        <div className="w-full max-w-xl self-start text-left md:self-end">
          {/* 1. Etiqueta intro borrosa */}
          <p
            className="pointer-events-none mb-5 select-none text-white sm:mb-6"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: 1.3,
              fontWeight: 400,
              filter: "blur(4px)",
            }}
          >
            {heroIntro.introLines[0]}
            <br />
            {heroIntro.introLines[1]}
          </p>

          {/* 2. Texto typewriter */}
          <p
            className="mb-5 text-white sm:mb-6"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: 1.35,
              fontWeight: 400,
              minHeight: 54,
            }}
          >
            {displayed}
            {!done && (
              <span
                className="ml-[2px] inline-block h-[1.1em] w-[2px] bg-white align-middle"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            )}
          </p>

          {/* 3. Pills de acción */}
          <div
            className="flex flex-wrap gap-y-1"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {heroIntro.pills.map((label) => (
              <button
                key={label}
                className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white px-4 py-[0.3em] text-[13px] text-[#0b6fdb] transition-colors duration-200 hover:bg-transparent hover:text-white sm:px-5 sm:text-[15px]"
              >
                {label}
              </button>
            ))}

            {/* Pill outline con email + copiar */}
            <button
              onClick={copyEmail}
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-[#0b6fdb] sm:gap-3 sm:px-5 sm:text-[15px]"
              aria-label={`Copiar correo ${heroIntro.contactEmail}`}
            >
              <span>
                {copied ? "¡Copiado!" : "Escríbenos: "}
                {!copied && (
                  <span className="underline underline-offset-1">
                    {heroIntro.contactEmail}
                  </span>
                )}
              </span>
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reel en autoplay loop; si no hay src muestra un placeholder de marca. */
function Reel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const src = media.heroReel.src;

  useEffect(() => {
    // Algunos navegadores requieren forzar play() tras montar.
    videoRef.current?.play().catch(() => {});
  }, []);

  if (!src) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0a5fbf]">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-3 text-center text-white/80">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7-11-7Z" fill="currentColor" />
              </svg>
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em]">
              Demo reel vertical
            </span>
            <span className="text-[10px] text-white/50">
              Reemplazar con Cloudinary
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      style={{ objectPosition: "center" }}
      src={src}
      poster={media.heroReel.poster || undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect
        x="3.2"
        y="3.2"
        width="6.3"
        height="6.3"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <rect
        x="1.3"
        y="1.3"
        width="6.3"
        height="6.3"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}
