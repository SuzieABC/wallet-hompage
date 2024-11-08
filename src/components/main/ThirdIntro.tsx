"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import icon1 from "@/assets/icons/main/icon_01.png";
import icon2 from "@/assets/icons/main/icon_02.png";
import icon3 from "@/assets/icons/main/icon_03.png";
import icon4 from "@/assets/icons/main/icon_04.png";
import icon5 from "@/assets/icons/main/icon_05.png";
import icon6 from "@/assets/icons/main/icon_06.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface IntroOneProps {
  title: string;
  title_2: string;
  content: string;
  card_1_title: string;
  card_1_content: string;
  card_2_title: string;
  card_2_content: string;
  card_3_title: string;
  card_3_content: string;
  card_4_title: string;
  card_4_content: string;
  card_5_title: string;
  card_5_content: string;
  card_6_title: string;
  card_6_content: string;
}

export default function IntroOne({
  title,
  title_2,
  content,
  card_1_title,
  card_1_content,
  card_2_title,
  card_2_content,
  card_3_title,
  card_3_content,
  card_4_title,
  card_4_content,
  card_5_title,
  card_5_content,
  card_6_title,
  card_6_content,
}: IntroOneProps) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const functions = [
    { icon: icon1, title: card_1_title, content: card_1_content },
    { icon: icon2, title: card_2_title, content: card_2_content },
    { icon: icon3, title: card_3_title, content: card_3_content },
    { icon: icon4, title: card_4_title, content: card_4_content },
    { icon: icon5, title: card_5_title, content: card_5_content },
    { icon: icon6, title: card_6_title, content: card_6_content },
  ];

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center w-[100vw] bg-[#6d23ef] overflow-y-scroll">
          <div
            className={`max-w-[1440px] mx-auto h-auto ${
              isMobile || isTablet ? "py-20 px-5" : "py-[180px] px-[40px]"
            }  flex-col justify-start items-start gap-10`}
          >
            <div
              className={`self-stretch h-auto text-white leading-[33.60px] ${
                isMobile
                  ? "text-2xl font-pretendardBold pb-[40px]"
                  : isTablet
                  ? "flex justify-center font-pretendardSemibold text-4xl pb-[40px]"
                  : "flex justify-start font-pretendardSemibold text-[56px] leading-[78.4px] pb-[100px]"
              }`}
            >
              {isMobile || isTablet ? title : title_2}&nbsp;
              {(isMobile || isDesktop || isLargeDesktop) && <br />}
              {content}
            </div>
            <div
              className={`self-stretch grid ${
                isTablet || isDesktop || isLargeDesktop
                  ? "grid-cols-3 gap-4"
                  : "grid-cols-1 gap-3"
              }`}
            >
              {functions.map((item, index) => (
                <div
                  className={`bg-[#641ce4] rounded-xl border border-white/20 pointerhover:hover:bg-[#5209D4] ${
                    isMobile
                      ? "inline-flex justify-start items-center h-[131px] px-5 py-4 gap-5"
                      : isTablet
                      ? "flex flex-col h-[212px] px-5 py-4 gap-5"
                      : isDesktop
                      ? "flex flex-col h-[304px] p-[28px] gap-[60px]"
                      : "flex flex-col h-[402px] w-[402] p-[40px] gap-[60px]"
                  }`}
                  key={index}
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={isDesktop || isLargeDesktop ? 40 : 28}
                    height={isDesktop || isLargeDesktop ? 40 : 28}
                  />
                  <div
                    className={`grow shrink basis-0 flex-col justify-start items-start inline-flex ${
                      index !== 4 && isMobile
                        ? "gap-2"
                        : index !== 4 && isTablet
                        ? "gap-3"
                        : index !== 4 && (isDesktop || isLargeDesktop)
                        ? "gap-5"
                        : ""
                    }`}
                  >
                    <div
                      className={`self-stretch text-white font-pretendardBold uppercase ${
                        isMobile
                          ? "text-lg"
                          : isTablet
                          ? "text-[16px]"
                          : isDesktop
                          ? "text-[20px]"
                          : "text-[28px]"
                      }`}
                    >
                      {item.title}
                    </div>
                    {index !== 2 && (
                      <div
                        className={`text-white uppercase leading-snug ${
                          index === 5
                            ? `px-3 py-1.5 bg-gradient-to-r from-[#0d6eee] to-[#c021ff] rounded-lg border-[1px] border-white/30 justify-center items-center gap-2.5 inline-flex font-pretendardRegular`
                            : index === 4
                            ? `${
                                isMobile
                                  ? "text-[15px]"
                                  : isTablet
                                  ? "text-[16px]"
                                  : isDesktop
                                  ? "text-[20px]"
                                  : "text-[28px]"
                              } font-pretendardBold leading-[25.20px]`
                            : "self-stretch font-pretendardRegular"
                        } ${
                          isMobile
                            ? "text-[15px]"
                            : isTablet
                            ? "text-[14px]"
                            : isDesktop
                            ? "text-[16px]"
                            : "text-[20px]"
                        }`}
                      >
                        {item.content}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
