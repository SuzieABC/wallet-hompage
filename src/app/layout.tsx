import type { Metadata } from "next";

import {
  geistSans,
  geistMono,
  pretendard,
  pretendardLight,
  pretendardRegular,
  pretendardMedium,
  pretendardSemibold,
  pretendardBold,
  pretendardExtrabold,
  archivoMedium,
  archivoSemibold,
  archivoBold,
  outfitExtrabold,
} from "@/styles/fonts";
import "@/styles/globals.css";

/* TODO */
export const metadata: Metadata = {
  title: "Ahnlab Blockchain Company",
  description:
    "AhnLab Blockchain Company provides a safe and convenient blockchain wallet service based on AhnLab’s security DNA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${pretendard.variable} 
          ${pretendardLight.variable} 
          ${pretendardRegular.variable}
          ${pretendardMedium.variable}
          ${pretendardSemibold.variable}
          ${pretendardBold.variable}
          ${pretendardExtrabold.variable}
          ${archivoMedium.variable}
          ${archivoSemibold.variable}
          ${archivoBold.variable}
          ${outfitExtrabold.variable}
          antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
