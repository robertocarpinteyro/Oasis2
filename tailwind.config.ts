import type { Config } from "tailwindcss";

/**
 * Tokens de marca tomados del BrandBook de Oasis Creativa.
 * Paleta: vibrante sobre "ultra black", tipo productora premium.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#131718", // Ultra black
        snow: "#ffffff", // Snow white
        poppy: "#ff1f2b", // Poppy red
        pink: "#ff6ab6", // Deep pink
        mustard: "#ffc315", // Mustard
        emerald: { DEFAULT: "#00b884", dark: "#008c79" },
        sky: "#2cd3f4", // Sky
        ocean: "#0b6fdb", // Blue
        orange: "#ff7500", // Orange
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "25px",
        pill: "100px",
      },
      maxWidth: {
        shell: "1448px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
