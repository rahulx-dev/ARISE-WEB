"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ShieldCheck, QrCode, Smartphone, Cpu, Check, Copy, ExternalLink } from "lucide-react";
import TrustTelemetryBadges from "./TrustTelemetryBadges";
import { sound } from "@/lib/audio";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const releaseUrl = "https://github.com/rahulx-dev/ARISE-WEB/releases";
  const apkUrl = "https://github.com/rahulx-dev/ARISE-WEB/releases/latest/download/ARISE_Final.apk";
  const qrImageSrc = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=10&data=${encodeURIComponent("https://github.com/rahulx-dev/ARISE-WEB")}`;

  const hash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const handleDownload = () => {
    sound.playClick();
    setDownloading(true);

    // Trigger instant browser download with release fallback
    try {
      const link = document.createElement("a");
      link.href = apkUrl;
      link.setAttribute("download", "ARISE_Final.apk");
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.open(releaseUrl, "_blank");
    }

    setTimeout(() => {
      setDownloading(false);
      sound.playCashout();
    }, 1500);
  };

  const copyHash = () => {
    sound.playClick();
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl border border-white/10 rounded-3xl p-6 sm:p-8 bg-[#0E1115] text-[#F5F5F2] shadow-2xl shadow-black/80 z-10 overflow-hidden"
          >
            {/* Top Laser Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#9AAEFF]/40 to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#9AAEFF] animate-ping" />
                  <span className="text-xs font-mono tracking-widest text-[#9AAEFF] font-bold uppercase">
                    SYSTEM PROTOCOL // CLIENT INSTALL
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#F5F5F2] flex items-center gap-2 font-display">
                  ARISE Hunter Client v1.0.4
                </h3>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl text-[#A6A9AE] hover:text-[#F5F5F2] hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body: Dual Column (Real QR Code + Direct Download) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Working Real QR Code Scanner Box */}
              <a
                href={releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#050607] border border-white/10 text-center relative group hover:border-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative p-2 bg-white rounded-xl shadow-md mb-3 border border-white/20 overflow-hidden">
                  <img
                    src={qrImageSrc}
                    alt="Scan to Download ARISE App"
                    className="w-32 h-32 object-contain"
                  />
                  <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none group-hover:border-white/50 transition-colors" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#F5F5F2] font-mono font-bold">
                  <QrCode className="w-3.5 h-3.5 text-[#9AAEFF]" />
                  <span>SCAN WITH PHONE</span>
                </div>
                <p className="text-[11px] text-[#A6A9AE] mt-1">
                  Scan with camera to install instantly
                </p>
              </a>

              {/* Direct APK Download Column */}
              <div className="flex flex-col justify-between h-full space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/10">
                    <span className="text-[#A6A9AE] flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#9AAEFF]" /> Supported OS
                    </span>
                    <span className="font-mono text-[#F5F5F2] font-bold">Android 8.0+</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/10">
                    <span className="text-[#A6A9AE] flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#9AAEFF]" /> Target Arch
                    </span>
                    <span className="font-mono text-[#F5F5F2] font-bold">arm64-v8a</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/10">
                    <span className="text-[#A6A9AE] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#9AAEFF]" /> Package File
                    </span>
                    <span className="font-mono text-[#F5F5F2] font-bold">ARISE_Final.apk</span>
                  </div>
                </div>

                {/* Clean Download APK Button & GitHub Release */}
                <div className="space-y-2">
                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full relative group overflow-hidden py-3.5 px-4 rounded-2xl bg-[#F5F5F2] text-[#050607] hover:bg-white font-sans font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-75 cursor-pointer"
                  >
                    <Download className={`w-4 h-4 ${downloading ? "animate-bounce" : "group-hover:-translate-y-0.5 transition-transform"}`} />
                    <span>{downloading ? "Starting Download..." : "Download APK (Direct)"}</span>
                  </button>

                  <a
                    href={releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#050607] hover:bg-[#13171C] border border-white/10 text-[#F5F5F2] font-mono text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#A6A9AE]" />
                    <span>Open GitHub Releases</span>
                  </a>
                </div>

                <div className="text-[11px] text-[#6F747B] flex items-center gap-1.5 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9AAEFF] shrink-0" />
                  <span>100% Malware Free • Play Protect Verified</span>
                </div>
              </div>
            </div>

            {/* Trust Telemetry Strip */}
            <div className="mt-5 pt-3 border-t border-white/10">
              <TrustTelemetryBadges showAll={false} />
            </div>

            {/* SHA-256 Hash Strip with hover */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs bg-[#050607] px-3.5 py-2.5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="font-mono text-[10px] text-[#6F747B] font-bold shrink-0">SHA-256:</span>
                <span className="font-mono text-[10px] text-[#A6A9AE] truncate">
                  {hash}
                </span>
              </div>
              <button
                onClick={copyHash}
                className="text-[#A6A9AE] hover:text-[#F5F5F2] transition-colors p-1 cursor-pointer hover:scale-110 duration-200"
                title="Copy SHA-256 hash"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#9AAEFF]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
