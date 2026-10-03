"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { resolveCloudinaryVideoUrl } from "@/lib/videoUrl";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function AriseVisionTracker() {
  const videoUrl = resolveCloudinaryVideoUrl(
    "https://player.cloudinary.com/embed/?cloud_name=idadrqss&public_id=erasio_Smartphone_advertisement_for_ARISE_1080p_20260915165523-upscaled-2x"
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>01 / VISION TRACKING</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Every rep counts.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            ARISE uses on-device computer vision to track movement and exercise form in real time. Designed to verify movement in real time with zero camera data uploaded to the cloud.
          </p>
        </div>

        {/* Cinematic Hardware Display Frame with Skeleton HUD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl sm:rounded-[36px] bg-[#08090C] border border-white/[0.12] p-3 sm:p-4 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)] overflow-hidden"
        >
          {/* Inner Video Screen Container */}
          <div className="relative w-full aspect-video sm:h-[580px] rounded-2xl sm:rounded-[28px] overflow-hidden bg-[#000000] flex items-center justify-center">
            
            {/* Live Product Video */}
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center opacity-85"
            />

            {/* Subtle Gradient Edge Fades */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-[#000000]/60 pointer-events-none" />

            {/* Technical HUD Overlay Elements */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none">
              
              {/* Top HUD Bar */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#000000]/70 border border-white/[0.1] backdrop-blur-md font-mono text-[11px] text-[#F5F5F7]">
                  <span className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
                  <span className="font-semibold uppercase tracking-wider">VISION TRACKING ACTIVE</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#000000]/70 border border-white/[0.1] backdrop-blur-md font-mono text-[11px] text-[#86868B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0A84FF]" />
                  <span>ON-DEVICE SILICON</span>
                </div>
              </div>

              {/* Center Biomechanical Joint Overlay Crosshairs */}
              <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-48 h-48 border border-dashed border-[#0A84FF]/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#0A84FF]" />
                </div>
              </div>

              {/* Bottom Real-Time Telemetry Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#08090C]/85 border border-white/[0.1] p-4 sm:p-5 rounded-2xl backdrop-blur-xl max-w-3xl">
                <div>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">REPS</span>
                  <span className="font-sans font-bold text-2xl sm:text-3xl text-[#F5F5F7]">23</span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">FORM</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A84FF]" />
                    <span className="font-sans font-bold text-sm sm:text-base text-[#F5F5F7]">GOOD</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">DEPTH</span>
                  <span className="font-mono font-bold text-lg sm:text-xl text-[#0A84FF]">92%</span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">EXERCISE</span>
                  <span className="font-mono font-medium text-xs sm:text-sm text-[#F5F5F7]">PUSH-UPS</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* 3 Exercise Modes Supported */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
          <div className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.08] space-y-2">
            <span className="font-mono text-[11px] text-[#0A84FF] font-semibold uppercase">EXERCISE // 01</span>
            <h3 className="text-xl font-bold text-[#F5F5F7]">Push-ups & Chest Depth</h3>
            <p className="text-xs text-[#86868B] leading-relaxed">Verifies elbow flexion and chest drop angle to confirm full biomechanical range of motion.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.08] space-y-2">
            <span className="font-mono text-[11px] text-[#0A84FF] font-semibold uppercase">EXERCISE // 02</span>
            <h3 className="text-xl font-bold text-[#F5F5F7]">Squats & Hip Clearance</h3>
            <p className="text-xs text-[#86868B] leading-relaxed">Tracks knee-to-hip trajectory ensuring parallel depth without spine curvature.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.08] space-y-2">
            <span className="font-mono text-[11px] text-[#0A84FF] font-semibold uppercase">EXERCISE // 03</span>
            <h3 className="text-xl font-bold text-[#F5F5F7]">Sit-ups & Core Tension</h3>
            <p className="text-xs text-[#86868B] leading-relaxed">Calculates torso elevation angle from rest to peak contraction in real time.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
