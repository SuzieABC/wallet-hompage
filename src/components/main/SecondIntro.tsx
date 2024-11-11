"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import hexagonIcon from "@/assets/icons/hexagon_icon.png";
import card1 from "@/assets/images/main/secondIntro/second_card1_image.png";
import card2 from "@/assets/images/main/secondIntro/second_card2_image.png";
import card3 from "@/assets/images/main/secondIntro/second_card3_image.png";
import card3Cut from "@/assets/images/main/secondIntro/second_card3_cut_image.png";
import card4 from "@/assets/images/main/secondIntro/second_card4_image.png";
import card4Cut from "@/assets/images/main/secondIntro/second_card4_cut_image.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface IntroOneProps {
  title: string;
  content: string;
  card_1_title: string;
  card_1_content: string;
  card_2_title: string;
  card_2_content: string;
  card_3_title: string;
  card_3_content: string;
  card_4_title: string;
  card_4_content: string;
}

export default function IntroOne({
  title,
  content,
  card_1_title,
  card_1_content,
  card_2_title,
  card_2_content,
  card_3_title,
  card_3_content,
  card_4_title,
  card_4_content,
}: IntroOneProps) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const cards = [
    { img: card1, title: card_1_title, content: card_1_content },
    { img: card2, title: card_2_title, content: card_2_content },
    {
      img: isDesktop || isLargeDesktop ? card3Cut : card3,
      title: card_3_title,
      content: card_3_content,
    },
    {
      img: isDesktop || isLargeDesktop ? card4Cut : card4,
      title: card_4_title,
      content: card_4_content,
    },
  ];

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center bg-[#F5F5F5]">
          {/* 콘텐츠 컨테이너 */}
          <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center relative">
            <div
              className={`flex flex-col w-full ${
                isMobile ? "items-start" : "items-center"
              } ${
                isMobile || isTablet
                  ? "pt-[80px] pb-[40px] px-[20px]"
                  : "pt-[180px] pb-[100px] px-[40px]"
              }`}
            >
              <span
                className={`text-[#6d23ef] uppercase ${
                  isMobile
                    ? "text-2xl font-pretendardBold leading-[33.60px]"
                    : isTablet
                    ? "text-[36px] font-pretendardSemibold leading-[46.08px]"
                    : "text-[56px] font-pretendardSemibold leading-[78.40px]"
                }`}
              >
                {title}
              </span>
              <span
                className={`text-black uppercase ${
                  isMobile
                    ? "text-2xl font-pretendardBold leading-[33.60px]"
                    : isTablet
                    ? "text-[36px] font-pretendardSemibold leading-[46.08px]"
                    : "text-[56px] font-pretendardSemibold leading-[78.40px]"
                }`}
              >
                {content}
              </span>
            </div>
            <div
              className={`w-full ${
                isMobile || isTablet
                  ? "overflow-x-auto space-x-4 mb-[80px] px-[20px] flex"
                  : "grid gap-6 mb-[180px] px-[40px]"
              }`}
              style={{
                gridTemplateColumns:
                  isDesktop || isLargeDesktop ? "1fr 1fr" : "1fr",
                gridTemplateRows:
                  isDesktop || isLargeDesktop ? "auto auto" : "auto",
              }}
            >
              {cards.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    gridColumn:
                      ((isDesktop || isLargeDesktop) && index === 2) ||
                      index === 3
                        ? "1 / span 2"
                        : "auto",
                    width: isDesktop || isLargeDesktop ? "auto" : undefined,
                  }}
                  className={`${
                    isMobile ? "w-[280px]" : isTablet ? "w-[340px]" : "w-full"
                  } rounded-xl justify-start items-start gap-2.5 flex-shrink-0`}
                >
                  <div
                    className={`inline-flex ${
                      isMobile || isTablet
                        ? "pt-5 px-5 gap-5"
                        : index === 2 || index === 3
                        ? `pt-10 px-[40px] gap-10 ${
                            isLargeDesktop && "pl-[60px] pr-[120px]"
                          }`
                        : isDesktop
                        ? "pt-10 px-[30px] gap-10"
                        : "pt-10 px-[60px] gap-10"
                    } bg-[#E3E4E8] text-black  rounded-2xl ${
                      (isDesktop || isLargeDesktop) &&
                      (index === 2 || index === 3)
                        ? "flex-row w-full"
                        : "flex-col"
                    } items-start w-full pointerhover:hover:bg-[#6F49E2] pointerhover:hover:text-white`}
                  >
                    <div
                      className={`self-stretch flex-col justify-start items-start ${
                        isMobile || isTablet
                          ? "gap-4"
                          : index === 2 || index === 3
                          ? "gap-6 w-full"
                          : "gap-6 pl-[10px]"
                      } inline-flex`}
                    >
                      <div
                        className={`"pl-px pr-[0.65px] pt-px flex-col justify-center items-center flex"`}
                      >
                        <Image
                          src={hexagonIcon}
                          alt="hexagon"
                          width={isMobile || isTablet ? 26.35 : 46}
                          height={isMobile || isTablet ? 30.36 : 53}
                        />
                      </div>
                      <div
                        className={`self-stretch ${
                          isMobile || isTablet
                            ? "text-xl leading-[26.80px]"
                            : "text-[28px] leading-[38.64px]"
                        } font-pretendardSemibold uppercase `}
                      >
                        {item.title}
                        <br />
                        {item.content}
                      </div>
                    </div>
                    <Image
                      src={item.img}
                      alt="wallet introduction card"
                      className={`${
                        isMobile || isTablet ? "max-w-[240px]" : "max-w-[420px]"
                      } mx-auto w-auto h-auto`}
                    />
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
