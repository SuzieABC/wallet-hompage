"use client";

import Image from "next/image";
import Tags from "@/components/elements/Tags";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
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
import avalancheIcon from "@/assets/icons/main/fourthIntro/avalanche.png";
import tWalletIcon from "@/assets/icons/main/fourthIntro/t_wallet.png";
import dapps1024Image from "@/assets/images/main/dapp_1024_image.png";
import dappsMobileImage from "@/assets/images/main/dapp_mobile_image.png";
import dapps1440Image from "@/assets/images/main/dapp_1440_image.png";

export default function FourthIntro({
  intro_4_title,
  intro_4_content,
  card1_title,
  card2_title,
}: {
  intro_4_title: string;
  intro_4_content: string;
  card1_title: string;
  card2_title: string;
}) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const coins = [
    { name: "Bitcoin", icon: bitcoinIcon },
    { name: "Ethereum", icon: ethereumIcon },
    { name: "Kaia", icon: kaiaIcon },
    { name: "Polygon", icon: polygonIcon },
    { name: "BNB", icon: bnbIcon },
    { name: "Aptos", icon: aptosIcon },
    { name: "Arbitrum", icon: arbitrumIcon },
    { name: "Avalanche C", icon: avalancheIcon },
    { name: "Oasys", icon: oasysIcon },
    { name: "FNCY", icon: fncyIcon },
    { name: "T wallet mainnet", icon: tWalletIcon },
    { name: "X Layer", icon: xLayerIcon },
    { name: "Scroll", icon: scrollIcon },
  ];

  return (
    <div
      className="max-w-[1440px] mx-auto"
      style={{ visibility: windowWidth ? "visible" : "hidden" }}
    >
      <div
        className={`w-full flex-col justify-start items-start  inline-flex ${
          isMobile || isTablet ? "py-20 gap-[60px]" : "py-[180px] gap-[160px]"
        }`}
      >
        <div
          className={`self-stretch text-center text-black leading-[33.60px] ${
            isMobile
              ? "text-2xl font-pretendardBold mx-5"
              : isTablet
              ? "text-4xl font-pretendardSemibold mx-5"
              : "text-[56px] font-pretendardSemibold mx-10"
          }`}
        >
          {intro_4_title}&nbsp;
          {isMobile && <br />}
          {intro_4_content}
        </div>

        <div
          className={`self-stretch flex-col justify-start items-start flex ${
            isMobile
              ? "gap-6 mx-5"
              : isTablet
              ? "px-8 gap-10 mx-5"
              : "gap-[60px] mx-10"
          }`}
        >
          <div
            className={`self-stretch flex flex-col justify-center items-center ${
              isDesktop || isLargeDesktop ? "gap-7" : "gap-4"
            }`}
          >
            <div
              className={`${
                isDesktop || isLargeDesktop ? "w-10 h-0.5" : "w-6 h-px"
              }  bg-[#454854]`}
            />
            <div
              className={`self-stretch text-center text-[#454854] ${
                isDesktop || isLargeDesktop ? "text-[32px]" : "text-xl"
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
            <Tags
              coins={coins.map((coin) => ({
                name: coin.name,
                icon: coin.icon.src,
              }))}
            />
          </div>
        </div>

        <div
          className={`self-stretch flex-col justify-start items-start flex ${
            isMobile ? "gap-6" : isTablet ? "gap-10" : "gap-[60px]"
          }`}
        >
          <div
            className={`self-stretch flex-col justify-center items-center ${
              isDesktop || isLargeDesktop ? "gap-7 mx-10" : "gap-4 mx-5"
            } flex`}
          >
            <div
              className={`${
                isDesktop || isLargeDesktop ? "w-10 h-0.5" : "w-6 h-px"
              }  bg-[#454854]`}
            />
            <div
              className={`self-stretch text-center text-[#454854] font-pretendardBold uppercase  ${
                isDesktop || isLargeDesktop
                  ? "text-[32px] leading-[44.80px]"
                  : "text-xl leading-7"
              }`}
            >
              {card2_title}
            </div>
          </div>
          <Image
            src={
              isMobile
                ? dappsMobileImage
                : isDesktop
                ? dapps1024Image
                : dapps1440Image
            }
            alt={"Dapp Image"}
            className={`${isLargeDesktop ? "h-[388.2px]" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
