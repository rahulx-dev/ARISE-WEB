"use client";

import React, { useEffect, useRef } from "react";

export default function SpotlightGlow() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with hover/pointer capability
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let rafId: number | null = null;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      // Smooth linear interpolation
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (spotlight) {
        spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        rafId = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none gpu-layer"
      aria-hidden="true"
    >
      <div
        ref={spotlightRef}
        className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none will-change-transform dark:bg-[radial-gradient(circle,rgba(10,132,255,0.04)_0%,transparent_70%)] bg-[radial-gradient(circle,rgba(0,102,204,0.025)_0%,transparent_70%)]"
      />
    </div>
  );
}
