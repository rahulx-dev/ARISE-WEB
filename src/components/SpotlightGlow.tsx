"use client";

import React, { useEffect, useState } from "react";

export default function SpotlightGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isHovering) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden"
      style={{ opacity: isHovering ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Dark Theme Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 dark:block hidden"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(10, 132, 255, 0.015) 40%, transparent 70%)",
        }}
      />
      {/* Light Theme Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 dark:hidden block"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background: "radial-gradient(circle, rgba(0, 102, 204, 0.025) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
