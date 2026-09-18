"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { resolveCloudinaryVideoUrl } from "@/lib/videoUrl";

export default function HeroVideoShowcase() {
  const rawHeroVideoUrl =
    process.env.VITE_ARISE_HERO_VIDEO_URL ||
    process.env.NEXT_PUBLIC_ARISE_HERO_VIDEO_URL ||
    "https://player.cloudinary.com/embed/?cloud_name=idadrqss&public_id=erasio_Smartphone_advertisement_for_ARISE_1080p_20260915165523-upscaled-2x";

  const heroVideoUrl = resolveCloudinaryVideoUrl(rawHeroVideoUrl);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1.0;
    video.muted = false;

    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});

      const enableAudio = () => {
        if (video) {
          video.muted = false;
          video.volume = 1.0;
        }
      };
      window.addEventListener("scroll", enableAudio, { once: true });
      window.addEventListener("click", enableAudio, { once: true });
      window.addEventListener("touchstart", enableAudio, { once: true });
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
    <section className="py-20 sm:py-28 relative overflow-hidden select-none border-t border-white/10 bg-[#0A0C0F]">
      {/* Ambient Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#9AAEFF]/[0.015] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-3 sm:p-4 bg-[#0E1115] shadow-2xl shadow-black/90 border border-white/10"
        >
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={heroVideoUrl}
              autoPlay
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center"
            />

            {/* Corner Crosshairs */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/70 pointer-events-none select-none tracking-widest">
              + ARISE // PRODUCT SHOWCASE
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/70 pointer-events-none select-none tracking-widest">
              30 FPS ON-DEVICE AI
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
