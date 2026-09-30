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
        sans: ["'Cabinet Grotesk'", "var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        body: ["'Cabinet Grotesk'", "var(--font-sans)", "sans-serif"],
        display: ["'Clash Display'", "var(--font-display)", "sans-serif"],
        heading: ["'Clash Display'", "var(--font-heading)", "sans-serif"],
        mono: ["'JetBrains Mono'", "var(--font-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        signal: {
          DEFAULT: "#E8FF47",
          hover: "#D4FF00",
          glow: "rgba(232, 255, 71, 0.4)",
        },
        ink: {
          950: "#050508",
          900: "#080812",
          800: "#12122E",
          700: "#1E1E42",
        },
        mist: {
          100: "#F0F0F8",
          300: "#C8C8DC",
          500: "#8C8CA8",
          700: "#50506E",
          900: "#28283C",
        },
        arise: {
          bg: "#050508",
          bgSecondary: "#080812",
          surface: "#0E1018",
          surfaceElevated: "#12122E",
          textPrimary: "#F0F0F8",
          textSecondary: "#A6A9BE",
          textMuted: "#6F748B",
          border: "rgba(255, 255, 255, 0.10)",
          borderHover: "rgba(232, 255, 71, 0.35)",
          accent: "#E8FF47",
          accentSecondary: "#9AAEFF",
          warm: "#FF6B4A",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "subtle-accent": "0 0 25px -5px rgba(154, 174, 255, 0.12)",
        "card-subtle": "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
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
