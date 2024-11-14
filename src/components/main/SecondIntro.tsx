"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import hexagonIcon_1 from "@/assets/icons/hexagon_1_icon.png";
import hexagonIcon_2 from "@/assets/icons/hexagon_2_icon.png";
import hexagonIcon_3 from "@/assets/icons/hexagon_3_icon.png";
import card1 from "@/assets/images/main/secondIntro/second_card1_image.png";
import card2 from "@/assets/images/main/secondIntro/second_card2_image.png";
import card3 from "@/assets/images/main/secondIntro/second_card3_image.png";
import card3Cut from "@/assets/images/main/secondIntro/second_card3_cut_image.png";
import card4 from "@/assets/images/main/secondIntro/second_card4_image.png";
import card4Cut from "@/assets/images/main/secondIntro/second_card4_cut_image.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

import largeCard1 from "@/assets/images/main/secondIntro/second_main_1440_card_1_image.png";
import largeCard2 from "@/assets/images/main/secondIntro/second_main_1440_card_2_image.png";
import largeCard3 from "@/assets/images/main/secondIntro/second_main_1440_card_3_image.png";
import largeCard4 from "@/assets/images/main/secondIntro/second_main_1440_card_4_image.png";
import largeCardHoveredCard1 from "@/assets/images/main/secondIntro/second_main_1440_card_hover_1_image.png";
import largeCardHoveredCard2 from "@/assets/images/main/secondIntro/second_main_1440_card_hover_2_image.png";
import largeCardHoveredCard3 from "@/assets/images/main/secondIntro/second_main_1440_card_hover_3_image.png";
import largeCardHoveredCard4 from "@/assets/images/main/secondIntro/second_main_1440_card_hover_4_image.png";

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
    {
      img: isLargeDesktop ? largeCard1 : card1,
      hovered: isLargeDesktop ? largeCardHoveredCard1 : card1,
      title: card_1_title,
      content: card_1_content,
      icon: hexagonIcon_1,
    },
    {
      img: isLargeDesktop ? largeCard2 : card2,
      hovered: isLargeDesktop ? largeCardHoveredCard2 : card2,
      title: card_2_title,
      content: card_2_content,
      icon: hexagonIcon_2,
    },
    {
      img: isDesktop || isLargeDesktop ? largeCard3 : card3,
      hovered: isLargeDesktop ? largeCardHoveredCard3 : card3,
      title: card_3_title,
      content: card_3_content,
      icon: hexagonIcon_3,
    },
    {
      img: isDesktop || isLargeDesktop ? largeCard4 : card4,
      hovered: isLargeDesktop ? largeCardHoveredCard4 : card4,
      title: card_4_title,
      content: card_4_content,
      icon: hexagonIcon_1,
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;
      const totalScrollWidth = scrollWidth - offsetWidth;

      let newIndex = Math.ceil(scrollLeft / offsetWidth);

      if (scrollLeft >= totalScrollWidth - 5) {
        newIndex = cards.length - 1;
      }
      setCurrentIndex(newIndex);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center bg-[#F5F5F5]">
          {/* 콘텐츠 컨테이너 */}
          <div
            className={`max-w-[1440px] w-full mx-auto flex flex-col items-center relative ${
              isMobile || isTablet ? "mb-[80px]" : "mb-[180px]"
            }`}
          >
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
                className={`text-[#6d23ef] ${
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
                className={`text-black ${
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
              ref={containerRef}
              onScroll={handleScroll}
              className={`w-full ${
                isMobile || isTablet
                  ? "space-x-4 mb-[24px] px-[20px] flex snap-x snap-mandatory overflow-x-auto scrollbar-hidden"
                  : "grid gap-6 px-[40px]"
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
                  } rounded-xl justify-start items-start gap-2.5 flex-shrink-0 group`}
                >
                  <div
                    className={`inline-flex ${
                      isMobile || isTablet
                        ? "pt-5 px-5 gap-5"
                        : index === 2 || index === 3
                        ? `pt-10 group-hover:pt-[28px] px-[40px] gap-10 ${
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
                      } inline-flex ${
                        isLargeDesktop && "group-hover:pb-[4.5px]"
                      }`}
                    >
                      <div
                        className={`pl-px pr-[0.65px] pt-px flex-col justify-center items-center flex ${
                          isLargeDesktop && "group-hover:hidden"
                        }`}
                      >
                        <Image
                          src={item.icon}
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
                        } font-pretendardSemibold `}
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
                      } mx-auto w-auto h-auto ${
                        isLargeDesktop && "group-hover:hidden"
                      }`}
                    />
                    {isLargeDesktop && (
                      <Image
                        src={item.hovered}
                        alt="wallet introduction card"
                        className={`${
                          isMobile || isTablet
                            ? "max-w-[240px]"
                            : isDesktop
                            ? "max-w-[420px]"
                            : "max-w-[440px]"
                        } mx-auto w-auto h-auto hidden group-hover:block`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            {(isMobile || isTablet) && (
              <div className="flex justify-center space-x-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (containerRef.current) {
                        containerRef.current.scrollTo({
                          left: index * containerRef.current.offsetWidth,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? "bg-[#454854]" : "bg-[#ABAEBA]"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
