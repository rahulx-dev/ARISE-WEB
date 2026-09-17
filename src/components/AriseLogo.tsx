"use client";

import React from "react";

interface AriseLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function AriseLogo({ className = "", size = "md" }: AriseLogoProps) {
  const height = size === "sm" ? 18 : size === "lg" ? 28 : 22;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        height={height}
        viewBox="0 0 160 28"
        fill="currentColor"
        className="text-slate-900 dark:text-white transition-colors"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter A (Futuristic crossbar-less chevron) */}
        <path d="M12 2L2 26H6.5L12 11.5L17.5 26H22L12 2Z" />
        
        {/* Letter R */}
        <path d="M36 2H46C50.5 2 54 4.8 54 9C54 12.2 51.8 14.8 48.5 15.6L55 26H50L44 16H40V26H36V2ZM40 6V12.5H45.5C47.8 12.5 49.5 11 49.5 9.2C49.5 7.5 47.8 6 45.5 6H40Z" />
        
        {/* Letter I */}
        <path d="M72 2H76.5V26H72V2Z" />
        
        {/* Letter S */}
        <path d="M93 26C88 26 84.5 23.5 84 19H88.5C88.8 21.5 90.5 22.5 93 22.5C95.5 22.5 97.2 21.3 97.2 19.5C97.2 17.8 95.8 16.8 92.5 16L91 15.6C86.5 14.5 84.5 12.2 84.5 8.5C84.5 4.5 88 2 93 2C97.5 2 101 4.5 101.5 8.5H97C96.5 6.2 95 5.5 93 5.5C90.8 5.5 89 6.5 89 8.2C89 9.8 90.2 10.8 93.5 11.6L95 12C99.8 13.2 102 15.5 102 19.5C102 23.8 98.2 26 93 26Z" />
        
        {/* Letter E */}
        <path d="M120 2H136V6H124.5V12H134V16H124.5V22H136V26H120V2Z" />
      </svg>
    </div>
  );
}
