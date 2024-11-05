"use client";

import Image from "next/image";
import hexagonIcon from "@/assets/icons/hexagon_icon.png";
import card1 from "@/assets/images/main/firstIntro/card1_image.png";
import card2 from "@/assets/images/main/firstIntro/card2_image.png";
import card3 from "@/assets/images/main/firstIntro/card3_image.png";

interface IntroOneProps {
  title: string;
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
  content,
  card_1_title,
  card_1_content,
  card_2_title,
  card_2_content,
  card_3_title,
  card_3_content,
}: IntroOneProps) {
  const cards = [
    { img: card1, title: card_1_title, content: card_1_content },
    { img: card2, title: card_2_title, content: card_2_content },
    { img: card3, title: card_3_title, content: card_3_content },
  ];
  return (
    <div className="flex flex-col items-center w-full relative">
      <div className="px-[20px] flex flex-col pt-[80px] pb-[40px] items-start w-full">
        <span className="text-[#6d23ef] text-2xl font-pretendardBold uppercase leading-[33.60px]">
          {title}
        </span>
        <span className="text-black text-2xl font-pretendardBold uppercase leading-[33.60px]">
          {content}
        </span>
      </div>
      <div className="w-full overflow-x-auto flex space-x-4 mb-[80px] px-[20px]">
        {cards.map((item) => (
          <div
            className="w-[87.5%] bg-[#f3f3f3] rounded-xl justify-start items-start gap-2.5 flex-shrink-0"
            key={item.title}
          >
            <div className="px-5 pt-5 bg-[#f3f3f3] rounded-2xl flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch h-[102px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="pl-px pr-[0.65px] pt-px flex-col justify-center items-center flex">
                  <Image
                    src={hexagonIcon}
                    alt="hexagon"
                    width={26.35}
                    height={30.36}
                  />
                </div>
                <div className="self-stretch text-black text-xl font-pretendardSemibold uppercase leading-[26.80px]">
                  {item.title}
                  <br />
                  {item.content}
                </div>
              </div>
              <Image src={item.img} alt="wallet introduction card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
