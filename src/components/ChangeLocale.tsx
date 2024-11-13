"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import {
  useRouter,
  useSelectedLayoutSegments,
  usePathname,
} from "next/navigation";
import worldIcon from "@/assets/icons/world_icon.png";
import worldLightIcon from "@/assets/icons/world_light_icon.png";
import Image from "next/image";
import { isFloat32Array } from "util/types";

const LANGUAGES = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "jp", label: "日本語" },
];

interface ChangeLocaleProps {
  windowWidth: number;
}

const ChangeLocale = ({ windowWidth }: ChangeLocaleProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const urlSegments = useSelectedLayoutSegments();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = windowWidth >= 1024;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const urlPath = useMemo(() => `/${urlSegments.join("/")}`, [urlSegments]);

  const handleLocaleChange = useCallback(
    (newLocale: string) => {
      setIsDropdownOpen(false);
      router.push(`/${newLocale}${urlPath}`);
    },
    [router, urlPath]
  );

  const handleToggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

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

  console.log("pathName", pathName);

  return (
    <div>
      <div className="relative">
        <Image
          src={isDesktop ? worldIcon : worldLightIcon}
          alt="world icon"
          width={24}
          height={24}
          className={`cursor-pointer ${isDesktop ? "m-[16px]" : "m-[8px]"}`}
          onClick={handleToggleDropdown}
        />
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className={`absolute right-[0px] bg-[#fff] border border-solid rounded-xl shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] z-10 cursor-pointer py-[10px] px-[16px]`}
          >
            {LANGUAGES.map(({ code, label }) => (
              <div key={code}>
                <div
                  className="px-[12px] py-2 cursor-pointer flex justify-center"
                  onClick={() => handleLocaleChange(code)}
                >
                  <span
                    className={`text-[16px] leading-[18px] 
    ${
      (code === "ko" && pathName === "/") || pathName.includes(`/${code}`)
        ? `text-[#000] ${
            code === "en" ? "font-archivoMedium" : "font-pretendardMedium"
          }`
        : `text-[#5c6070] ${
            code === "en" ? "font-archivoRegular" : "font-pretendardRegular"
          }`
    } `}
                  >
                    {label}
                  </span>
                </div>
                {code !== "jp" && (
                  <div className="self-stretch h-[0px] border border-[#E3E4E8] my-[4px]" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeLocale;
