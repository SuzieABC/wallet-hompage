"use client";

import Image from "next/image";
import abcLogo from "@/assets/images/main/ci_company_logo_image.png";
import shape from "@/assets/images/main/bottom_shape_image.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

export default function Bottom() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  return (
    <div
      className={`flex flex-col items-center w-full relative bg-[#211837] ${
        isLargeDesktop
          ? "pt-[104px] mb-[72px] pb-[166px]"
          : isDesktop
          ? "pt-[104px] pb-[166px]"
          : isTablet
          ? "pt-[90px] pb-[139px] mb-[42px]"
          : "pt-[56px] pb-[92px] mb-[32px]"
      } `}
      style={{
        backgroundImage: `url(${shape.src})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        visibility: windowWidth ? "visible" : "hidden",
      }}
    >
      <Image
        src={abcLogo}
        alt="abc logo"
        width={
          isMobile
            ? 166
            : isTablet
            ? 166
            : isDesktop
            ? 218
            : isLargeDesktop
            ? 218
            : 166
        }
        height={
          isMobile
            ? 38
            : isTablet
            ? 166
            : isDesktop
            ? 50
            : isLargeDesktop
            ? 50
            : 166
        }
      />
      <div
        className={`flex flex-col justify-center items-center text-white font-outfitExtrabold uppercase ${
          isDesktop || isLargeDesktop
            ? "pt-[40px] text-5xl leading-[59.52px]"
            : "pt-[20px] text-4xl leading-[46.08px]"
        } text-center`}
      >
        Stay&nbsp;
        {isMobile && <br />}
        Secure,
        <br />
        Explore&nbsp;
        {isMobile && <br />}
        Freeely
      </div>
    </div>
  );
}
