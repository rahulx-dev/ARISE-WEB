"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clickRipples, setClickRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.04] opacity-50" />
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add luxury micro-ripple
    setClickRipples((prev) => [...prev, { id: Date.now(), x, y }]);
    setTimeout(() => {
      setClickRipples((prev) => prev.slice(1));
    }, 600);

    const nextTheme = isDark ? "light" : "dark";

    // Modern View Transitions API for cinematic cross-fade
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      className="relative w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/[0.12] bg-white/80 dark:bg-[#070B16]/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group select-none"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
    >
      {/* Subtle Specular Glow Ring on Hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0A84FF]/20 via-transparent to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      {/* Ripple Feedback Wave */}
      {clickRipples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ left: ripple.x, top: ripple.y }}
          className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0A84FF]/30 dark:bg-amber-400/30 pointer-events-none"
        />
      ))}

      {/* Animated Sun / Moon Icon with Spring Physics */}
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun-icon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative flex items-center justify-center text-amber-400"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Sun Core */}
              <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
              {/* Sun Rays */}
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="moon-icon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative flex items-center justify-center text-[#0A84FF]"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Moon Crescent */}
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" fillOpacity="0.15" />
            </svg>

            {/* Micro star twinkle sparkle */}
            <motion.span
              animate={isHovered ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] } : {}}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full bg-[#0A84FF]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
