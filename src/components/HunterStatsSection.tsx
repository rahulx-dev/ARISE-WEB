"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DeviceMockup from "./DeviceMockup";
import { resolveCloudinaryVideoUrl } from "@/lib/videoUrl";
import HunterRankCalculator from "./HunterRankCalculator";
import HolographicHunterCard from "./HolographicHunterCard";

export default function HunterStatsSection() {
  const telemetry = [
    { label: "RANK", value: "E-RANK" },
    { label: "LEVEL", value: "LV. 35" },
    { label: "PROGRESSION", value: "75 / 100 XP" },
    { label: "STREAK", value: "1 DAY" },
  ];

  const rawProfileVideoUrl =
    process.env.VITE_ARISE_PROFILE_VIDEO_URL ||
    process.env.NEXT_PUBLIC_ARISE_PROFILE_VIDEO_URL ||
    "https://player.cloudinary.com/embed/?cloud_name=idadrqss&public_id=Smartphone_displaying_profile_co__1080p_20260915174902_processed-upscaled-2x";

  const profileVideoUrl = resolveCloudinaryVideoUrl(rawProfileVideoUrl);

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay with sound when entering viewport
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.volume = 1.0;
    video.muted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false;
          video.volume = 1.0;
          video.play().catch(() => {
            video.muted = true;
            video.play().catch(() => {});
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="ranks" className="py-36 sm:py-48 relative overflow-hidden">
      {/* Subtle Monochrome Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <div className="text-xs font-mono tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase">
              REAL-WORLD RPG PROGRESSION
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-slate-900 dark:text-white leading-[0.98]">
              You Are <br />
              <span className="italic text-slate-400 dark:text-slate-400">
                The Character.
              </span>
            </h2>

            {/* Subtle Telemetry Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 select-none border-t border-slate-200 dark:border-white/[0.08]">
              {telemetry.map((t) => (
                <div key={t.label} className="space-y-1">
                  <div className="text-[10px] font-mono tracking-wider text-slate-400 dark:text-[#94A3B8] uppercase">
                    {t.label}
                  </div>
                  <div className="text-sm font-semibold tracking-tight text-slate-900 dark:text-[#F8FAFC]">
                    {t.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Device Mockup Featuring Real Warrior Identity Video */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[340px] sm:max-w-[380px]"
            >
              <DeviceMockup showStatusBar={false}>
                <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center group">
                  <video
                    ref={videoRef}
                    src={profileVideoUrl}
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </DeviceMockup>
            </motion.div>
          </div>

        </div>

        {/* Award-Winning Interactive Tools: Hunter Rank Calculator & Holographic 3D License */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-slate-200 dark:border-white/[0.08] items-center">
          <div className="lg:col-span-7">
            <HunterRankCalculator />
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <HolographicHunterCard />
          </div>
        </div>
      </div>
    </section>
  );
}