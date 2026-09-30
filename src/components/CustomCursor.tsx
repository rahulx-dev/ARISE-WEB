"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop/mouse)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "BUTTON" ||
        target?.tagName === "A" ||
        target?.closest("button") ||
        target?.closest("a") ||
        target?.classList.contains("cursor-pointer") ||
        target?.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-signal"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicking ? 0.6 : isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 50 }}
        style={{ width: 6, height: 6 }}
      />

      {/* Trailing Signal Ring Cursor (NEXUS Studio Style) */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-signal/60 backdrop-blur-[0.5px]"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? "rgba(232, 255, 71, 0.12)" : "rgba(232, 255, 71, 0.03)",
          borderColor: isHovered ? "#E8FF47" : "rgba(232, 255, 71, 0.4)",
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />
    </>
  );
}
