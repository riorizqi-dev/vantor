"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    n: "01",
    title: "The Name",
    body: "VANTOR is born from Valor — courage, confidence, and timeless masculinity.",
  },
  {
    n: "02",
    title: "The Philosophy",
    body: "Minimalism over excess. One considered piece, worn with intent.",
  },
  {
    n: "03",
    title: "The Craft",
    body: "Stainless steel and genuine leather, engineered to last a decade.",
  },
  {
    n: "04",
    title: "The Future",
    body: "Everyday essentials for the men building Indonesia's tomorrow.",
  },
];

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const lineH = useRef<HTMLSpanElement>(null);
  const lineV = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineH.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        lineV.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-black py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_60%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          index="01"
          label="The Brand"
          title={
            <>
              Born from <span className="gold-text">Valor</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* story */}
          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            <Reveal className="space-y-6">
              <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
                VANTOR isn&apos;t just a name.{" "}
                <span className="text-white">
                  It&apos;s a standard for how a man carries himself.
                </span>
              </p>
              <p className="leading-relaxed text-white/50">
                Inspired by the word <em className="not-italic text-gold">Valor</em> —
                courage, confidence, and timeless masculinity — the brand
                crafts minimalist accessories for modern men. No noise, no
                logos screaming for attention. Just one considered piece,
                engineered to be worn every single day.
              </p>
              <p className="leading-relaxed text-white/50">
                We believe an accessory should complete a man, not distract
                from him. Simple. Bold. Timeless.
              </p>
            </Reveal>

            <div className="grid grid-cols-3 gap-4">
              {[
                { v: "100%", l: "Stainless Steel" },
                { v: "0", l: "Compromise" },
                { v: "1", l: "Promise: Timeless" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={i * 0.1}>
                  <div className="glass rounded-2xl px-4 py-5 text-center">
                    <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
                      {s.v}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-white/45">
                      {s.l}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* definition card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15} className="h-full">
              <div className="gold-border flex h-full flex-col overflow-hidden rounded-[2rem] p-2">
                <div className="relative flex flex-1 flex-col justify-between gap-8 overflow-hidden rounded-[calc(2rem-0.5rem)] bg-onyx p-8 sm:p-10">
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_65%)] blur-xl"
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="eyebrow text-white/40">Etymology</p>
                    <p className="mt-6 font-display text-6xl font-black leading-none tracking-tight text-white sm:text-8xl">
                      Valor
                    </p>
                    <p className="mt-4 text-sm text-white/40">/ˈvælər/ · noun</p>
                    <p className="mt-6 max-w-md text-xl leading-snug text-white/75 sm:text-2xl">
                      &ldquo;Boldness in the face of the{" "}
                      <span className="silver-text font-medium">ordinary</span>.
                      Worn, not said.&rdquo;
                    </p>
                  </div>

                  <div className="relative flex items-end gap-6">
                    <div className="relative hidden h-40 w-32 overflow-hidden rounded-2xl sm:block">
                      <Image
                        src={ABOUT_IMG}
                        alt="VANTOR watch on wrist"
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-white/45">
                      Every piece carries the same discipline: precise lines,
                      honest materials, and a finish that feels far above its
                      price.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* timeline */}
        <div className="relative mt-24 lg:mt-32">
          <Reveal className="mb-14">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-3xl">
              The Journey
            </p>
          </Reveal>

          {/* horizontal line — desktop */}
          <div className="relative hidden lg:block">
            <span className="absolute left-0 right-0 top-0 h-px bg-white/10" />
            <span
              ref={lineH}
              className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-gold via-gold/60 to-gold/20 shadow-glow"
              style={{ transform: "scaleX(0)" }}
            />
            <div className="grid grid-cols-4 gap-8 pt-10">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.n}
                  initial={
                    reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }
                  }
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <span className="absolute -top-10 left-0 h-4 w-4 rounded-full border border-gold bg-black shadow-glow">
                    <span className="absolute inset-0 animate-ping-soft rounded-full bg-gold/40" />
                  </span>
                  <p className="font-display text-sm font-bold tracking-[0.3em] text-gold">
                    {m.n}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-wide text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {m.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* vertical line — mobile/tablet */}
          <div className="relative lg:hidden">
            <span className="absolute bottom-2 left-[7px] top-0 w-px bg-white/10" />
            <span
              ref={lineV}
              className="absolute bottom-2 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-gold via-gold/60 to-gold/20 shadow-glow"
              style={{ transform: "scaleY(0)" }}
            />
            <div className="space-y-12">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.n}
                  initial={
                    reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }
                  }
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1 h-4 w-4 rounded-full border border-gold bg-black shadow-glow">
                    <span className="absolute inset-0 animate-ping-soft rounded-full bg-gold/40" />
                  </span>
                  <p className="font-display text-sm font-bold tracking-[0.3em] text-gold">
                    {m.n}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-wide text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {m.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
