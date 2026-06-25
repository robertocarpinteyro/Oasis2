import { process } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  return (
    <section className="bg-snow py-24 text-ink sm:py-32">
      <div className="shell">
        <header className="mb-14 max-w-2xl">
          <Reveal>
            <p className="eyebrow !text-ink/50 mb-4">{process.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.02]">
              {process.title}
            </h2>
          </Reveal>
        </header>

        <ol className="grid gap-px overflow-hidden rounded-card bg-ink/10 md:grid-cols-5">
          {process.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 0.05}
              className="flex flex-col bg-snow p-7"
            >
              <span className="font-display text-4xl font-semibold text-ink/15">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
