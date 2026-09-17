"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Interactive3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxAngle?: number;
  glareOpacity?: number;
}

export default function Interactive3DTilt({
  children,
  className = "",
  maxAngle = 12,
  glareOpacity = 0.25,
}: Interactive3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [maxAngle, -maxAngle]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxAngle, maxAngle]), {
    stiffness: 260,
    damping: 24,
  });

  const glareX = useSpring(useTransform(x, [0, 1], [0, 100]), {
    stiffness: 260,
    damping: 24,
  });
  const glareY = useSpring(useTransform(y, [0, 1], [0, 100]), {
    stiffness: 260,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = (e.clientX - rect.left) / rect.width;
    const clientY = (e.clientY - rect.top) / rect.height;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic Laser Hologram Glare */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden z-20 mix-blend-overlay transition-opacity duration-300"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(0, 210, 238, ${glareOpacity}) 0%, transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
}
