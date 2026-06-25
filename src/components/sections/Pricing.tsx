import { plans, pricingNote, site } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Pricing() {
  return (
    <section id="paquetes" className="py-24 sm:py-32">
      <div className="shell">
        <header className="mb-14 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">Paquetes</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.02]">
              Igualas mensuales, calidad premium siempre.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-snow/60">{pricingNote}</p>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal as="article" key={p.name} delay={(i % 4) * 0.06}>
              <div
                className={`flex h-full flex-col rounded-card border p-7 transition ${
                  p.featured
                    ? "border-poppy bg-gradient-to-b from-poppy/15 to-transparent"
                    : "border-snow/10 bg-white/[0.03] hover:border-snow/25"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  {p.badge && (
                    <span
                      className={`rounded-pill px-3 py-1 text-[11px] font-medium ${
                        p.featured
                          ? "bg-poppy text-snow"
                          : "border border-snow/15 text-snow/70"
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <span className="font-display text-3xl font-semibold">
                    {p.price}
                  </span>
                  <span className="text-sm text-snow/45"> MXN/mes</span>
                </div>
                <p className="mt-1 text-sm text-snow/50">{p.perProduction}</p>

                <dl className="mt-6 space-y-2.5 border-t border-snow/10 pt-6 text-sm">
                  <Row label="Producciones / mes" value={p.productions} />
                  <Row label="Reels" value={p.reels} />
                  <Row label="Fotos" value={p.photos} />
                </dl>

                {p.note && (
                  <p className="mt-5 text-sm text-snow/55">{p.note}</p>
                )}

                <a
                  href={site.cta.href}
                  className={`pill mt-7 w-full ${
                    p.featured ? "pill-primary" : "pill-light"
                  }`}
                >
                  {p.name === "A Medida" ? "Cotizar proyecto" : "Elegir plan"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-snow/40">
          Precios sugeridos a validar con el costeo real. El precio por
          producción nunca queda por debajo de costo + margen.
        </p>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-snow/55">{label}</dt>
      <dd className="font-display font-medium">{value}</dd>
    </div>
  );
}
