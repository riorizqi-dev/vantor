"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import Particles from "@/components/ui/Particles";
import CTA from "@/components/ui/CTA";

const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_IMG =
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1400&auto=format&fit=crop";
const RING_IMG =
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop";
const CHAIN_IMG =
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop";

export default function Hero() {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const { scrollY } = useScroll();

  const imgY = useTransform(scrollY, [0, 800], [0, 120]);
  const imgOpacity = useTransform(scrollY, [0, 600], [1, 0.1]);
  const ringRotate = useTransform(scrollY, [0, 800], [0, -30]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  const orb1x = useTransform(sx, (x) => x * -30);
  const orb1y = useTransform(sy, (y) => y * -20);
  const orb2x = useTransform(sx, (x) => x * 20);
  const orb2y = useTransform(sy, (y) => y * 30);
  const productX = useTransform(sx, (x) => x * 24);
  const productY = useTransform(sy, (y) => y * 18);
  const chip1x = useTransform(sx, (x) => x * -34);
  const chip1y = useTransform(sy, (y) => y * -28);
  const chip2x = useTransform(sx, (x) => x * 30);
  const chip2y = useTransform(sy, (y) => y * 26);
  const priceX = useTransform(sx, (x) => x * -20);
  const priceY = useTransform(sy, (y) => y * 20);

  const list = [
    { opacity: 0, y: 50, filter: "blur(12px)" },
    { opacity: 1, y: 0, filter: "blur(0px)" },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-black"
    >
      {/* ambient orbs */}
      <motion.div
        style={{ x: orb1x, y: orb1y }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_65%)] blur-2xl"
      />
      <motion.div
        style={{ x: orb2x, y: orb2y }}
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_65%)] blur-2xl"
      />

      <Particles density={60} />

      {/* giant watermark */}
      <motion.span
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, ease: "easeOut", delay: 0.6 }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[38vw] font-black leading-none text-white/[0.02] lg:text-[26vw]"
        aria-hidden
      >
        VANTOR
      </motion.span>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 pb-24 pt-32 lg:grid-cols-2 lg:gap-8 lg:pt-28">
        {/* Left — copy */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={reduce ? false : list[0]}
            animate={list[1]}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-gold to-transparent" />
            <span className="eyebrow text-gold">
              Premium Men&apos;s Jewelry
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 60, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.3, delay: 0.5, ease: EASE }}
            className="font-display text-[22vw] font-black leading-[0.9] tracking-tight sm:text-[7rem] lg:text-[8.5rem]"
          >
            <span className="silver-text">VAN</span>
            <span className="gold-text">TOR</span>
          </motion.h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.75, ease: EASE }}
            className="mt-6 flex items-center gap-4"
          >
            {["Simple", "Bold", "Timeless"].map((w, i) => (
              <span key={w} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-glow" />
                )}
                <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-base">
                  {w}
                </span>
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
            className="mt-6 max-w-md text-sm leading-relaxed text-white/55 sm:text-base"
          >
            Premium accessories designed for modern men. Crafted in stainless
            steel and genuine leather, engineered to be worn every day.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.05, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <CTA href="#collection">Explore Collection</CTA>
            <CTA href="#about" variant="ghost">
              Our Story
            </CTA>
          </motion.div>
        </div>

        {/* Right — product visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
          style={{ y: imgY, opacity: imgOpacity }}
          className="relative mx-auto flex h-[420px] w-full max-w-[440px] items-center justify-center sm:h-[500px]"
        >
          {/* rotating rings */}
          <motion.div
            style={{ rotate: ringRotate }}
            className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold/25"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-glow" />
          </motion.div>
          <div className="absolute inset-10 rounded-full border border-white/10" />
          <div className="absolute inset-16 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.10),transparent_60%)] blur-md" />

          {/* main product */}
          <motion.div
            style={{ x: productX, y: productY }}
            className="absolute inset-8 overflow-hidden rounded-[2rem] gold-border"
          >
            <Image
              src={HERO_IMG}
              alt="VANTOR premium stainless steel watch"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </motion.div>

          {/* floating ring chip */}
          <motion.div
            style={{ x: chip1x, y: chip1y }}
            className="absolute -left-6 top-10 animate-floaty sm:-left-10"
          >
            <div className="glass gold-border flex items-center gap-3 rounded-2xl p-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                <Image
                  src={RING_IMG}
                  alt="Gold ring detail"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-widest text-gold">
                  Gold Finish
                </p>
                <p className="text-[10px] text-white/50">Anti-rust coating</p>
              </div>
            </div>
          </motion.div>

          {/* floating chain chip */}
          <motion.div
            style={{ x: chip2x, y: chip2y }}
            className="absolute -right-4 bottom-16 animate-floaty-slow sm:-right-8"
          >
            <div className="glass gold-border flex items-center gap-3 rounded-2xl p-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                <Image
                  src={CHAIN_IMG}
                  alt="Gold chain detail"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-widest text-gold">
                  Stainless Steel
                </p>
                <p className="text-[10px] text-white/50">Never tarnishes</p>
              </div>
            </div>
          </motion.div>

          {/* price badge */}
          <motion.div
            style={{ x: priceX, y: priceY }}
            className="absolute -top-3 right-2 animate-pulse-gold rounded-full gold-border px-5 py-2.5"
          >
            <p className="font-display text-sm font-bold tracking-widest text-gold">
              Rp169K
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        data-hover
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-white/15">
          <motion.span
            animate={reduce ? undefined : { y: [-40, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-6 w-px bg-gradient-to-b from-transparent to-gold"
          />
        </span>
      </motion.a>
    </section>
  );
}
