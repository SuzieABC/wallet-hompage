"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "@/utils/localization/client";
import type { LocaleTypes } from "@/utils/localization/settings";
import logo_image from "@/assets/images/footer/footer_logo_image.png";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

export default function Footer() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const company = [
    { name: t("footer.company.download"), url: `/${locale}#download` },
    {
      name: t("footer.company.terms_of_service"),
      url: `https://dev-api.id.myabcwallet.com/query/v2/terms?language=${locale}&service=wallet-homepage`,
    },
    {
      name: t("footer.company.privacy_policy"),
      url: `https://dev-api.id.myabcwallet.com/query/v2/privacy?language=${locale}&service=wallet-homepage`,
    },
  ];
  const connect = [
    {
      sns_name: t("footer.connect.facebook"),
      url: "https://www.facebook.com/abcwallet2022",
    },
    { sns_name: t("footer.connect.x"), url: "https://x.com/AhnLab_ABC" },
    {
      sns_name: t("footer.connect.medium"),
      url: "https://medium.com/@AhnLabBlockchainCompany",
    },
    {
      sns_name: t("footer.connect.youtube"),
      url: "https://www.youtube.com/@ABC_Wallet",
    },
  ];

  const family = [
    {
      name: t("footer.family.about_us"),
      url: `https://ahnlabblockchain.company/`,
    },
    { name: t("footer.family.abc_waas"), url: "https://abcwaas.com/" },
    { name: t("footer.family.bic_scan"), url: "https://bicscan.io/" },
  ];

  return (
    <>
      {isLoading && (
        <div
          className={`max-w-[1440px] mx-auto pb-20 flex-col justify-start items-start gap-2.5 min-w-[320px] overflow-x-hidden min-h-screen ${
            isDesktop ? "px-[40px] pt-[48px]" : "px-4 pt-10"
          }`}
        >
          <div
            className={`self-stretch ${
              isDesktop ? "flex-row" : "flex-col"
            } justify-between items-start gap-12 flex`}
          >
            <div className="px-2 flex-col justify-start items-center gap-2.5 flex">
              <Image
                src={logo_image}
                alt="logo"
                width={isDesktop ? 147 : 126.998}
                height={isDesktop ? 20.3 : 17.41}
              />
            </div>

            <div
              className={`self-stretch ${
                isDesktop ? "flex-row" : "flex-col"
              } justify-start items-start gap-[20px] flex`}
            >
              <div className="self-stretch flex-col justify-start items-start gap-0.5 flex">
                <div
                  className={`px-2 justify-center items-center gap-2.5 inline-flex ${
                    isDesktop && "pr-[95px]"
                  }`}
                >
                  <span
                    className={`text-black text-[15px] font-bold font-archivoBold ${
                      isDesktop ? "pb-[10px] text-[17px]" : "text-[15px]"
                    }`}
                  >
                    Company
                  </span>
                </div>
                <div
                  className={`justify-start inline-flex ${
                    isDesktop ? "flex-col" : "items-center gap-2"
                  }`}
                >
                  {company.map((item, index) => (
                    <Link
                      className={`${
                        isDesktop ? "px-[8px] py-[6px]" : "px-2 py-3.5"
                      } justify-start items-center gap-2.5 flex`}
                      key={item.name}
                      href={item.url}
                      target={index === 0 ? "_self" : "_blank"}
                    >
                      <div
                        className={`text-[#5c6070] ${
                          index === 2
                            ? "font-pretendardBold"
                            : "font-pretendardMedium"
                        } tracking-tight ${
                          isDesktop ? "text-[16px]" : "text-[15px]"
                        }`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-0.5 flex">
                <div
                  className={`px-2 justify-start items-center gap-2.5 inline-flex ${
                    isDesktop && "pr-[85px]"
                  }`}
                >
                  <span
                    className={`text-black font-archivoBold ${
                      isDesktop ? "pb-[10px] text-[17px]" : "text-[15px]"
                    }`}
                  >
                    Connect
                  </span>
                </div>
                <div
                  className={`justify-start items-start inline-flex ${
                    isDesktop ? "flex-col" : "gap-2"
                  }`}
                >
                  {connect.map((item) => (
                    <Link
                      className={`${
                        isDesktop ? "px-[8px] py-[6px]" : "px-2 py-3.5"
                      } justify-start items-center gap-2.5 flex`}
                      key={item.sns_name}
                      href={item.url}
                      target="_blank"
                    >
                      <div
                        className={`text-[#5c6070] font-pretendardMedium tracking-tight ${
                          isDesktop ? "text-[16px]" : "text-[15px]"
                        }`}
                      >
                        {item.sns_name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-0.5 flex">
                <div
                  className={`px-2 justify-center items-center gap-2.5 inline-flex ${
                    isDesktop && "pr-[99px]"
                  }`}
                >
                  <span
                    className={`text-black  font-archivoBold ${
                      isDesktop ? "pb-[10px] text-[17px]" : "text-[15px]"
                    }`}
                  >
                    Family
                  </span>
                </div>
                <div
                  className={`justify-start items-start inline-flex ${
                    isDesktop ? "flex-col" : "gap-2"
                  }`}
                >
                  {family.map((item) => (
                    <Link
                      className={`${
                        isDesktop ? "px-[8px] py-[6px]" : "px-2 py-3.5"
                      } justify-start items-center gap-2.5 flex`}
                      key={item.name}
                      href={item.url}
                    >
                      <div
                        className={`text-[#5c6070] font-pretendardMedium tracking-tight ${
                          isDesktop ? "text-[16px]" : "text-[15px]"
                        }`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`px-2 justify-start items-center border] ${
              isDesktop ? "mt-[10px]" : "mt-[35px]"
            }`}
          >
            <p
              className={`text-[#5c6070] tracking-tight text-[11px] font-pretendardRegular`}
            >
              © AhnLab Blockchain Company. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
