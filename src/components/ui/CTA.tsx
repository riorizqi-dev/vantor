"use client";

import { ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

type CTAProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function CTA({
  href = "#collection",
  onClick,
  children,
  variant = "primary",
  className = "",
}: CTAProps) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 font-display text-[13px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 active:scale-[0.97]";

  const styles =
    variant === "primary"
      ? "gold-border text-gold hover:shadow-glow hover:border-gold/60"
      : "border border-white/15 text-white/80 hover:border-gold/50 hover:text-gold";

  return (
    <Magnetic>
      <a
        href={href}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className={`${base} ${styles} ${className}`}
        data-hover
      >
        <span className="relative z-10">{children}</span>
        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-500 group-hover:translate-x-0.5 group-hover:border-gold/60 group-hover:bg-gold/10">
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-rotate-45" />
        </span>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </a>
    </Magnetic>
  );
}
