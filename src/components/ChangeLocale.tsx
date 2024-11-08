"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  /* useParams, */
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import worldIcon from "@/assets/icons/world_icon.png";
import Image from "next/image";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

const ChangeLocale = () => {
  const router = useRouter();
  /* const params = useParams(); */
  const urlSegments = useSelectedLayoutSegments();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림 여부 상태
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const handleLocaleChange = (newLocale: string) => {
    // 언어 변경 후 드롭다운 닫기
    setIsDropdownOpen(false);
    router.push(`/${newLocale}/${urlSegments.join("/")}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 열기/닫기
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      {isDesktop || isLargeDesktop ? (
        <div className="relative">
          {/* 공 모양 이미지 버튼 */}
          <Image
            src={worldIcon} // 원하는 공 모양 이미지 경로로 수정
            alt="world icon"
            width={24}
            height={24}
            className="cursor-pointer m-[16px]"
            onClick={toggleDropdown}
          />

          {/* 드롭다운 메뉴 */}
          {isDropdownOpen && (
            <div
              className="absolute top-12 left-0 bg-white border border-solid border-[#ccc] rounded-xl shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] z-10 cursor-pointer w-20"
              ref={dropdownRef}
            >
              <div
                className="px-4 py-2 cursor-pointer flex justify-center"
                onClick={() => handleLocaleChange("ko")}
              >
                <span className="text-black text-[14px]">한국어</span>
              </div>
              <div className="self-stretch h-[0px] origin-top-center rotate-180 border border-black/20" />
              <div
                className="px-4 py-2 cursor-pointer flex justify-center"
                onClick={() => handleLocaleChange("en")}
              >
                <span className="text-black text-[14px]">English</span>
              </div>
              <div className="self-stretch h-[0px] origin-top-center rotate-180 border border-black/20" />
              <div
                className="px-4 py-2 cursor-pointer flex justify-center"
                onClick={() => handleLocaleChange("jp")}
              >
                <span className="text-black text-[14px]">日本語</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-white">한국어 | English | 日本語</div>
      )}
    </>
  );
};

export default ChangeLocale;
