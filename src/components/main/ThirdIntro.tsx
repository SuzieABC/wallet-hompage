"use client";

import Image from "next/image";
import icon1 from "@/assets/icons/main/icon_01.png";
import icon2 from "@/assets/icons/main/icon_02.png";
import icon3 from "@/assets/icons/main/icon_03.png";
import icon4 from "@/assets/icons/main/icon_04.png";
import icon5 from "@/assets/icons/main/icon_05.png";
import icon6 from "@/assets/icons/main/icon_06.png";

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
  card_5_title: string;
  card_5_content: string;
  card_6_title: string;
  card_6_content: string;
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
  card_5_title,
  card_5_content,
  card_6_title,
  card_6_content,
}: IntroOneProps) {
  const functions = [
    { icon: icon1, title: card_1_title, content: card_1_content },
    { icon: icon2, title: card_2_title, content: card_2_content },
    { icon: icon3, title: card_3_title, content: card_3_content },
    { icon: icon4, title: card_4_title, content: card_4_content },
    { icon: icon5, title: card_5_title, content: card_5_content },
    { icon: icon6, title: card_6_title, content: card_6_content },
  ];
  return (
    <div className="w-full h-[1134px] px-5 py-20 bg-[#6d23ef] flex-col justify-start items-start gap-10 inline-flex">
      <div className="self-stretch h-[68px] text-white text-2xl font-pretendardBold uppercase leading-[33.60px]">
        {title}
        <br />
        {content}
      </div>
      <div className="self-stretch h-[866px] flex-col justify-start items-start gap-4 flex">
        {functions.map((item, index) => (
          <div
            className="self-stretch h-[131px] px-5 py-4 bg-[#641ce4] rounded-xl border border-white/20 justify-start items-center gap-5 inline-flex"
            key={index}
          >
            <Image src={item.icon} alt="icon" width={28} height={28} />
            <div
              className={`grow shrink basis-0 flex-col justify-start items-start ${
                index !== 4 ? "gap-2" : ""
              } inline-flex`}
            >
              <div className="self-stretch text-white text-lg font-pretendardBold uppercase">
                {item.title}
              </div>
              {index !== 2 && (
                <div
                  className={` text-white  uppercase leading-snug ${
                    index === 5
                      ? "px-3 py-1.5 bg-gradient-to-r from-[#0d6eee] to-[#c021ff] rounded-lg border-[1px] border-white/30 justify-center items-center gap-2.5 inline-flex font-pretendardRegular"
                      : index === 4
                      ? "text-lg font-pretendardBold leading-[25.20px]"
                      : "self-stretch text-[15px] font-pretendardRegular"
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
  );
}
