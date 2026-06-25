"use client";

import { useState } from "react";
import { contact, site } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <footer id="contacto" className="bg-snow text-ink">
      <div className="shell py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Lado izquierdo */}
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(3.5rem,12vw,9rem)] font-semibold leading-[0.9]">
                {contact.title[0]}
                <br />
                <span className="text-gradient">{contact.title[1]}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-md text-lg text-ink/60">
                {contact.subtitle}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2">
              {contact.promises.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <h3 className="font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">{p.desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <a
                href={`mailto:${site.email}`}
                className="mt-10 inline-block font-display text-xl font-medium underline decoration-poppy decoration-2 underline-offset-4"
              >
                {site.email}
              </a>
            </Reveal>
          </div>

          {/* Formulario */}
          <Reveal delay={0.1} className="rounded-card bg-ink p-8 text-snow sm:p-10">
            <h3 className="font-display text-2xl font-semibold">
              Cuéntanos tu proyecto
            </h3>

            {sent ? (
              <div className="mt-8 rounded-card border border-emerald/40 bg-emerald/10 p-6">
                <p className="font-display text-lg">¡Gracias! 🎬</p>
                <p className="mt-2 text-sm text-snow/70">
                  Recibimos tu mensaje. Te contactamos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form
                className="mt-8 flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label="¿Cómo te llamas?*" name="nombre" placeholder="Tu nombre" />
                <Field
                  label="E-mail*"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                />
                <Field
                  label="Marca / empresa"
                  name="marca"
                  placeholder="Nombre de tu marca"
                />
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-snow/60" htmlFor="mensaje">
                    Cuéntanos tu proyecto*
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="Qué necesitas, objetivos, tiempos…"
                    className="rounded-2xl border border-snow/10 bg-snow/5 px-4 py-3 text-sm outline-none transition placeholder:text-snow/30 focus:border-poppy"
                  />
                </div>
                <button type="submit" className="pill pill-primary w-full py-4 text-base">
                  Enviar mensaje
                </button>
                <p className="text-xs text-snow/40">
                  Al enviar aceptas nuestro Aviso de Privacidad.
                </p>
              </form>
            )}
          </Reveal>
        </div>

        {/* Pie */}
        <div className="mt-20 flex flex-col gap-8 border-t border-ink/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {contact.socials.map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-ink/60 transition hover:text-ink"
              >
                {s}
              </a>
            ))}
          </div>
          <p className="text-sm text-ink/45">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-snow/60" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={label.includes("*")}
        placeholder={placeholder}
        className="rounded-2xl border border-snow/10 bg-snow/5 px-4 py-3 text-sm outline-none transition placeholder:text-snow/30 focus:border-poppy"
      />
    </div>
  );
}
