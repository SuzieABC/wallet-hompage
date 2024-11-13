"use client";

import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ChangeLocale from "./ChangeLocale";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import logo from "@/assets/images/header/bi_color.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

export default function Header() {
  const windowWidth = useWindowWidth();
  const pathName = usePathname();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");

  const [isScrolled, setIsScrolled] = useState(false); // 스크롤 상태 추가

  const items = ["support"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 10px 이상 스크롤되면 배경 추가
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`z-50 fixed top-0 left-1/2 transform -translate-x-1/2 ${
            isDesktop || isLargeDesktop ? "py-5" : "py-[7px]"
          } w-full ${isScrolled ? "bg-white" : "bg-transparent"}`}
        >
          <header
            className={`max-w-[1440px] mx-auto w-full flex flex-col justify-center    ${
              isMobile || isTablet ? "pl-[20px] pr-[16px]" : "px-[40px]"
            } `}
          >
            <div className="flex flex-row w-full justify-between items-center">
              {/* Logo */}
              <Link
                className="flex flex-row items-center cursor-pointer"
                href={`/${locale}/`}
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={isDesktop || isLargeDesktop ? 140 : 119}
                  height={isDesktop || isLargeDesktop ? 20 : 16.44}
                />
              </Link>

              {/* Right Section */}
              <div className="flex">
                {/* Desktop Navigation */}

                <nav
                  className={`flex flex-row justify-center items-center ${
                    isDesktop || isLargeDesktop ? "gap-2.5" : ""
                  }`}
                >
                  {items.map((item) => (
                    <Link
                      key={item}
                      href={`/${locale}/${item}`}
                      className={`p-[16px] ${
                        isDesktop || isLargeDesktop
                          ? "text-[18px]"
                          : "text-[15px]"
                      } leading-none ${
                        pathName.includes(item)
                          ? "text-[#000000] font-archivoSemibold "
                          : "text-[#454854] font-archivoMedium "
                      }`}
                    >
                      {t(`${item}`)}
                    </Link>
                  ))}
                  <ChangeLocale windowWidth={windowWidth} />
                </nav>
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
}
