"use client";

import React, { useRef, useEffect } from "react";
import { Download } from "lucide-react";
import { resolveCloudinaryVideoUrl } from "@/lib/videoUrl";

interface AriseDownloadSectionProps {
  onOpenDownload: () => void;
}

export default function AriseDownloadSection({
  onOpenDownload,
}: AriseDownloadSectionProps) {
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
    <section id="download" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Top Huge Download CTA Banner */}
        <div className="p-10 sm:p-16 rounded-[36px] bg-[#08090C] border border-white/[0.12] text-center space-y-8 relative overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)]">
          {/* Subtle Ambient Blue Flare */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0A84FF]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
              OFFICIAL RELEASE V1.0.0
            </span>
            <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] cursor-default select-none">
              Ready to awaken?
            </h1>
            <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
              Your next level starts outside the screen. Download the official APK and start earning your screen time.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
            <button
              onClick={onOpenDownload}
              className="px-9 py-4 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-sans font-semibold text-sm tracking-tight transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_25px_rgba(255,255,255,0.2)] flex items-center gap-2.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD ARISE APK</span>
            </button>

            <a
              href="#install-guide"
              className="px-7 py-4 rounded-full bg-[#111318] hover:bg-[#181B22] border border-white/[0.08] text-[#86868B] hover:text-[#F5F5F7] font-medium text-sm tracking-tight transition-colors cursor-pointer"
            >
              VIEW INSTALL GUIDE
            </a>
          </div>

          {/* Technical Hash Information */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#6E6E73] relative z-10">
            <span>Android 8+ Compatible</span>
            <span>•</span>
            <span>Stable Release v1.0.0</span>
            <span>•</span>
            <span>File Size: ~48 MB</span>
            <span>•</span>
            <span className="text-[#86868B]">SHA-256: 8f4e2b9c7a10...</span>
          </div>
        </div>

        {/* Video 2: Autoplaying Seamless Hardware Showcase (No Browser Controls) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#08090C] border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0A84FF]">
                SYSTEM CINEMATIC //
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7]">
                Product Showcase Tour
              </h3>
            </div>
            <div className="font-mono text-xs text-[#86868B]">
              1080P · 60 FPS
            </div>
          </div>

          {/* Video Player Frame with Gradient Fade */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#000000] border border-white/[0.08] shadow-2xl">
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center pointer-events-none"
            />
            {/* Subtle Gradient Edge Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-[#000000]/40 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
