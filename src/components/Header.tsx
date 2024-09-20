"use client";

import { /* usePathname, */ useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ChangeLocale from "./ChangeLocale";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import ciCompanyIcon from "@/assets/icons/ci_company_icon.png";
import ciCompanyImage from "@/assets/images/ci_company_image.png";

export default function Header() {
  /*   const pathName = usePathname(); */
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");

  const items = ["products", "company"];

  return (
    <header className="flex flex-col px-10 py-5 w-full">
      <div className="flex flex-row w-full justify-between items-center px-2">
        <div className="flex flex-row justify-between items-center min-w-[245px] w-[245px] cursor-pointer">
          <Image src={ciCompanyIcon} alt="" className="w-[54px]" />
          <Image src={ciCompanyImage} alt="" className="w-[180px]" />
        </div>
        <div className="flex flex-row">
          <nav className="flex flex-row justify-center items-center">
            {items.map((item) => {
              return (
                <Link
                  key={item}
                  href={`/${locale}/${item}`}
                  className="flex flex-row px-5 cursor-pointer justify-center items-center"
                >
                  <span className="w-full h-full text-white text-base font-semibold font-['Outfit'] uppercase tracking-tight">
                    {t(`${item}`)}
                  </span>
                </Link>
              );
            })}
          </nav>
          <ChangeLocale />
        </div>
      </div>
    </header>
  );
}
