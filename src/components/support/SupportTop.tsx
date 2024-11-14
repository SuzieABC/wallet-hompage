"use client";

import bg_tablet from "@/assets/images/support/support_tablet_top_background_image.png";
import bg_desktop from "@/assets/images/support/support_top_background_image.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface SupportTopProps {
  title: string;
}
export default function SupportTop({ title }: SupportTopProps) {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  return (
    <div
      className="w-full text-white flex justify-center items-center text-[50px]"
      style={{
        backgroundImage: `url(${
          isMobile || isTablet
            ? bg_tablet.src
            : isDesktop || isLargeDesktop
            ? bg_desktop.src
            : bg_desktop.src
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <span
        className={`text-center text-black font-pretendardBold   ${
          isMobile || isTablet
            ? "text-[32px] pb-[192px] pt-[210px]"
            : (isDesktop || isLargeDesktop) &&
              "text-[56px] pb-[189px] pt-[184px]"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
