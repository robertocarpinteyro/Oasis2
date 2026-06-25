"use client";

import { useEffect, useState } from "react";

/**
 * Revela el texto carácter por carácter tras un retraso inicial.
 * @param text   Texto completo a escribir.
 * @param speed  ms por carácter (default 38).
 * @param startDelay  ms antes de empezar (default 600).
 */
export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    // Respeta a quien prefiere menos movimiento: muestra todo de una.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
