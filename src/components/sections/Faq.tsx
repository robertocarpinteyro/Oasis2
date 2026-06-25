"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-none">
              FAQ
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-xs text-snow/60">
              Todo lo que necesitas saber antes de trabajar con nosotros.
            </p>
          </Reveal>
        </div>

        <ul className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 0.04}>
                <div className="card-surface overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-medium">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="shrink-0 text-2xl leading-none text-snow/60"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-snow/65">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
