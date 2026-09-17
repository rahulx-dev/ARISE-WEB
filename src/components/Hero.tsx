"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { resolveCloudinaryVideoUrl } from "@/lib/videoUrl";
import TrustTelemetryBadges from "./TrustTelemetryBadges";
import { sound } from "@/lib/audio";

interface HeroProps {
  onOpenDownload: () => void;
}

export default function Hero({ onOpenDownload }: HeroProps) {
  const rawHeroVideoUrl =
    process.env.VITE_ARISE_HERO_VIDEO_URL ||
    process.env.NEXT_PUBLIC_ARISE_HERO_VIDEO_URL ||
    "https://player.cloudinary.com/embed/?cloud_name=idadrqss&public_id=erasio_Smartphone_advertisement_for_ARISE_1080p_20260915165523-upscaled-2x";

  const heroVideoUrl = resolveCloudinaryVideoUrl(rawHeroVideoUrl);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay with sound when in viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1.0;
    video.muted = false;

    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});

      const enableAudioOnGesture = () => {
        if (video) {
          video.muted = false;
          video.volume = 1.0;
        }
      };
      window.addEventListener("scroll", enableAudioOnGesture, { once: true });
      window.addEventListener("click", enableAudioOnGesture, { once: true });
      window.addEventListener("touchstart", enableAudioOnGesture, { once: true });
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false;
          video.volume = 1.0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden select-none">
      {/* Soft atmospheric radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] h-[600px] bg-[#0A84FF]/[0.07] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        
        {/* Big Bold Geometric Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[0.96] max-w-5xl font-sans"
        >
          TURN YOUR SCREEN TIME <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] via-blue-500 to-cyan-400">
            INTO REAL POWER.
          </span>
        </motion.h1>

        {/* Primary Action Button - Clean 'DOWNLOAD APK' */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col items-center gap-4 select-none"
        >
          <button
            onClick={() => {
              sound.playClick();
              onOpenDownload();
            }}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-[#0A84FF] to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/35 active:scale-[0.98] inline-flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/25 cursor-pointer border border-blue-400/40"
          >
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>DOWNLOAD APK</span>
          </button>
        </motion.div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6"
        >
          <TrustTelemetryBadges showAll={false} />
        </motion.div>

        {/* Cinematic Hero Product Video (16:9 Aspect Ratio) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mt-14 sm:mt-18 relative group"
        >
          {/* Hardware Frame & Cinematic Bezel */}
          <div className="relative rounded-2xl sm:rounded-[32px] p-2 sm:p-3 bg-gradient-to-b from-slate-200/80 to-slate-100/40 dark:from-white/[0.12] dark:to-white/[0.02] shadow-2xl shadow-blue-500/10 dark:shadow-black/80 border border-slate-200 dark:border-white/[0.08] transition-all duration-500 group-hover:border-blue-500/40 group-hover:shadow-blue-500/20">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-xl sm:rounded-[24px] overflow-hidden bg-black flex items-center justify-center">
              
              <video
                ref={videoRef}
                src={heroVideoUrl}
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center"
              />

              {/* Subtle Corner Crosshairs */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white/60 pointer-events-none select-none">
                + SENSOR_01 // ACTIVE
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/60 pointer-events-none select-none">
                30 FPS // ON-DEVICE AI
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}