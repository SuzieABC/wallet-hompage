"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ChangeLocale from "./ChangeLocale";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import logo from "@/assets/images/header/bi_color.png";
import menuIcon from "@/assets/icons/Menu.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { useState } from "react";

export default function Header() {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = ["products", "company"];

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`max-w-[1440px] w-full flex flex-col justify-center z-50 fixed top-0 left-1/2 transform -translate-x-1/2 py-5 ${
        isMobile || isTablet ? "pl-[20px] pr-[16px]" : "px-[40px]"
      }`}
    >
      <div className="flex flex-row w-full justify-between items-center">
        {/* Logo */}
        <div className="flex flex-row items-center cursor-pointer">
          <Image
            src={logo}
            alt="logo"
            width={isDesktop || isLargeDesktop ? 182 : 133}
            height={isDesktop || isLargeDesktop ? 25.14 : 18.4}
          />
        </div>

        {/* Right Section */}
        <div className="flex">
          {/* Desktop Navigation */}
          {isDesktop || isLargeDesktop ? (
            <nav className="flex flex-row justify-center items-center gap-2.5">
              {items.map((item) => (
                <Link
                  key={item}
                  href={`/${locale}/${item}`}
                  className="text-black text-[20px] font-archivoBold p-[16px] leading-none"
                >
                  {t(`${item}`)}
                </Link>
              ))}
              <ChangeLocale />
            </nav>
          ) : (
            <>
              {/* Mobile Menu Icon */}
              <button onClick={handleMenuToggle} className="p-2">
                <Image src={menuIcon} alt="menu" width={24} height={24} />
              </button>
              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="absolute top-16 right-0 bg-gray-800 rounded-lg shadow-lg p-4">
                  <nav className="flex flex-col space-y-3">
                    {items.map((item) => (
                      <Link
                        key={item}
                        href={`/${locale}/${item}`}
                        className="text-white text-base font-semibold font-['Outfit'] uppercase tracking-tight"
                      >
                        {t(`${item}`)}
                      </Link>
                    ))}
                  </nav>
                  <ChangeLocale />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
