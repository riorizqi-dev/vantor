"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

type Occupation = {
  icon: LucideIcon;
  title: string;
  pct: number;
  desc: string;
};

const OCCUPATIONS: Occupation[] = [
  {
    icon: GraduationCap,
    title: "Students",
    pct: 22,
    desc: "High school leaders, first impressions, first style choices.",
  },
  {
    icon: BookOpen,
    title: "College Students",
    pct: 34,
    desc: "Campus culture and social proof drive almost every purchase.",
  },
  {
    icon: Briefcase,
    title: "Young Professionals",
    pct: 28,
    desc: "First paychecks spent on image, confidence, and daily polish.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    pct: 16,
    desc: "Self-starters who value precision, craft, and standing out.",
  },
];

const R = 88;
const CIRC = 2 * Math.PI * R;

export default function Audience() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-black py-28 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07),transparent_60%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          index="04"
          label="The Audience"
          title={
            <>
              For the Man in <span className="gold-text">Motion</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* age gauge */}
          <Reveal className="flex flex-col items-center lg:col-span-5">
            <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full -rotate-90"
              >
                <defs>
                  <linearGradient id="goldGauge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f6e27a" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#a67c00" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r={R}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2.5"
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r={R}
                  fill="none"
                  stroke="url(#goldGauge)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  initial={reduce ? { strokeDashoffset: CIRC * (1 - 0.78) } : { strokeDashoffset: CIRC }}
                  whileInView={{ strokeDashoffset: CIRC * (1 - 0.78) }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>

              <div className="flex flex-col items-center">
                <span className="font-display text-6xl font-black text-white sm:text-7xl">
                  <Counter to={17} />–<Counter to={35} />
                </span>
                <span className="mt-2 eyebrow text-white/40">Primary Age</span>
              </div>

              <span className="absolute -left-1 top-1/2 -translate-y-1/2 font-display text-xs font-bold tracking-[0.3em] text-white/30">
                17
              </span>
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 font-display text-xs font-bold tracking-[0.3em] text-white/30">
                35
              </span>
            </div>

            <div className="mt-10 grid w-full max-w-sm grid-cols-3 gap-4 text-center">
              {[
                { v: 61, s: "%", l: "Live on Java" },
                { v: 78, s: "%", l: "Buy online" },
                { v: 3.2, s: "h", l: "Social / day" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl px-3 py-4">
                  <p className="font-display text-2xl font-bold text-gold">
                    <Counter to={s.v} decimals={Number.isInteger(s.v) ? 0 : 1} />
                    <span className="text-sm">{s.s}</span>
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-white/45">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* occupations */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {OCCUPATIONS.map((o, i) => (
              <motion.div
                key={o.title}
                initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(150deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_50%,rgba(212,175,55,0.12))] p-px"
              >
                <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[calc(1.75rem-1px)] bg-[#0c0c0c] p-7 transition-transform duration-700 group-hover:-translate-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-gold/25 bg-gold/5 p-3.5 text-gold transition-all duration-500 group-hover:shadow-glow">
                      <o.icon className="h-6 w-6" strokeWidth={1.25} />
                    </div>
                    <span className="font-display text-4xl font-black text-white/10">
                      {o.pct}%
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
                        {o.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        {o.desc}
                      </p>
                    </div>
                  </div>

                  {/* animated bar */}
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={reduce ? { width: `${o.pct}%` } : { width: 0 }}
                      whileInView={{ width: `${o.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light shadow-glow"
                    />
                  </div>
                  <p className="text-right text-[10px] uppercase tracking-widest text-white/40">
                    <Counter to={o.pct} />% of audience
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
