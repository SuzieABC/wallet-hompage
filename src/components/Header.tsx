"use client";

import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ChangeLocale from "./ChangeLocale";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import logo from "@/assets/images/header/bi_color.png";
import menuIcon from "@/assets/icons/Menu.png";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // 스크롤 상태 추가

  const items = ["support"];

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
          className={` z-50 fixed top-0 left-1/2 transform -translate-x-1/2 py-5 w-[100vw] ${
            isScrolled ? "bg-white" : "bg-transparent"
          }`}
        >
          {" "}
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
                  width={isDesktop || isLargeDesktop ? 182 : 133}
                  height={isDesktop || isLargeDesktop ? 25.14 : 18.4}
                />
              </Link>

              {/* Right Section */}
              <div className="flex">
                {/* Desktop Navigation */}
                {isDesktop || isLargeDesktop ? (
                  <nav className="flex flex-row justify-center items-center gap-2.5">
                    {items.map((item) => (
                      <Link
                        key={item}
                        href={`/${locale}/${item}`}
                        className={`text-black text-[20px] p-[16px] leading-none ${
                          pathName.includes(item)
                            ? "text-white font-archivoBold "
                            : "text-[#5C6070] font-archivoMedium "
                        }`}
                      >
                        {t(`${item}`)}
                      </Link>
                    ))}
                    <ChangeLocale windowWidth={windowWidth} />
                  </nav>
                ) : (
                  <>
                    {/* Mobile Menu Icon */}
                    <button onClick={handleMenuToggle} className="p-2">
                      <Image src={menuIcon} alt="menu" width={24} height={24} />
                    </button>
                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                      <div className="absolute top-16 right-0 bg-gray-800 rounded-lg shadow-lg p-4 border">
                        <nav className="flex flex-col space-y-3">
                          {items.map((item) => (
                            <Link
                              key={item}
                              href={`/${locale}/${item}`}
                              className="text-white text-base font-archivoMedium tracking-tight"
                            >
                              {t(`${item}`)}
                            </Link>
                          ))}
                        </nav>
                        <ChangeLocale windowWidth={windowWidth} />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
}
