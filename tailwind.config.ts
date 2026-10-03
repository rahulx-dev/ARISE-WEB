import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'SF Pro Text'",
          "'Inter'",
          "'Geist'",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "'SF Mono'",
          "'JetBrains Mono'",
          "'Geist Mono'",
          "ui-monospace",
          "monospace",
        ],
      },
      colors: {
        obsidian: "#000000",
        graphite: {
          950: "#040507",
          900: "#08090C",
          850: "#0D0F14",
          800: "#111318",
          700: "#181B22",
          600: "#222630",
          500: "#323744",
        },
        arise: {
          white: "#F5F5F7",
          gray: "#86868B",
          muted: "#6E6E73",
          dark: "#1D1D1F",
          blue: "#0A84FF",
          "blue-glow": "rgba(10, 132, 255, 0.25)",
          red: "#EF4444",
        },
      },
      boxShadow: {
        "hardware-card": "0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "blue-glow": "0 0 35px -5px rgba(10, 132, 255, 0.3)",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
