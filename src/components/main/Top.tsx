"use client";

import Image from "next/image";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import DeepLinkButton from "@/components/elements/DeepLinkButton";
import { usePathname } from "next/navigation";
import backgroundMobile from "@/assets/images/main/top/top_background_mobile_image.png";
import backgroundTablet from "@/assets/images/main/top/top_background_tablet_image.png";
import backgroundDesktop from "@/assets/images/main/top/top_background_desktop_image.png";
import backgroundLargeDesktop from "@/assets/images/main/top/top_background_large_desktop_image.png";
import mobile from "@/assets/images/main/top/top_mobile_image.png";
import tablet from "@/assets/images/main/top/top_tablet_image.png";
import desktop from "@/assets/images/main/top/top_desktop_image.png";
import largeDesktop from "@/assets/images/main/top/top_large_desktop_image.png";

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
  const isLargeDesktop = windowWidth >= 1440 && windowWidth < 1919;
  const isExtraLargeDesktop = windowWidth >= 1920;

  const pathName = usePathname();

  return (
    <div
      id="download"
      className={`scroll-smooth flex items-center ${
        isLargeDesktop || isExtraLargeDesktop ? "w-[100vw]" : "w-full"
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
        visibility: windowWidth ? "visible" : "hidden",
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
            : "pt-[113.43px] flex-row px-[40px] justify-between"
        }`}
      >
        <div
          className={`flex flex-col ${
            isMobile || isTablet || isDesktop ? "items-center" : "items-start"
          }`}
        >
          <div
            className={`flex flex-col ${
              isLargeDesktop || isExtraLargeDesktop
                ? "items-start w-[494px]"
                : "items-center"
            } tracking-[-0.19px]`}
          >
            <span
              className={`text-center text-black font-archivoSemibold largeDesktop:font-archivoBold
                  ${
                    isMobile
                      ? "text-[38px]"
                      : isTablet
                      ? "text-[50px]"
                      : isDesktop
                      ? "text-[64px]"
                      : isLargeDesktop
                      ? "text-[74px]"
                      : "text-[80px] leading-[83.20px]"
                  }
                  `}
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
                    : isLargeDesktop
                    ? "text-[78px] font-pretendardSemibold leading-[100.04px]"
                    : `${
                        pathName === "/ja"
                          ? "leading-[98.4px]"
                          : pathName === "/ko"
                          ? "leading-[95.12px]"
                          : "leading-[97.44px]"
                      } font-pretendardSemibold leading-[100.04px] ${
                        pathName === "/en" ? "text-[84px]" : "text-[82px]"
                      }`
                }`}
              >
                {subtitle_1}&nbsp;
              </span>
              {(isLargeDesktop || isExtraLargeDesktop) && <br />}
              <span
                // className={`text-[#6d23ef] font-archivoSemibold text-center
                //     mobile:text-[38px]
                //     tablet:text-[50px]
                //     desktop:text-[64px] ${
                //       pathName === "/ja" && isExtraLargeDesktop
                //         ? "leading-[92.40px] text-[84px]"
                //         : (pathName === "/en" || pathName === "/ko") &&
                //           isExtraLargeDesktop &&
                //           "leading-[97.44px] text-[84px]"
                //     }`}
                className={`text-[#6d23ef] font-archivoSemibold text-center ${
                  isMobile
                    ? "text-[38px]"
                    : isTablet
                    ? "text-[50px]"
                    : isDesktop
                    ? `text-[64px]`
                    : isLargeDesktop
                    ? "text-[80px]"
                    : "text-[84px]"
                }`}
              >
                {subtitle_2}&nbsp;
              </span>
              {pathName === "/ja" && <br />}
              <span
                className={`text-[#6d23ef] leading-none whitespace-pre
                  mobile:text-[38px] mobile:font-pretendardBold
                  tablet:text-[50px] tablet:font-pretendardSemibold
                  desktop:text-[64px] desktop:font-pretendardSemibold
                  largeDesktop:font-pretendardSemibold ${
                    pathName === "/ja" && isExtraLargeDesktop
                      ? "leading-[92.40px] text-[82px]"
                      : pathName === "/ko" && isExtraLargeDesktop
                      ? "leading-[97.44px] text-[82px]"
                      : pathName === "/en" &&
                        isExtraLargeDesktop &&
                        "leading-[97.44px] text-[84px]"
                  }`}
              >
                {subtitle_3}
              </span>
            </div>
            {(isLargeDesktop || isExtraLargeDesktop) && (
              <p className="pt-[16px] font-pretendardRegular leading-[30px] text-xl">
                {detail}
              </p>
            )}
          </div>
          <DeepLinkButton />
        </div>

        <Image
          src={
            isMobile
              ? mobile
              : isTablet
              ? tablet
              : isDesktop
              ? desktop
              : largeDesktop
          }
          alt="mobile"
          priority
          className={`h-auto ${
            isMobile
              ? "w-[320px]"
              : isTablet
              ? "w-[530px]"
              : isDesktop
              ? "w-[649.53px]"
              : isLargeDesktop
              ? "w-[718px]"
              : "w-[778px]"
          }`}
        />
      </div>
    </div>
  );
}
