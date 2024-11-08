"use client";

import { useState, useEffect } from "react";
import logo_image from "@/assets/images/footer/footer_logo_image.png";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

export default function Footer() {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;
  const service = [
    { name: "다운로드", url: "#download" },
    { name: "개발자", url: "" },
  ];
  const company = [
    { name: "회사 소개", url: "https://ahnlabblockchain.company/" },
    {
      name: "이용약관",
      url: "https://dev-api.id.myabcwallet.com/query/v2/terms?language=ko&service=wallet-homepage",
    },
    {
      name: "개인정보처리방침",
      url: "https://dev-api.id.myabcwallet.com/query/v2/notice?language=ko&service=v2-ext",
    },
  ];
  const connect = [
    { sns_name: "facebook", url: "https://www.facebook.com/abcwallet2022" },
    { sns_name: "X", url: "https://x.com/AhnLab_ABC" },
    { sns_name: "Medium", url: "https://medium.com/@AhnLabBlockchainCompany" },
    { sns_name: "Youtube", url: "https://www.youtube.com/@ABC_Wallet" },
  ];

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <>
      {isLoading && (
        <div
          className={`max-w-[1440px] mx-auto w-full pb-20 bg-white flex-col justify-start items-start gap-2.5 overflow-hidden ${
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
                    isDesktop && "pr-[106px]"
                  }`}
                >
                  <span
                    className={`text-black  font-archivoBold ${
                      isDesktop ? "pb-[10px] text-[17px]" : "text-[15px]"
                    }`}
                  >
                    Service
                  </span>
                </div>
                <div
                  className={`justify-start items-start inline-flex ${
                    isDesktop ? "flex-col" : "gap-2"
                  }`}
                >
                  {service.map((item) => (
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
              <div className="self-stretch flex-col justify-start items-start gap-0.5 flex">
                <div
                  className={`px-2 justify-center items-center gap-2.5 inline-flex ${
                    isDesktop && "pr-[110px]"
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
                      target="_blank"
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
                    isDesktop && "pr-[106px]"
                  }`}
                >
                  <span
                    className={`text-black text-[15px] font-bold font-archivoBold ${
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
            </div>
          </div>

          <div
            className={`px-2 justify-start items-center ${
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
