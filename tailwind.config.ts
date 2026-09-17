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
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        arise: {
          void: "#030712",
          card: "#070B16",
          cardElevated: "#0D1322",
          border: "rgba(255, 255, 255, 0.08)",
          blue: "#0A84FF",
          cyan: "#00D2EE",
          gold: "#F59E0B",
          crimson: "#EF4444",
          emerald: "#10B981",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-dark": "radial-gradient(circle at 50% 0%, rgba(10, 132, 255, 0.15) 0%, rgba(0, 210, 238, 0.05) 35%, transparent 70%)",
        "mesh-light": "radial-gradient(circle at 50% 0%, rgba(10, 132, 255, 0.08) 0%, rgba(0, 210, 238, 0.03) 35%, transparent 70%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(0, 210, 238, 0.4)",
        "glow-blue": "0 0 30px -5px rgba(10, 132, 255, 0.45)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.4)",
        "glow-gold": "0 0 25px -5px rgba(245, 158, 11, 0.4)",
        "glow-crimson": "0 0 25px -5px rgba(239, 68, 68, 0.4)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scanline": "scanline 3s linear infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
