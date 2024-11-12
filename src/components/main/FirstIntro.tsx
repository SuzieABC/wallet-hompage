"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import hexagonIcon from "@/assets/icons/hexagon_icon.png";
import card1 from "@/assets/images/main/firstIntro/card1_image.png";
import card2 from "@/assets/images/main/firstIntro/card2_image.png";
import card3 from "@/assets/images/main/firstIntro/card3_image.png";
import card3Cut from "@/assets/images/main/firstIntro/card3_cut_image.png";
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
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  // 현재 스크롤 위치에 따라 currentIndex 업데이트

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;
      const totalScrollWidth = scrollWidth - offsetWidth;

      // Calculate index based on current scroll position
      let newIndex = Math.ceil(scrollLeft / offsetWidth);

      // Check if the user is close to the end
      if (scrollLeft >= totalScrollWidth - 5) {
        newIndex = cards.length - 1; // Set to last index if near the end
      }

      setCurrentIndex(newIndex);
    }
  };

  return (
    <>
      {isLoading && (
        <div
          className={`max-w-[1440px] mx-auto flex flex-col items-center w-full relative ${
            isMobile || isTablet ? "mb-[80px]" : "mb-[180px]"
          }`}
        >
          {/* 제목 섹션 */}
          <div
            className={`flex flex-col ${
              isMobile ? "items-start" : "items-center"
            } ${
              isMobile || isTablet
                ? "pt-[80px] pb-[40px] px-[20px]"
                : "pt-[180px] pb-[100px] px-[40px]"
            } w-full`}
          >
            {isMobile ? (
              <>
                <div className="flex">
                  <span className="text-[#6d23ef] text-2xl font-pretendardBold uppercase leading-[33.60px]">
                    {title}
                  </span>
                  {/* <span className="inline-block ml-2 text-[#6d23ef] text-2xl font-pretendardBold uppercase leading-[33.60px]">
                    {title_2}
                  </span> */}
                </div>
                <span className="text-black text-2xl font-pretendardBold uppercase leading-[33.60px]">
                  {content}
                </span>
              </>
            ) : (
              <>
                <span
                  className={`text-[#6d23ef] ${
                    isTablet
                      ? "text-[36px] leading-[46.08px]"
                      : "text-[56px] leading-[78.40px]"
                  } font-pretendardSemibold uppercase`}
                >
                  {title}
                </span>
                <div className="inline-flex">
                  {/* <span
                    className={`inline-block text-black ${
                      isTablet
                        ? "text-[36px] leading-[46.08px]"
                        : "text-[56px] leading-[78.40px]"
                    } font-pretendardSemibold uppercase`}
                  >
                    {title_2}&nbsp;
                  </span> */}
                  <span
                    className={`text-black ${
                      isTablet
                        ? "text-[36px] leading-[46.08px]"
                        : "text-[56px] leading-[78.40px]"
                    } font-pretendardSemibold uppercase`}
                  >
                    {content}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* 카드 섹션 */}
          <div
            ref={containerRef} // Ref로 가로 스크롤 컨테이너 참조
            onScroll={handleScroll} // 스크롤 이벤트 리스너 추가
            className={`w-full ${
              isMobile || isTablet
                ? "px-[20px] space-x-4 mb-[24px] flex snap-x snap-mandatory overflow-x-auto scrollbar-hidden"
                : "px-[40px] grid gap-6"
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
                  isMobile
                    ? "w-[280px] snap-center"
                    : isTablet
                    ? "w-[340px] snap-center"
                    : index === 2
                    ? "w-full col-span-2"
                    : "w-full"
                } rounded-xl justify-start items-start gap-2.5 flex-shrink-0`}
              >
                <div
                  className={`inline-flex ${
                    isMobile || isTablet
                      ? "pt-5 px-5 gap-5"
                      : index === 2
                      ? `pt-10 px-[40px] gap-10 ${
                          isLargeDesktop && "pl-[60px] pr-[120px]"
                        }`
                      : isDesktop
                      ? "pt-10 px-[30px] gap-10"
                      : "pt-10 px-[60px] gap-10"
                  } bg-[#f3f3f3] text-black rounded-2xl ${
                    (isDesktop || isLargeDesktop) && index === 2
                      ? "flex-row w-full"
                      : "flex-col"
                  } items-start w-full pointerhover:hover:text-white pointerhover:hover:bg-[#6F49E2]`}
                >
                  <div
                    className={`self-stretch flex-col justify-start items-start ${
                      isMobile || isTablet
                        ? "gap-4"
                        : index === 2
                        ? "gap-6 w-full"
                        : "gap-6 pl-[10px]"
                    } inline-flex`}
                  >
                    <div className="pl-px pr-[0.65px] pt-px flex-col justify-center items-center flex">
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
                      } font-pretendardSemibold uppercase`}
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

          {/* 페이지네이션 점 */}
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
      )}
    </>
  );
}
