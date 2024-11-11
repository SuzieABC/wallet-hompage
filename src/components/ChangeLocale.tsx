"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import worldIcon from "@/assets/icons/world_icon.png";
import Image from "next/image";

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
  const urlSegments = useSelectedLayoutSegments();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

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

  return (
    <div>
      {isDesktop || isLargeDesktop ? (
        <div className="relative">
          <Image
            src={worldIcon}
            alt="world icon"
            width={24}
            height={24}
            className="cursor-pointer m-[16px]"
            onClick={handleToggleDropdown}
          />
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-12 left-0 bg-white border border-solid border-[#ccc] rounded-xl shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] z-10 cursor-pointer w-20"
            >
              {LANGUAGES.map(({ code, label }) => (
                <div key={code}>
                  <div
                    className="px-4 py-2 cursor-pointer flex justify-center"
                    onClick={() => handleLocaleChange(code)}
                  >
                    <span className="text-black text-[14px]">{label}</span>
                  </div>
                  <div className="self-stretch h-[0px] border border-black/20" />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-white">
          {LANGUAGES.map(({ code, label }) => (
            <span
              key={label}
              className="mr-2 cursor-pointer"
              onClick={() => handleLocaleChange(code)}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLocale;
