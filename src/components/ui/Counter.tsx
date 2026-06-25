"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Cuenta animada con GSAP + ScrollTrigger. `value` numérico; `suffix` opcional.
 */
export default function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const obj = { n: 0 };

    const tween = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(obj.n)}${suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
