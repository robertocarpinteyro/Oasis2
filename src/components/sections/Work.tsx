"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Media from "@/components/ui/Media";

export default function Work() {
  return (
    <section id="proyectos" className="py-24 sm:py-32">
      <div className="shell">
        <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Trabajo seleccionado</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-[18ch] text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.02]">
                Proyectos que se ven como las grandes.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-snow/60">
              Una muestra del nivel de producción que entregamos mes a mes.
              Pasa el cursor para ver el detalle.
            </p>
          </Reveal>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.title} delay={(i % 3) * 0.06}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  category,
  year,
  poster,
  video,
}: (typeof projects)[number]) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-card border border-snow/10"
    >
      <Media
        video={video}
        src={poster}
        label={title}
        rounded="rounded-none"
        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay que aparece en hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="mb-2 inline-flex w-fit translate-y-2 rounded-pill bg-snow/10 px-3 py-1 text-xs text-snow/80 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {category}
        </span>
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-display text-xl font-semibold leading-tight">
            {title}
          </h3>
          <span className="text-sm text-snow/50">/ {year}</span>
        </div>
      </div>
    </motion.div>
  );
}
