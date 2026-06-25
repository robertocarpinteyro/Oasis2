import { stats } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

export default function Stats() {
  return (
    <section className="py-24 sm:py-28">
      <div className="shell">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="font-display text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-none">
                <Counter value={Number(s.value)} suffix={s.suffix} />
              </p>
              <p className="mt-3 max-w-[22ch] text-sm text-snow/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
