"use client";

import Image from "next/image";
import hexagonIcon from "@/assets/icons/hexagon_icon.png";
import card1 from "@/assets/images/main/firstIntro/card1_image.png";
import card2 from "@/assets/images/main/firstIntro/card2_image.png";
import card3 from "@/assets/images/main/firstIntro/card3_image.png";
import card3Cut from "@/assets/images/main/firstIntro//card3_cut_image.png";
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

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center w-full relative">
      <div
        className={`flex flex-col   ${
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
              <span className="inline-block ml-2 text-[#6d23ef] text-2xl font-pretendardBold uppercase leading-[33.60px]">
                {title_2}
              </span>
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
              <span
                className={`inline-block text-black ${
                  isTablet
                    ? "text-[36px] leading-[46.08px]"
                    : "text-[56px] leading-[78.40px]"
                } font-pretendardSemibold uppercase`}
              >
                {title_2}&nbsp;
              </span>
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
      <div
        className={`w-full ${
          isMobile || isTablet
            ? "px-[20px] overflow-x-auto space-x-4 mb-[80px] flex"
            : "px-[40px] grid gap-6 mb-[180px]"
        }`}
        style={{
          gridTemplateColumns: isDesktop || isLargeDesktop ? "1fr 1fr" : "1fr",
          gridTemplateRows: isDesktop || isLargeDesktop ? "auto auto" : "auto",
        }}
      >
        {cards.map((item, index) => (
          <div
            className={`${
              isMobile
                ? "w-[280px]"
                : isTablet
                ? "w-[340px]"
                : index === 2
                ? "w-full col-span-2"
                : "w-full"
            } rounded-xl gap-2.5`}
            key={item.title}
            style={{
              // Make the third card span across the width on desktop
              gridColumn:
                (isDesktop || isLargeDesktop) && index === 2
                  ? "1 / span 2"
                  : "auto",
              // Adjust card width based on viewport
              width: isDesktop || isLargeDesktop ? "auto" : undefined,
            }}
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
                (isDesktop || isLargeDesktop) &&
                "hover:bg-[#6F49E2] hover:text-white"
              } ${
                (isDesktop || isLargeDesktop) && index === 2
                  ? "flex-row w-full"
                  : "flex-col"
              } items-start w-full`}
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
                } mx-auto`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
