"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "Brand" },
  { href: "#collection", label: "Collection" },
  { href: "#reach", label: "Reach" },
  { href: "#strategy", label: "Strategy" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ${
            scrolled
              ? "glass gold-border"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a
            href="#hero"
            className="font-display text-lg font-bold tracking-[0.3em] text-white"
            data-hover
          >
            VANTOR
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:text-gold"
                data-hover
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-gold/60 hover:text-gold lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] flex flex-col bg-black/90 backdrop-blur-3xl"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-lg font-bold tracking-[0.3em] text-gold">
                VANTOR
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold/60 hover:text-gold"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-3xl font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-gold sm:text-4xl"
                  data-hover
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pb-10 text-center text-[10px] uppercase tracking-[0.4em] text-white/40"
            >
              Simple · Bold · Timeless
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
