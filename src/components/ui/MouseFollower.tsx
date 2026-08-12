"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ringX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 400, damping: 30 });
  const dotY = useSpring(y, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,[data-hover]"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0"
      >
        <motion.div
          animate={{
            width: hovering ? 56 : 36,
            height: hovering ? 56 : 36,
            opacity: hovering ? 0.9 : 0.55,
            borderColor: hovering
              ? "rgba(212,175,55,0.9)"
              : "rgba(212,175,55,0.5)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border bg-gold/5"
        />
      </motion.div>
      <motion.div style={{ x: dotX, y: dotY }} className="absolute left-0 top-0">
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-glow" />
      </motion.div>
    </div>
  );
}
