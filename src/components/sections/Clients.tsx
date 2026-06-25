import { clients } from "@/lib/site";
import Marquee from "@/components/ui/Marquee";

export default function Clients() {
  return (
    <section className="border-y border-snow/10 py-10">
      <div className="shell mb-7">
        <p className="eyebrow">Marcas que confían en Oasis</p>
      </div>
      <Marquee>
        {clients.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="whitespace-nowrap font-display text-2xl font-medium text-snow/35 transition hover:text-snow/80 sm:text-3xl"
          >
            {c}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
