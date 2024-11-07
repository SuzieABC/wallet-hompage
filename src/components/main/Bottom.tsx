"use client";

import Image from "next/image";
import abcLogo from "@/assets/images/main/ci_company_logo_image.png";
import shape from "@/assets/images/main/bottom_shape_image.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

export default function Bottom() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;
  return (
    <div
      className={`flex flex-col items-center w-full relative bg-[#211837] ${
        isDesktop ? "pt-[104px]" : "pt-[56px]"
      } `}
      style={{
        backgroundImage: `url(${shape.src})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image src={abcLogo} alt="abc logo" width={154} height={90} />
      <div
        className={`flex flex-col justify-center items-center text-white  font-outfitExtrabold uppercase ${
          isDesktop
            ? "pt-[40px] pb-[166px] text-5xl leading-[59.52px]"
            : "pt-[20px] pb-[92px] text-4xl leading-[46.08px]"
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
