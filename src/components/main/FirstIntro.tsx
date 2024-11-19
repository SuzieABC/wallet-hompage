"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import hexagonIcon_1 from "@/assets/icons/main/hexagon_1_icon.png";
import hexagonIcon_2 from "@/assets/icons/main/hexagon_2_icon.png";
import hexagonIcon_3 from "@/assets/icons/main/hexagon_3_icon.png";
import card1 from "@/assets/images/main/firstIntro/card1_image.png";
import card2 from "@/assets/images/main/firstIntro/card2_image.png";
import card3 from "@/assets/images/main/firstIntro/card3_image.png";
import card3Cut from "@/assets/images/main/firstIntro/card3_cut_image.png";
import largeCard1 from "@/assets/images/main/firstIntro/main_1440_card_1.image.png";
import largeCard2 from "@/assets/images/main/firstIntro/main_1440_card_2.image.png";
import largeCard3 from "@/assets/images/main/firstIntro/main_1440_card_3.image.png";
import largeHoveredCard1 from "@/assets/images/main/firstIntro/main_1440_card_1_hover.image.png";
import largeHoveredCard2 from "@/assets/images/main/firstIntro/main_1440_card_2_hover.image.png";
import largeHoveredCard3 from "@/assets/images/main/firstIntro/main_1440_card_3_hover.image.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
// import HoverVideo from "@/components/elements/HoverVideo";

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
  // title_2,
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
    {
      img: isLargeDesktop ? largeCard1 : card1,
      hovered: isLargeDesktop ? largeHoveredCard1 : card1,
      title: card_1_title,
      content: card_1_content,
      icon: hexagonIcon_1,
    },
    {
      img: isLargeDesktop ? largeCard2 : card2,
      hovered: isLargeDesktop ? largeHoveredCard2 : card2,
      title: card_2_title,
      content: card_2_content,
      icon: hexagonIcon_2,
    },
    {
      img: isDesktop || isLargeDesktop ? largeCard3 : card3,
      hovered: isDesktop || isLargeDesktop ? largeHoveredCard3 : card3Cut,
      title: card_3_title,
      content: card_3_content,
      icon: hexagonIcon_3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 현재 스크롤 위치에 따라 currentIndex 업데이트

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;
      const cardWidth = scrollWidth / cards.length; // 전체 콘텐츠 너비에서 각 카드의 너비 계산
      let newIndex = Math.round(scrollLeft / cardWidth); // 정확한 인덱스 계산을 위해 반올림 사용
      const totalScrollWidth = scrollWidth - offsetWidth;

      // 마지막 카드 도달 시 인덱스 조정
      if (scrollLeft >= totalScrollWidth) {
        newIndex = cards.length - 1;
      }

      setCurrentIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const { scrollWidth, offsetWidth } = containerRef.current; // Total scrollable width and visible width
      const cardWidth = scrollWidth / cards.length; // Calculate each card's width
      const cardPosition = index * cardWidth; // Position of the card
      const centerOffset = (offsetWidth - cardWidth) / 2; // Offset to center the card

      containerRef.current.scrollTo({
        left: cardPosition - centerOffset, // Adjust position to center the card
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`max-w-[1440px] mx-auto flex flex-col items-center w-full relative ${
        isMobile || isTablet ? "mb-[80px]" : "mb-[180px]"
      }`}
      style={{ visibility: windowWidth ? "visible" : "hidden" }}
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
              <span className="text-[#6d23ef] text-2xl font-pretendardBold leading-[33.60px]">
                {title}
              </span>
              {/* <span className="inline-block ml-2 text-[#6d23ef] text-2xl font-pretendardBold uppercase leading-[33.60px]">
                    {title_2}
                  </span> */}
            </div>
            <span className="text-black text-2xl font-pretendardBold leading-[33.60px]">
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
              } font-pretendardSemibold`}
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
                } font-pretendardSemibold`}
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
            ? "px-[20px] space-x-4 mb-[24px] flex overflow-x-auto scrollbar-hidden"
            : "px-[40px] grid gap-6"
        }`}
        style={{
          gridTemplateColumns: isDesktop || isLargeDesktop ? "1fr 1fr" : "1fr",
          gridTemplateRows: isDesktop || isLargeDesktop ? "auto auto" : "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        {cards.map((item, index) => (
          <div
            key={item.title}
            style={{
              gridColumn:
                (isDesktop || isLargeDesktop) && index === 2
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
            } rounded-xl justify-start items-start gap-2.5 flex-shrink-0 group`}
            aria-label={`Go to card ${index + 1}`}
          >
            <div
              className={`inline-flex ${
                isMobile || isTablet
                  ? "pt-5 px-5 gap-5"
                  : index === 2
                  ? `pt-10 ${
                      isLargeDesktop && "group-hover:pt-[28px]"
                    } px-[40px] gap-10 ${isLargeDesktop && "pl-[60px]"}`
                  : isDesktop
                  ? "pt-10 px-[30px] gap-10"
                  : "pt-10 px-[60px] gap-10"
              } bg-[#f3f3f3] text-black rounded-2xl ${
                (isDesktop || isLargeDesktop) && index === 2
                  ? "flex-row w-full"
                  : "flex-col"
              } items-start w-full pointerhover:hover:text-white pointerhover:hover:bg-[#6F49E2] h-auto`}
            >
              <div
                className={`self-stretch flex-col justify-start items-start ${
                  index === 2 && (isDesktop || isLargeDesktop) && "w-[50%]"
                } ${
                  isMobile || isTablet
                    ? "gap-4"
                    : index === 2
                    ? "gap-6 w-full"
                    : "gap-6 pl-[10px]"
                } inline-flex ${isLargeDesktop && "group-hover:pb-[4.5px]"}`}
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
                      ? "text-[20px] leading-[26.80px]"
                      : "text-[28px] leading-[38.64px]"
                  } font-pretendardSemibold`}
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
                  priority={isLargeDesktop}
                  alt="wallet introduction card"
                  className={`${
                    isMobile || isTablet
                      ? "max-w-[240px]"
                      : isDesktop
                      ? "max-w-[420px]"
                      : "max-w-[440px]"
                  } mx-auto w-auto h-auto hidden group-hover:block`}
                />
                // <HoverVideo
                //   videoSrc="https://cdn.sanity.io/files/2epdaewr/production/570221c8d835e1f26f699d1d2dbb04bbe5cf0103.mp4"
                //   posterSrc="https://sanity-images.imgix.net/production/8814733691ec9126ee72c1f73c11a78b2f0c0fc3-1040x1000.png?h=450&amp;dpr=2&amp;w=&amp;auto=format%2Ccompress"
                //   alt="abc wallet"
                // />
              )}
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
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#454854]" : "bg-[#ABAEBA]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
