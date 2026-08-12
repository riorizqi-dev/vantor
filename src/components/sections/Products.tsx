import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import SmartImage from "@/components/ui/SmartImage";

const PRODUCTS = [
  {
    name: "Leather Bracelet",
    material: "Genuine Leather",
    price: "Rp129.000",
    desc: "Full-grain leather with a brushed stainless steel clasp. Ages beautifully.",
    features: ["Waterproof", "Comfortable", "Gift Ready"],
    img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop",
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Stainless Steel Bracelet",
    material: "316L Steel",
    price: "Rp149.000",
    desc: "Machined 316L stainless steel. Anti-rust, hypoallergenic, weight that says premium.",
    features: ["Anti Rust", "Premium Steel", "Minimalist"],
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1400&auto=format&fit=crop",
    span: "lg:col-span-7",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    name: "Pendant Necklace",
    material: "Gold Coated Steel",
    price: "Rp169.000",
    desc: "A sculptural pendant on a fine chain. The quiet centerpiece of any outfit.",
    features: ["Gift Ready", "Minimalist", "Anti Rust"],
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop",
    span: "lg:col-span-7",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    name: "Minimal Necklace",
    material: "316L Steel",
    price: "Rp189.000",
    desc: "A clean bar silhouette. Built for layers, uniforms, and every-day carry.",
    features: ["Premium Steel", "Comfortable", "Waterproof"],
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
];

export default function Products() {
  return (
    <section
      id="collection"
      className="relative overflow-hidden bg-black py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_60%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="02"
            label="The Collection"
            title={
              <>
                Engineered to be{" "}
                <span className="gold-text">Worn Daily</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              Four signatures. One standard. Every piece is finished by hand
              and built to outlast trends.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-12">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={(i % 2) * 0.12}
              className={p.span}
            >
              <TiltCard intensity={8} className="group relative h-full">
                <div className="gold-border h-full rounded-[2rem] p-2 transition-shadow duration-700 group-hover:shadow-glow">
                  <div
                    className={`relative h-full overflow-hidden rounded-[calc(2rem-0.5rem)] bg-onyx ${
                      p.span.includes("col-span-5")
                        ? "min-h-[26rem] sm:min-h-[30rem]"
                        : "min-h-[24rem] sm:min-h-[28rem]"
                    }`}
                  >
                    <SmartImage
                      src={p.img}
                      alt={p.name}
                      wrapperClassName="absolute inset-0 h-full w-full"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                    {/* material chip */}
                    <div
                      className="absolute left-5 top-5 flex items-center gap-2 rounded-full glass px-3.5 py-1.5"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-glow" />
                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/75">
                        {p.material}
                      </span>
                    </div>

                    {/* index */}
                    <span
                      className="absolute right-6 top-5 font-display text-4xl font-black text-white/15"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      0{i + 1}
                    </span>

                    {/* info */}
                    <div
                      className="absolute inset-x-0 bottom-0 p-6 sm:p-7"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-2 max-w-md text-xs leading-relaxed text-white/55 sm:text-sm">
                        {p.desc}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {p.features.map((f) => (
                          <span
                            key={f}
                            className="flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-[10px] uppercase tracking-widest text-gold/90"
                          >
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="font-display text-2xl font-bold text-gold">
                          {p.price}
                        </span>
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 group-hover:text-white">
                          View Detail
                          <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
