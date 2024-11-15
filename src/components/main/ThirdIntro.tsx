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

  const redirectTo = () => {
    window.open("https://bicscan.io/", "_blank");
  };

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center w-full bg-[#6d23ef] overflow-y-scroll">
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
                  className={`bg-[#6d23ef] rounded-xl border border-white/20 pointerhover:hover:bg-[#641ce4] group ${
                    isMobile
                      ? "inline-flex justify-start items-center px-5 py-4 gap-5 min-h-[131px] h-auto"
                      : isTablet
                      ? "flex flex-col aspect-square px-5 py-4 gap-5"
                      : isDesktop
                      ? "flex flex-col aspect-square p-[28px] gap-[60px]"
                      : "flex flex-col aspect-square p-[40px] gap-[80px]"
                  }`}
                  key={index}
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={isLargeDesktop ? 60 : isDesktop ? 40 : 28}
                    height={isLargeDesktop ? 60 : isDesktop ? 40 : 28}
                    className={`${
                      (isDesktop || isLargeDesktop) &&
                      "transition-transform duration-300 ease-in-out group-hover:translate-y-[-8px]"
                    }`}
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
                      className={`self-stretch text-white font-pretendardBold ${
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
                        onClick={() => index === 5 && redirectTo()}
                        className={`text-white leading-snug ${
                          index === 5
                            ? `rounded-lg  bg-[#641CE4] ${
                                isMobile || isTablet
                                  ? "bg-gradient-to-r"
                                  : "group-hover:bg-gradient-to-r group-hover:border-none border border-white/30"
                              } from-[#6a9ef2] to-[#d466ff]/70 justify-center items-center inline-flex font-pretendardRegular p-[1px] cursor-pointer`
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
                        <span
                          className={`${
                            index === 5 &&
                            `${
                              isMobile || isTablet
                                ? "bg-gradient-to-r"
                                : "group-hover:bg-gradient-to-r"
                            } from-[#0d6eee] to-[#c021ff] w-full h-full px-[16px] py-[10px] rounded-lg`
                          }`}
                        >
                          {item.content}
                        </span>
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
