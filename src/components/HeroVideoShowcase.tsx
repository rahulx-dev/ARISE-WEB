"use client";

import React, { useEffect, useRef } from "react";
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
    <section className="relative w-full h-[80vh] sm:h-screen overflow-hidden select-none border-y border-white/10 bg-[#050607] flex items-center justify-center">
      {/* Full-Bleed Video Element */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideoUrl}
          autoPlay
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        />

        {/* Cinematic Gradient Overlays for Seamless Page Integration */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-[#050607] via-[#050607]/70 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-[#050607] via-[#050607]/70 to-transparent pointer-events-none z-10" />
      </div>

      {/* Futuristic Corner HUD Telemetry */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full h-full flex flex-col justify-between py-8 sm:py-12 relative z-20 pointer-events-none font-mono text-[10px] sm:text-xs text-white/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-xl border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#9AAEFF] animate-pulse" />
            <span className="tracking-widest uppercase font-bold">+ ARISE // LIVE PRODUCT SHOWCASE</span>
          </div>
          <div className="hidden sm:block bg-black/60 px-3 py-1.5 rounded-xl border border-white/15 backdrop-blur-md text-[#A6A9AE] tracking-widest uppercase">
            1080P CINEMATIC · 60 FPS
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="bg-black/60 px-3 py-1.5 rounded-xl border border-white/15 backdrop-blur-md text-[#A6A9AE] tracking-widest uppercase">
            SYSTEM ENGINE: ON-DEVICE
          </div>
          <div className="bg-black/60 px-3 py-1.5 rounded-xl border border-white/15 backdrop-blur-md text-[#9AAEFF] font-bold tracking-widest uppercase">
            30 FPS NEURAL POSE MATRIX
          </div>
        </div>
      </div>
    </section>
  );
}
