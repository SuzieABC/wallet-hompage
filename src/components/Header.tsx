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
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = ["products", "company"];

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex flex-col justify-center pl-[20px] pr-[16px] py-5 w-full absolute top-0 left-0 right-0 z-50 h-[60px] fixed">
      <div className="flex flex-row w-full justify-between items-center">
        {/* Logo */}
        <div className="flex flex-row items-center cursor-pointer">
          <Image src={logo} alt="logo" width={133} height={18.4} />
        </div>

        {/* Right Section */}
        <div className="flex flex-row items-center">
          {/* Desktop Navigation */}
          {windowWidth >= 1024 ? (
            <nav className="flex flex-row justify-center items-center space-x-5">
              {items.map((item) => (
                <Link
                  key={item}
                  href={`/${locale}/${item}`}
                  className="text-white text-base font-semibold font-['Outfit'] uppercase tracking-tight"
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
