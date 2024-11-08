"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import bitcoinIcon from "@/assets/icons/main/fourthIntro/bitcoin.png";
import ethereumIcon from "@/assets/icons/main/fourthIntro/ethereum.png";
import kaiaIcon from "@/assets/icons/main/fourthIntro/kaia.png";
import polygonIcon from "@/assets/icons/main/fourthIntro/polygon.png";
import bnbIcon from "@/assets/icons/main/fourthIntro/bnb.png";
import aptosIcon from "@/assets/icons/main/fourthIntro/aptos.png";
import arbitrumIcon from "@/assets/icons/main/fourthIntro/arbitrum.png";
import oasysIcon from "@/assets/icons/main/fourthIntro/oasys.png";
import fncyIcon from "@/assets/icons/main/fourthIntro/fncy.png";
import xLayerIcon from "@/assets/icons/main/fourthIntro/x_layer.png";
import scrollIcon from "@/assets/icons/main/fourthIntro/scroll.png";
import arrowDownIcon from "@/assets/icons/main/arrow_down_icon.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface CarouselItem {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

interface DappItem {
  dapp_title_ko: string;
  dapp_description_ko: string;
  logo_url_ko: string;
  tags_ko: string[];
}

export default function FourthIntro({
  datas,
  intro_4_title,
  intro_4_content,
  card1_title,
  card2_title,
}: {
  datas: DappItem[];
  intro_4_title: string;
  intro_4_content: string;
  card1_title: string;
  card2_title: string;
}) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  const [visibleItems, setVisibleItems] = useState(8);

  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 8, datas.length));
  };
  const coins = [
    { name: "Bitcoin", icon: bitcoinIcon },
    { name: "Ethereum", icon: ethereumIcon },
    { name: "Kaia", icon: kaiaIcon },
    { name: "Polygon PoS", icon: polygonIcon },
    { name: "BNB Smart Chain", icon: bnbIcon },
    { name: "Aptos", icon: aptosIcon },
    { name: "Arbitrum One", icon: arbitrumIcon },
    { name: "Oasys", icon: oasysIcon },
    { name: "FNCY", icon: fncyIcon },
    { name: "X Layer", icon: xLayerIcon },
    { name: "Scroll", icon: scrollIcon },
  ];

  const items: CarouselItem[] = datas.map((data: DappItem) => ({
    title: data.dapp_title_ko,
    description: data.dapp_description_ko,
    imageSrc: data.logo_url_ko,
    tags: data.tags_ko,
  }));

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="max-w-[1440px] mx-auto">
          <div
            className={`w-full flex-col justify-start items-start  inline-flex ${
              isMobile || isTablet
                ? "py-20 gap-[60px] px-5"
                : "py-[180px] gap-[160px] px-10"
            }`}
          >
            <div
              className={`self-stretch text-center text-black uppercase leading-[33.60px] ${
                isMobile
                  ? "text-2xl font-pretendardBold"
                  : isTablet
                  ? "text-4xl font-pretendardSemibold"
                  : "text-[56px] font-pretendardSemibold"
              }`}
            >
              {intro_4_title}&nbsp;
              {isMobile && <br />}
              {intro_4_content}
            </div>

            <div
              className={`self-stretch flex-col justify-start items-start flex ${
                isMobile ? "gap-6" : isTablet ? "px-8 gap-10" : "gap-[60px]"
              }`}
            >
              <div
                className={`self-stretch flex flex-col justify-center items-center ${
                  isDesktop ? "gap-7" : "gap-4"
                }`}
              >
                <div
                  className={`${
                    isDesktop ? "w-10 h-0.5" : "w-6 h-px"
                  }  bg-[#454854]`}
                />
                <div
                  className={`self-stretch text-center text-[#454854] ${
                    isDesktop ? "text-[32px]" : "text-xl"
                  } font-pretendardBold uppercase`}
                >
                  {card1_title}
                </div>
              </div>
              <div
                className={`flex justify-center flex-wrap ${
                  isMobile ? "gap-2" : "gap-3"
                } px-[1px]`}
              >
                {coins.map((item) => (
                  <div
                    key={item.name}
                    className="self-stretch justify-center items-center gap-2 inline-flex"
                  >
                    <div
                      className={`${
                        isMobile
                          ? "p-3"
                          : isTablet
                          ? "px-[16px] py-[12px]"
                          : "px-[32px] py-[20px]"
                      } bg-[#e3e4e8] rounded-[80px] justify-center items-center gap-1.5 flex`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={isDesktop ? 48 : 24}
                        height={isDesktop ? 48 : 24}
                      />
                      <div
                        className={`text-center text-black  font-pretendardMedium ${
                          isDesktop ? "text-xl" : "text-[15px]"
                        }`}
                      >
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`self-stretch flex-col justify-start items-start flex ${
                isMobile ? "gap-6" : isTablet ? "gap-10" : "gap-[60px]"
              }`}
            >
              <div
                className={`self-stretch flex-col justify-center items-center ${
                  isDesktop ? "gap-7" : "gap-4"
                } flex`}
              >
                <div
                  className={`${
                    isDesktop ? "w-10 h-0.5" : "w-6 h-px"
                  }  bg-[#454854]`}
                />
                <div
                  className={`self-stretch text-center text-[#454854] font-pretendardBold uppercase  ${
                    isDesktop
                      ? "text-[32px] leading-[44.80px]"
                      : "text-xl leading-7"
                  }`}
                >
                  {card2_title}
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2">
                {items.map((item) => (
                  <div
                    className="grow shrink basis-0 px-3 py-5 bg-[#ececec] rounded-xl flex-col justify-start items-center gap-3 inline-flex"
                    key={item.title}
                  >
                    <div className="w-[132px] h-10 relative flex justify-center items-center">
                      <div className="w-[37.78px] h-[37.78px] rounded-[22.22px]">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          width={41.56}
                          height={41.56}
                          className="rounded-[22.22px]"
                        />
                      </div>
                    </div>
                    <div className="self-stretch text-center text-black text-base font-pretendardSemibold">
                      {item.title}
                    </div>
                    <div className="self-stretch h-[38px] flex-col justify-start items-start gap-1 flex">
                      {item.tags.map((tag) => (
                        <div
                          key={tag}
                          className="self-stretch text-center text-[#5c6070] text-sm font-pretendardMedium"
                        >
                          #{tag}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {visibleItems < items.length && (
                  <div onClick={handleShowMore} className="cursor-pointer mt-4">
                    <Image
                      src={arrowDownIcon}
                      alt="arrowRight"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
