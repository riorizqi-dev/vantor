const WORDS = [
  "Simple",
  "Bold",
  "Timeless",
  "Valor",
  "Crafted",
  "Premium",
  "Minimal",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-onyx py-6">
      <div className="marquee-track animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-xl font-semibold uppercase tracking-[0.35em] text-white/45">
              {w}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
