import { premium } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Premium() {
  return (
    <section className="bg-snow py-24 text-ink sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow !text-ink/50 mb-4">{premium.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.03]">
                {premium.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg text-ink/60">{premium.body}</p>
            </Reveal>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-card bg-ink/10 sm:grid-cols-2">
            {premium.features.map((f, i) => (
              <Reveal
                as="li"
                key={f.name}
                delay={(i % 2) * 0.05}
                className="group bg-snow p-7 transition hover:bg-ink hover:text-snow"
              >
                <span className="font-display text-sm text-ink/40 transition group-hover:text-snow/50">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {f.name}
                </h3>
                <p className="mt-2 text-sm text-ink/60 transition group-hover:text-snow/60">
                  {f.desc}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
