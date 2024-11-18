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
  archivoRegular,
  archivoMedium,
  archivoSemibold,
  archivoBold,
  outfitExtrabold,
} from "@/styles/fonts";
import "@/styles/globals.css";

/* TODO */
export const metadata: Metadata = {
  metadataBase: new URL("https://myabcwallet.io/"),

  title: "ABC Wallet - AhnLab Blockchain Company",
  description: "Stay Secure, Explore Freely",
  openGraph: {
    images: [
      {
        url: "/images/abc_logo.png",
        alt: "ABC Wallet Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = [
    geistSans.variable,
    geistMono.variable,
    pretendard.variable,
    pretendardLight.variable,
    pretendardRegular.variable,
    pretendardMedium.variable,
    pretendardSemibold.variable,
    pretendardBold.variable,
    pretendardExtrabold.variable,
    archivoRegular.variable,
    archivoMedium.variable,
    archivoSemibold.variable,
    archivoBold.variable,
    outfitExtrabold.variable,
  ].join(" ");

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${fontClasses} antialiased bg-white`}>{children}</body>
    </html>
  );
}
