"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function AriseHeadingCursor() {
  const [isHoveringH1, setIsHoveringH1] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // High performance motion values
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth buttery spring physics for the trailing aura
  const springX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 40 });

  useEffect(() => {
    // Only desktop / mouse devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if cursor is over an h1 or element with data-h1-cursor
      const target = e.target as HTMLElement | null;
      const isOverH1 = Boolean(
        target && (target.tagName === "H1" || target.closest("h1") || target.closest("[data-h1-cursor]"))
      );

      setIsHoveringH1(isOverH1);
    };

    const handleMouseLeave = () => {
      setIsHoveringH1(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* 1. Large Ambient Sapphire Spotlight Halo over H1 text */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isHoveringH1 ? 1 : 0,
          scale: isHoveringH1 ? 1 : 0.4,
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[260px] h-[260px] rounded-full mix-blend-screen pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(10,132,255,0.45)_0%,rgba(10,132,255,0.18)_40%,rgba(255,255,255,0.06)_60%,transparent_75%)] blur-[16px]" />
      </motion.div>

      {/* 2. Fluid Precision Sci-Fi Reticle Ring following with spring physics */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isHoveringH1 ? 1 : 0,
          scale: isHoveringH1 ? 1 : 0.2,
          rotate: isHoveringH1 ? 90 : 0,
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-12 h-12 rounded-full border border-[#0A84FF]/80 shadow-[0_0_24px_rgba(10,132,255,0.6),inset_0_0_12px_rgba(10,132,255,0.35)] flex items-center justify-center pointer-events-none"
      >
        {/* Subtle Precision Crosshair Ticks */}
        <span className="absolute -top-1 w-0.5 h-1.5 bg-[#0A84FF] rounded-full" />
        <span className="absolute -bottom-1 w-0.5 h-1.5 bg-[#0A84FF] rounded-full" />
        <span className="absolute -left-1 w-1.5 h-0.5 bg-[#0A84FF] rounded-full" />
        <span className="absolute -right-1 w-1.5 h-0.5 bg-[#0A84FF] rounded-full" />
      </motion.div>

      {/* 3. Instant Zero-Lag Micro Glowing Point directly at mouse pointer */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isHoveringH1 ? 1 : 0,
          scale: isHoveringH1 ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff,0_0_16px_#0A84FF] pointer-events-none"
      />
    </div>
  );
}
