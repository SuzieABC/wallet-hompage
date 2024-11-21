"use client";

import Image from "next/image";
import bg from "@/assets/images/main/bottom_background.png";
// import bg_mobile from "@/assets/images/main/bottom_mobile_background.png";
import bg_tablet from "@/assets/images/main/bottom_tablet_background.png";
import logoXLogo from "@/assets/images/main/logo_x_logo_image.png";
import logoXLogoRow from "@/assets/images/main/logo_x_logo_row_image.png";
import phones from "@/assets/images/main/bottom_phone_image.png";
import phones_desktop from "@/assets/images/main/bottom_phone_desktop_image.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
export default function FifthIntro({
  intro_5_title,
  intro_5_content,
}: {
  intro_5_title: string;
  intro_5_content: string;
}) {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  return (
    <div
      style={{
        backgroundImage: `url(${
          isMobile || isTablet ? bg_tablet.src : bg.src
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
        visibility: windowWidth ? "visible" : "hidden",
      }}
    >
      <div
        className={`max-w-[1440px] mx-auto flex items-center w-full relative ${
          isDesktop || isLargeDesktop
            ? `flex-row ${
                isLargeDesktop ? "px-[120px]" : "px-[40px]"
              } justify-between pt-[25px]`
            : "flex-col px-[20px] pt-[60px]"
        } ${isMobile || isTablet ? "pb-[18px]" : "pb-[25px]"}`}
      >
        <div className="flex flex-col items-center">
          <Image
            src={isDesktop || isLargeDesktop ? logoXLogoRow : logoXLogo}
            alt="abc wallet logo"
            width={isLargeDesktop ? 450 : isDesktop ? 389 : 154}
            height={isLargeDesktop ? 36 : isDesktop ? 30 : 90}
          />
          <div
            className={`flex flex-col w-full ${
              isLargeDesktop
                ? "pt-[40px] text-[22px] items-start justify-start"
                : isDesktop
                ? "pt-[40px] text-[20px] items-start justify-start"
                : "pt-[20px] text-[15px] items-center justify-center leading-sung"
            } pb-[24px] text-white font-pretendardMedium`}
          >
            <p>{intro_5_title}</p>
            <p>{intro_5_content}</p>
          </div>
        </div>

        <Image
          src={isDesktop || isLargeDesktop ? phones_desktop : phones}
          alt="phone images"
          width={isDesktop || isLargeDesktop ? 510 : 320}
          height={isDesktop || isLargeDesktop ? 550 : 344}
        />
      </div>
    </div>
  );
}
