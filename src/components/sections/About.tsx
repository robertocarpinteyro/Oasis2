import { about } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="estudio" className="py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">{about.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.04]">
                {about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-md text-lg text-snow/60">
                {about.positioning}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            <Reveal className="card-surface p-7">
              <h3 className="font-display text-sm uppercase tracking-[0.18em] text-snow/45">
                Misión
              </h3>
              <p className="mt-3 text-lg text-snow/85">{about.mission}</p>
            </Reveal>
            <Reveal delay={0.05} className="card-surface p-7">
              <h3 className="font-display text-sm uppercase tracking-[0.18em] text-snow/45">
                Visión
              </h3>
              <p className="mt-3 text-lg text-snow/85">{about.vision}</p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-3">
              {about.values.map((v, i) => (
                <Reveal
                  key={v.name}
                  delay={i * 0.06}
                  className="card-surface p-6"
                >
                  <span
                    className="block h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: ["#ffc315", "#ff6ab6", "#2cd3f4"][i],
                    }}
                  />
                  <h4 className="mt-4 font-display text-lg font-semibold">
                    {v.name}
                  </h4>
                  <p className="mt-1.5 text-sm text-snow/55">{v.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
