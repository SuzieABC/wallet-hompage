"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import DeepLinkButton from "@/components/elements/DeepLinkButton";
import backgroundMobile from "@/assets/images/main/top/top_background_mobile_image.png";
import backgroundTablet from "@/assets/images/main/top/top_background_tablet_image.png";
import backgroundDesktop from "@/assets/images/main/top/top_background_desktop_image.png";
import backgroundLargeDesktop from "@/assets/images/main/top/top_background_large_desktop_image.png";
import mobile from "@/assets/images/main/top/top_mobile_image.png";
import tablet from "@/assets/images/main/top/top_tablet_image.png";
import desktop from "@/assets/images/main/top/top_desktop_image.png";

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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          id="download"
          className={`scroll-smooth flex items-center ${
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
                isMobile || isTablet || isDesktop
                  ? "items-center"
                  : "items-start"
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
                <div
                  className={`${
                    isMobile && "flex flex-wrap justify-center items-center"
                  }`}
                >
                  <span
                    className={`text-black text-center ${
                      isMobile
                        ? `text-[38px] font-pretendardBold ${
                            windowWidth < 359 && "mx-[50px]"
                          }`
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
                    className={`text-[#6d23ef] font-archivoSemibold leading-none text-center ${
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
                    className={`text-[#6d23ef] leading-none  ${
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
              <DeepLinkButton />
            </div>

            <Image
              src={isMobile ? mobile : isTablet ? tablet : desktop}
              alt="mobile"
              priority
              className={`h-auto ${isMobile && "w-[320px]"} ${
                isTablet && "w-[528.84px]"
              } ${isDesktop && "w-[649.53px]"} ${
                isLargeDesktop && "w-[788.083px]"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
}
