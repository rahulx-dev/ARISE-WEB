"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { resolveCloudinaryVideoUrl } from "@/lib/videoUrl";
import { CheckCircle2, Cpu } from "lucide-react";

export default function AriseVisionTracker() {
  const videoUrl = resolveCloudinaryVideoUrl(
    "https://player.cloudinary.com/embed/?cloud_name=idadrqss&public_id=erasio_Smartphone_advertisement_for_ARISE_1080p_20260915165523-upscaled-2x"
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <section id="vision" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Every rep counted. <br />
            <span className="text-[#86868B]">Zero wearables required.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            ARISE uses 60FPS on-device neural vision to analyze skeletal joint angles and form depth in real-time. Zero video leaves your device.
          </p>
        </div>

        {/* Seamless Hardware Display Bezel with Autoplaying Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl sm:rounded-[40px] bg-gradient-to-b from-[#161922] via-[#0B0D12] to-[#040507] border border-white/[0.16] p-3.5 sm:p-5 shadow-[0_35px_90px_-20px_rgba(0,0,0,0.98),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden group"
        >
          {/* Inner Video Screen Container */}
          <div className="relative w-full aspect-video sm:h-[600px] rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#000000] flex items-center justify-center">
            
            {/* Seamless Autoplaying Video (No Browser Controls) */}
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center opacity-90 pointer-events-none"
            />

            {/* Subtle Gradient Edge Fades */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-transparent to-[#000000]/60 pointer-events-none" />

            {/* Clean Apple HUD Overlay Elements */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none">
              
              {/* Top HUD Bar */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#08090C]/85 border border-[#0A84FF]/30 backdrop-blur-xl font-mono text-[11px] text-[#F5F5F7] shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
                  <span className="font-semibold uppercase tracking-wider">AI POSE TRACKING</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08090C]/85 border border-white/[0.1] backdrop-blur-xl font-mono text-[11px] text-[#86868B] shadow-xl">
                  <Cpu className="w-3.5 h-3.5 text-[#0A84FF]" />
                  <span>ON-DEVICE ONLY</span>
                </div>
              </div>

              {/* Bottom Real-Time Telemetry Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#08090C]/90 border border-white/[0.12] p-4 sm:p-5 rounded-2xl backdrop-blur-2xl max-w-3xl shadow-2xl">
                <div>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">REPS LOGGED</span>
                  <span className="font-sans font-bold text-2xl sm:text-3xl text-[#F5F5F7]">23</span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">FORM</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A84FF]" />
                    <span className="font-sans font-bold text-sm sm:text-base text-[#F5F5F7]">PRISTINE</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">ACCURACY</span>
                  <span className="font-mono font-bold text-lg sm:text-xl text-[#0A84FF]">94.2%</span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">EXERCISE</span>
                  <span className="font-mono font-medium text-xs sm:text-sm text-[#F5F5F7]">PUSH-UPS</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* 3 Supported Core Exercises */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
          <div className="p-7 rounded-3xl bg-[#08090C] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-3">
            <span className="font-mono text-[11px] text-[#0A84FF] font-semibold uppercase tracking-wider">PUSH-UPS</span>
            <h3 className="text-xl font-bold text-[#F5F5F7]">Push-ups & Chest Depth</h3>
            <p className="text-xs text-[#86868B] leading-relaxed">Verifies elbow flexion and chest drop angle to confirm full biomechanical range of motion.</p>
          </div>

          <div className="p-7 rounded-3xl bg-[#08090C] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-3">
            <span className="font-mono text-[11px] text-[#0A84FF] font-semibold uppercase tracking-wider">SQUATS</span>
            <h3 className="text-xl font-bold text-[#F5F5F7]">Squats & Hip Clearance</h3>
            <p className="text-xs text-[#86868B] leading-relaxed">Tracks knee-to-hip trajectory ensuring parallel depth without spine curvature.</p>
          </div>

          <div className="p-7 rounded-3xl bg-[#08090C] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-3">
            <span className="font-mono text-[11px] text-[#0A84FF] font-semibold uppercase tracking-wider">SIT-UPS</span>
            <h3 className="text-xl font-bold text-[#F5F5F7]">Sit-ups & Core Tension</h3>
            <p className="text-xs text-[#86868B] leading-relaxed">Calculates torso elevation angle from rest to peak contraction in real time.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
