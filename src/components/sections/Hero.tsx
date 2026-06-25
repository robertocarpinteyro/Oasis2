"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, media, site } from "@/lib/site";
import Media from "@/components/ui/Media";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mediaEl = mediaRef.current;
    if (!section || !mediaEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(mediaEl, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const line = {
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Media de fondo (placeholder → Cloudinary) */}
      <div ref={mediaRef} className="absolute inset-0 -z-10">
        <Media
          video={media.heroVideo.src}
          poster={media.heroVideo.poster}
          label={media.heroVideo.label}
          rounded="rounded-none"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      </div>

      <div className="shell pb-16 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-poppy" />
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[15ch] font-display text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-tight"
        >
          {hero.titleLines.map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                variants={line}
                className={`block ${i === 1 ? "text-gradient" : ""}`}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 max-w-xl text-base text-snow/65 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href={site.cta.href} className="pill pill-primary px-7 py-4 text-base">
            {site.cta.label}
          </a>
          <a href="#proyectos" className="pill pill-ghost px-7 py-4 text-base">
            Ver proyectos
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-snow/10 pt-8 sm:grid-cols-3"
        >
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl font-semibold">{s.value}</dt>
              <dd className="mt-1 text-sm text-snow/55">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
