"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="shell">
        <header className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Lo que hacemos</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.02]">
                Servicios
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-snow/60">
              Del reel diario al cineminuto institucional — todo con el mismo
              estándar premium.
            </p>
          </Reveal>
        </header>

        <div className="divide-y divide-snow/10 border-y border-snow/10">
          {services.map((s, i) => {
            const open = active === i;
            return (
              <Reveal key={s.index} delay={i * 0.04}>
                <button
                  onClick={() => setActive(open ? -1 : i)}
                  className="group flex w-full items-start gap-5 py-7 text-left sm:gap-10"
                  aria-expanded={open}
                >
                  <span className="pt-1 font-display text-sm text-snow/40">
                    {s.index}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`font-display text-2xl font-semibold transition-colors sm:text-4xl ${
                          open ? "text-snow" : "text-snow/70 group-hover:text-snow"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${
                          open
                            ? "border-poppy bg-poppy text-snow"
                            : "border-snow/20 text-snow/70 group-hover:border-snow/50"
                        }`}
                      >
                        <motion.span
                          animate={{ rotate: open ? 45 : 0 }}
                          className="text-xl leading-none"
                        >
                          +
                        </motion.span>
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5">
                            <p className="max-w-2xl text-snow/65">
                              {s.description}
                            </p>
                            <ul className="mt-5 flex flex-wrap gap-2">
                              {s.tags.map((t) => (
                                <li
                                  key={t}
                                  className="rounded-pill border border-snow/15 px-3 py-1.5 text-xs text-snow/70"
                                >
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
