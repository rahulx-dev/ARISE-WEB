"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function BackgroundEffects() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Generate lightweight ambient mana dust particles
    const newParticles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1.2,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none">
      {/* Linear-Style Interactive Cursor Spotlight (Only visible on dark backgrounds) */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          transform: "translate(-50%, -50%)",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#0A84FF]/[0.05] via-[#10B981]/[0.03] to-transparent blur-[120px] dark:opacity-100 opacity-40 transition-opacity"
      />

      {/* Subtle Analog Film Grain Overlay for Cinematic Atmosphere */}
      <div 
        className="absolute inset-0 opacity-[0.022] dark:opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Dungeon Mana Dust Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: "100vh" }}
            animate={{
              opacity: [0, 0.45, 0],
              y: ["0vh", "-100vh"],
              x: [`${p.x}vw`, `${p.x + (Math.random() * 6 - 3)}vw`],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              backgroundColor: p.id % 2 === 0 ? "#0A84FF" : "#10B981",
              boxShadow: p.id % 2 === 0 ? "0 0 8px #0A84FF" : "0 0 8px #10B981",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
