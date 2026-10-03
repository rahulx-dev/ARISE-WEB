"use client";

import React, { useEffect, useRef } from "react";

export default function Arise3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // 3D Star / Particle Nodes
    const PARTICLE_COUNT = 65;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      alpha: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;
    }> = [];

    const colors = [
      "rgba(255, 255, 255,",
      "rgba(10, 132, 255,", // Sapphire
      "rgba(147, 197, 253,", // Ice Blue
      "rgba(168, 176, 189,", // Titanium
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 100,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: -0.4 - Math.random() * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.05;
      targetMouseY = (e.clientY - height / 2) * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const fov = 400;
      const cx = width / 2 + mouseX;
      const cy = height / 2 + mouseY;

      // Draw subtle cybernetic horizon depth grid
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const horizonY = height * 0.75 + mouseY * 0.3;
      
      // Horizontal perspective lines
      for (let i = 0; i < 6; i++) {
        const y = horizonY + Math.pow(i / 5, 2.5) * (height - horizonY);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Render 3D particles with z-projection
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Reset if behind camera
        if (p.z <= 0) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        const scale = fov / p.z;
        const screenX = cx + p.x * scale;
        const screenY = cy + p.y * scale;
        const radius = Math.max(0.2, p.size * scale);

        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          const depthAlpha = Math.min(1, Math.max(0, (1000 - p.z) / 1000)) * p.alpha;
          
          ctx.beginPath();
          ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${depthAlpha})`;
          ctx.fill();

          // Subtle constellation lines between nearby close particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dz = p.z - p2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 180) {
              const scale2 = fov / p2.z;
              const screenX2 = cx + p2.x * scale2;
              const screenY2 = cy + p2.y * scale2;
              const lineAlpha = (1 - dist / 180) * 0.08 * depthAlpha;

              ctx.beginPath();
              ctx.moveTo(screenX, screenY);
              ctx.lineTo(screenX2, screenY2);
              ctx.strokeStyle = `rgba(10, 132, 255, ${lineAlpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
