import {
  customPlan,
  entryPlan,
  extraPlan,
  pricing,
  pricingClose,
  proposal,
  site,
} from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Pricing() {
  return (
    <section id="paquetes" className="py-24 sm:py-32">
      <div className="shell">
        <header className="mb-14 max-w-3xl">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-pill border border-ocean/40 bg-ocean/10 px-4 py-1.5 text-xs font-medium text-ocean">
              <span className="h-1.5 w-1.5 rounded-full bg-ocean" />
              Propuesta preparada para {proposal.client}
            </span>
          </Reveal>
          <Reveal delay={0.03}>
            <p className="eyebrow mb-4">{pricing.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.02]">
              {pricing.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-snow/60">{pricing.intro}</p>
          </Reveal>
        </header>

        {/* Paquete de entrada — destacado */}
        <Reveal as="article">
          <div className="grid gap-8 rounded-card border border-ocean/50 bg-gradient-to-br from-ocean/20 via-white/[0.03] to-transparent p-8 sm:p-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                  {entryPlan.name}
                </h3>
                <span className="rounded-pill bg-ocean px-3 py-1 text-[11px] font-medium text-snow">
                  {entryPlan.badge}
                </span>
              </div>
              <p className="mt-4 max-w-sm text-snow/65">{entryPlan.tagline}</p>

              <div className="mt-8 flex items-end gap-2">
                <span className="font-display text-5xl font-semibold sm:text-6xl">
                  {entryPlan.price}
                </span>
                <span className="mb-2 text-sm text-snow/50">
                  {entryPlan.currency} {pricing.tax}
                </span>
              </div>

              <a
                href={site.cta.href}
                className="pill pill-primary mt-8 w-full sm:w-auto sm:self-start sm:px-8 sm:py-4"
              >
                {entryPlan.cta}
              </a>
            </div>

            {/* Incluye + regalos */}
            <div className="flex flex-col justify-center gap-6 border-t border-snow/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="grid grid-cols-2 gap-4">
                {entryPlan.includes.map((it) => (
                  <div
                    key={it.label}
                    className="rounded-2xl border border-snow/10 bg-white/[0.03] p-5"
                  >
                    <span className="font-display text-4xl font-semibold">
                      {it.value}
                    </span>
                    <p className="mt-1 text-sm text-snow/60">{it.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-3 text-sm text-snow/55">{entryPlan.giftLine}</p>
                <div className="grid grid-cols-2 gap-4">
                  {entryPlan.gifts.map((g) => (
                    <div
                      key={g.label}
                      className="relative rounded-2xl border border-ocean/40 bg-ocean/10 p-5"
                    >
                      <span className="absolute right-3 top-3 rounded-pill bg-ocean px-2 py-0.5 text-[10px] font-medium text-snow">
                        de regalo
                      </span>
                      <span className="font-display text-3xl font-semibold text-ocean">
                        {g.value}
                      </span>
                      <p className="mt-1 text-sm text-snow/70">{g.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Extra + a medida */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Reveal as="article" delay={0.05}>
            <div className="flex h-full flex-col rounded-card border border-snow/10 bg-white/[0.03] p-8 transition hover:border-snow/25">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">
                  {extraPlan.name}
                </h3>
                <div className="text-right">
                  <span className="font-display text-2xl font-semibold">
                    {extraPlan.price}
                  </span>
                  <span className="text-sm text-snow/45">
                    {" "}
                    {extraPlan.currency} {pricing.tax}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-snow/60">{extraPlan.tagline}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {extraPlan.includes.map((it) => (
                  <li
                    key={it}
                    className="rounded-pill border border-snow/15 px-3 py-1.5 text-xs text-snow/75"
                  >
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={site.cta.href}
                className="pill pill-light mt-auto w-full sm:w-auto sm:self-start"
              >
                {extraPlan.cta}
              </a>
            </div>
          </Reveal>

          <Reveal as="article" delay={0.1}>
            <div className="flex h-full flex-col rounded-card border border-snow/10 bg-white/[0.03] p-8 transition hover:border-snow/25">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">
                  {customPlan.name}
                </h3>
                <span className="text-sm text-snow/50">{customPlan.price}</span>
              </div>
              <p className="mt-3 text-sm text-snow/60">{customPlan.tagline}</p>
              <a
                href={site.cta.href}
                className="pill pill-ghost mt-auto w-full sm:w-auto sm:self-start"
              >
                {customPlan.cta}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Cierre personalizado */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col gap-4 rounded-card border border-snow/10 bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-lg text-snow/80">
              <span className="text-snow">{proposal.client},</span>{" "}
              {pricingClose}
            </p>
            <a href={site.cta.href} className="pill pill-primary shrink-0 sm:px-7 sm:py-4">
              Agendar llamada
            </a>
          </div>
        </Reveal>

        <p className="mt-6 text-xs text-snow/40">{pricing.note}</p>
      </div>
    </section>
  );
}
