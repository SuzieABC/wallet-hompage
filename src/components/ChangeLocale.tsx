"use client";

import React, { useState } from "react";
import {
  /* useParams, */
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import worldIcon from "@/assets/icons/world_icon.png";
import Image from "next/image";

const ChangeLocale = () => {
  const router = useRouter();
  /* const params = useParams(); */
  const urlSegments = useSelectedLayoutSegments();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림 여부 상태

  const handleLocaleChange = (newLocale: string) => {
    // 언어 변경 후 드롭다운 닫기
    setIsDropdownOpen(false);
    router.push(`/${newLocale}/${urlSegments.join("/")}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 열기/닫기
  };

  return (
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
        <div className="absolute top-10 left-0 bg-white border border-solid border-[#ccc] rounded-[5px] shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] z-10 cursor-pointer">
          <div
            className="px-4 py-2 cursor-pointer"
            onClick={() => handleLocaleChange("ko")}
          >
            <span className="text-black text-[14px]">한국어</span>
          </div>
          <div
            className="px-4 py-2 cursor-pointer"
            onClick={() => handleLocaleChange("en")}
          >
            <span className="text-black text-[14px]">English</span>
          </div>
          <div
            className="px-4 py-2 cursor-pointer"
            onClick={() => handleLocaleChange("jp")}
          >
            <span className="text-black text-[14px]">日本語</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLocale;
