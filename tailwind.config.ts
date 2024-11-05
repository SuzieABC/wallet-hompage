import type { Config } from "tailwindcss";

const fonts = [
  "pretendard",
  "pretendardLight",
  "pretendardRegular",
  "pretendardMedium",
  "pretendardSemibold",
  "pretendardBold",
  "pretendardExtrabold",
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
    },
  },
  plugins: [],
};
export default config;
