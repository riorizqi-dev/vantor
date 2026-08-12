"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Droplets,
  ShieldCheck,
  Gem,
  Ruler,
  Feather,
  Gift,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag?: string;
};

const FEATURES: Feature[] = [
  {
    icon: Droplets,
    title: "Waterproof",
    desc: "Rain, sweat, gym sessions. It goes wherever you go.",
  },
  {
    icon: ShieldCheck,
    title: "Anti Rust",
    desc: "Engineered steel that refuses to let you down.",
  },
  {
    icon: Gem,
    title: "Premium Stainless Steel",
    desc: "316L medical-grade steel, machined to a mirror finish.",
    tag: "Signature",
  },
  {
    icon: Ruler,
    title: "Minimalist Design",
    desc: "Precise lines. Designed to say enough, quietly.",
  },
  {
    icon: Feather,
    title: "Comfortable",
    desc: "Feather-light on the skin. You forget it's there.",
  },
  {
    icon: Gift,
    title: "Gift Ready",
    desc: "Packaging worth unwrapping — every single time.",
  },
];

export default function Features() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-onyx py-28 lg:py-40">
      <div className="pointer-events-none absolute right-[10%] top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_60%)] blur-2xl" />

      {/* floating gems */}
      <div className="pointer-events-none absolute left-[6%] top-24 hidden rotate-45 text-gold/15 lg:block">
        <Gem className="h-16 w-16 animate-floaty-slow" strokeWidth={1} />
      </div>
      <div className="pointer-events-none absolute bottom-24 right-[4%] hidden -rotate-12 text-gold/10 lg:block">
        <Gem className="h-10 w-10 animate-floaty" strokeWidth={1} />
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeading
            index="03"
            label="The Craft"
            align="center"
            title={
              <>
                Details That <span className="gold-text">Matter</span>
              </>
            }
            sub="Six promises built into every piece. No fine print required."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={
                reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-[1.75rem] p-px transition-transform duration-700 hover:-translate-y-2 ${
                i === 2
                  ? "bg-[linear-gradient(150deg,rgba(212,175,55,0.8),rgba(212,175,55,0.1)_45%,rgba(212,175,55,0.25))]"
                  : "bg-[linear-gradient(150deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.08))]"
              }`}
            >
              <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[calc(1.75rem-1px)] bg-[#0c0c0c] p-7 transition-colors duration-700 group-hover:bg-[#0e0d09]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_65%)] opacity-0 blur-lg transition-opacity duration-700 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/5 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/15 group-hover:shadow-glow">
                    <f.icon className="h-6 w-6" strokeWidth={1.25} />
                  </div>
                  {f.tag && (
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-gold">
                      {f.tag}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {f.desc}
                  </p>
                </div>

                <span className="pointer-events-none absolute inset-x-7 bottom-0 h-px w-0 bg-gradient-to-r from-gold/70 to-transparent transition-all duration-700 group-hover:w-2/3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
