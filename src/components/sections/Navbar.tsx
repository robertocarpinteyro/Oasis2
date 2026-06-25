"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="shell">
          <div
            className={`mt-4 flex items-center justify-between rounded-pill border px-4 py-2.5 transition-all duration-300 ${
              scrolled
                ? "border-snow/10 bg-ink/70 backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <a href="#top" className="flex items-center gap-2.5 pl-1">
              <Logo />
              <span className="font-display text-lg font-semibold leading-none">
                {site.short}
                <span className="text-poppy">.</span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {site.navlinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-pill px-4 py-2 text-sm text-snow/70 transition hover:bg-snow/5 hover:text-snow"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a href={site.cta.href} className="pill pill-light hidden sm:inline-flex">
                {site.cta.label}
              </a>
              <button
                onClick={() => setOpen(true)}
                className="pill pill-ghost md:hidden"
                aria-label="Abrir menú"
              >
                Menú
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/95 p-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold">
                {site.short}
                <span className="text-poppy">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="pill pill-ghost"
                aria-label="Cerrar menú"
              >
                Cerrar
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-2">
              {site.navlinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="border-b border-snow/10 py-4 font-display text-3xl font-medium"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <a
              href={site.cta.href}
              onClick={() => setOpen(false)}
              className="pill pill-primary mt-auto w-full"
            >
              {site.cta.label}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-mustard via-poppy to-pink">
      <span className="h-3.5 w-3.5 rounded-full bg-ink" />
    </span>
  );
}
