"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import arrowRight from "@/assets/icons/main/top/top_arrow_right_icon.svg";
import arrowRightWhite from "@/assets/icons/main/top/top_arrow_right_white_icon.svg";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { useParams } from "next/navigation";
import type { LocaleTypes } from "@/utils/localization/settings";

export default function DeepLinkButton() {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const [isHovered, setIsHovered] = useState(false);
  const [storeUrl, setStoreUrl] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string>("");

  const locale = useParams()?.locale as LocaleTypes;

  useEffect(() => {
    // 클라이언트 측에서 navigator 객체를 사용하여 사용자 기기를 감지
    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent : "";

    const isAndroid = /android/i.test(userAgent || "");
    // const isIOS = /iPhone|iPad|iPod|Macintosh|Mac OS X/i.test(userAgent || "");
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent || "");

    const isChrome = /chrome|chromium|crios|Safari/i.test(userAgent || "");

    if (isAndroid) {
      setStoreUrl(
        `https://play.google.com/store/apps/details?id=io.myabcwallet.mpc&hl=${locale}`
      );
      setPlatform("Android");
    } else if (isIOS) {
      setStoreUrl(
        `https://apps.apple.com/${locale}/app/abc-wallet-safe-web3-wallet/id1642837445`
      );
      setPlatform("iOS");
    } else if (isChrome) {
      setPlatform("Chrome");
      setStoreUrl(
        `https://chromewebstore.google.com/detail/abc-wallet/mlhakagmgkmonhdonhkpjeebfphligng?hl=${locale}`
      );
    } else {
      setPlatform("Unknown");
      setStoreUrl(null); // Android나 iOS가 아닌 경우 URL은 null로 유지
    }
  }, [locale]);

  const handleDownloadClick = () => {
    if (storeUrl) {
      window.open(storeUrl, "_blank"); // Open in a new tab
    } else {
      alert(
        `${platform} 기기에서는 앱 다운로드가 지원되지 않거나, 다른 링크로 연결될 수 있습니다.`
      );
    }
  };
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        isDesktop || isLargeDesktop
          ? "border border-[#6d23ef] hover:bg-[#6d23ef] transition-colors duration-300 group"
          : isMobile || isTablet
          ? "bg-[#6d23ef] px-6"
          : "px-[32px]"
      } rounded-[30px] justify-center items-center inline-flex ${
        isMobile
          ? "mb-[40px] mt-[24px] py-3"
          : isTablet
          ? "mb-[20px] mt-[20px] py-3"
          : isDesktop
          ? "mt-[21px] mb-[19.93px] py-3 px-5"
          : "mt-[48px] py-[20px] px-[32px]"
      }`}
      onClick={handleDownloadClick}
    >
      <div
        className={`text-center ${
          isMobile || isTablet
            ? "text-white text-base"
            : isDesktop
            ? "text-black text-base group-hover:text-white"
            : "text-xl group-hover:text-white"
        } font-archivoMedium leading-none flex items-center transition-colors duration-300`}
      >
        {(isDesktop || isLargeDesktop) && (
          <Image
            src={isHovered ? arrowRightWhite : arrowRight}
            alt="arrow right"
            className="mr-[14px] transform transition-all duration-300 group-hover:animate-slideInFromLeft w-auto h-auto"
          />
        )}
        Download
      </div>
    </button>
  );
}
