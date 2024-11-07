"use client";

import Image from "next/image";
import backgroundMobile from "@/assets/images/main/top/top_background_mobile_image.png";
import backgroundTablet from "@/assets/images/main/top/top_background_tablet_image.png";
import backgroundDesktop from "@/assets/images/main/top/top_background_desktop_image.png";
import backgroundLargeDesktop from "@/assets/images/main/top/top_background_large_desktop_image.png";
import mobile from "@/assets/images/main/top/top_mobile_image.png";
import tablet from "@/assets/images/main/top/top_tablet_image.png";
import desktop from "@/assets/images/main/top/top_desktop_image.png";
import arrowRight from "@/assets/icons/main/top_arrow_right_icon.svg";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface TopProps {
  title: string;
  subtitle_1: string;
  subtitle_2: string;
  subtitle_3: string;
  detail: string;
}
export default function Top({
  title,
  subtitle_1,
  subtitle_2,
  subtitle_3,
  detail,
}: TopProps) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  return (
    <div
      className={`flex items-center ${
        isLargeDesktop ? "w-[100vw]" : "w-full"
      } h-lvh`}
      style={{
        backgroundImage: `url(${
          isMobile
            ? backgroundMobile.src
            : isTablet
            ? backgroundTablet.src
            : isDesktop
            ? backgroundDesktop.src
            : backgroundLargeDesktop.src
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div
        className={`flex items-center max-w-[1440px] w-full mx-auto relative h-full ${
          isMobile
            ? "pt-[102px] px-[20px] flex-col"
            : isTablet
            ? "pt-[100px] px-[20px] flex-col"
            : isDesktop
            ? "pt-[140px] px-[40px] flex-col"
            : "pr-[70.54px] pt-[113.43px] flex-row px-[40px] justify-between"
        }`}
      >
        <div
          className={`flex flex-col ${
            isMobile || isTablet || isDesktop ? "items-center" : "items-start"
          }`}
        >
          <div
            className={`mx-[20px] flex flex-col ${
              isLargeDesktop ? "items-start w-[494px]" : "items-center"
            } tracking-[-0.19px]`}
          >
            <span
              className={`text-center text-black font-archivoSemibold leading-none ${
                isMobile
                  ? "text-[38px]"
                  : isTablet
                  ? "text-[50px]"
                  : isDesktop
                  ? "text-[64px]"
                  : "text-[82px]"
              }`}
            >
              {title}
            </span>
            <div>
              <span
                className={`text-black ${
                  isMobile
                    ? "text-[38px] font-pretendardBold"
                    : isTablet
                    ? "text-[50px] font-pretendardSemibold"
                    : isDesktop
                    ? "text-[64px] font-pretendardSemibold"
                    : "text-[86px] font-pretendardSemibold leading-[100.04px]"
                }`}
              >
                {subtitle_1}&nbsp;
              </span>
              {isLargeDesktop && <br />}
              <span
                className={`text-[#6d23ef] font-archivoSemibold leading-none ${
                  isMobile
                    ? "text-[38px]"
                    : isTablet
                    ? "text-[50px]"
                    : isDesktop
                    ? "text-[64px]"
                    : "text-[86px]"
                }`}
              >
                {subtitle_2}&nbsp;
              </span>
              <span
                className={`text-[#6d23ef] leading-none ${
                  isMobile
                    ? "text-[38px] font-pretendardBold"
                    : isTablet
                    ? "text-[50px] font-pretendardSemibold"
                    : isDesktop
                    ? "text-[64px] font-pretendardSemibold"
                    : "text-[86px] font-pretendardSemibold"
                }`}
              >
                {subtitle_3}
              </span>
            </div>
            {isLargeDesktop && (
              <p className="pt-[16px] font-pretendardRegular leading-[30px] text-xl">
                {detail}
              </p>
            )}
          </div>

          <button
            className={` ${
              isMobile || isTablet
                ? "bg-[#6d23ef] px-6"
                : "border border-[#6d23ef] px-5"
            }  rounded-[30px] justify-center items-center inline-flex ${
              isMobile
                ? "mb-[40px] mt-[24px] py-3"
                : isTablet
                ? "mb-[17.42px] mt-[20px] py-3"
                : isDesktop
                ? "mt-[21px] mb-[19px] py-3"
                : "mt-[48px] py-[20px] px-[32px]"
            }`}
          >
            <div
              className={`text-center ${
                isMobile || isTablet
                  ? "text-white text-base"
                  : isDesktop
                  ? "text-black text-base"
                  : "text-xl"
              } font-archivoMedium leading-none flex`}
            >
              {(isDesktop || isLargeDesktop) && (
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  className="mr-[8px]"
                />
              )}
              Download
            </div>
          </button>
        </div>

        <Image
          src={isMobile ? mobile : isTablet ? tablet : desktop}
          alt="mobile"
          className={`${isMobile && "w-[320px]"} ${
            isLargeDesktop && "w-[788.083px]"
          }`}
        />
      </div>
    </div>
  );
}
