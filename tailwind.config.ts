import type { Config } from "tailwindcss";

const fonts = [
  "pretendard",
  "pretendardLight",
  "pretendardRegular",
  "pretendardMedium",
  "pretendardSemibold",
  "pretendardBold",
  "pretendardExtrabold",
  "archivoRegular",
  "archivoMedium",
  "archivoSemibold",
  "archivoBold",
  "outfitExtrabold",
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: Object.fromEntries(
        fonts.map((font) => [font, [`var(--font-${font})`]])
      ),
      keyframes : {
        slideInFromLeft:{
          '0%': { opacity: '0', transform: 'translateX(0)' },
          '20%': { opacity: '0.5', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 0.3s ease-in-out'
      },
      screens:{
        pointerhover:{
          raw:"(hover:hover) and (pointer: fine)"
        }
      }
    },
  },
  plugins: [],
};
export default config;
