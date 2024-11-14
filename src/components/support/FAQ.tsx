"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_right_colour from "@/assets/icons/support/support_arrow_right_colour_icon.png";
import arrow_right from "@/assets/icons/support/support_arrow_right_icon.png";
import arrow_down from "@/assets/icons/support/support_arrow_down_icon.png";
import arrow_down_white from "@/assets/icons/support/support_arrow_down_white_icon.png";
// import MOCKDATA from "@/data/NOTICE.json";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface NoticeData {
  title?: string;
  update_time?: string;
  language_type?: number;
  create_time?: string;
  notice_id?: string;
  service_type?: number;
}

interface NoticeProps {
  datas: NoticeData[];
  faq_title: string;
  button: string;
}
export default function FAQ({ datas, faq_title, button }: NoticeProps) {
  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= 1024;

  const [selectedNoticeId, setSelectedNoticeId] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const items: NoticeData[] = datas
    .slice(0, isDesktop ? 5 : 4)
    .map((data: NoticeData) => ({
      title: data.title,
      update_time: data.update_time,
      language_type: data.language_type,
      create_time: data.create_time,
      notice_id: data.notice_id,
      service_type: data.service_type,
    }));

  return (
    <div
      className={`max-w-[1440px] w-full flex flex-col  ${
        isDesktop ? "pt-[100px] pb-[160px] px-[40px]" : "py-[60px] px-[20px]"
      }`}
    >
      <span
        className={`text-black ${
          isDesktop ? "text-[37px] leading-[51.80px]" : "text-[26px] leading-9"
        } font-pretendardBold uppercase`}
      >
        {faq_title}
      </span>
      <ul className={`${isDesktop ? "mt-[20px]" : "mt-[16px]"} `}>
        {items.map((item) => (
          <Link
            key={item.notice_id}
            target="_blank"
            href={`https://dev-api.id.myabcwallet.com/query/v2/faq?language=ko&service=wallet-homepage&id=${item.notice_id}`}
          >
            <li
              className={`flex flex-col justify-between group ${
                isDesktop ? "mt-[40px]" : "mt-[24px]"
              }`}
              onClick={() => setSelectedNoticeId(item.notice_id || null)}
            >
              <div
                className={`flex flex-col w-full py-[11px] pr-[88px] ${
                  isDesktop ? "gap-6" : "gap-4"
                } relative`}
              >
                {/* <p
                className={`text-[#5c6070] ${
                  isDesktop ? "text-base" : "text-sm"
                } font-pretendardMedium`}
              >
                {formatDate(item.update_time)}
              </p> */}
                {isDesktop ? (
                  <p
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                      wordBreak: "break-word",
                    }}
                    className={`text-black font-pretendardSemibold overflow-hidden text-ellipsis text-xl leading-[30px]`}
                  >
                    {item.title}
                  </p>
                ) : (
                  <p
                    className={`text-lg leading-[27px] whitespace-nowrap text-black font-pretendardSemibold overflow-hidden text-ellipsis`}
                  >
                    {item.title}
                  </p>
                )}

                <Image
                  src={
                    selectedNoticeId === item.notice_id
                      ? arrow_right_colour
                      : arrow_right
                  }
                  alt="arrow_right"
                  width={28}
                  height={28}
                  className="absolute right-0 top-1/2 -translate-y-1/2 mr-[10px] group-hover:hidden"
                />
                <Image
                  src={arrow_right_colour}
                  alt="arrow_right_colour"
                  width={28}
                  height={28}
                  className="absolute right-0 top-1/2 -translate-y-1/2 mr-[10px] hidden group-hover:block"
                />
              </div>
              <div
                className={`h-0 border border-[#e3e4e8] ${
                  isDesktop ? "mt-[32px]" : "mt-[24px]"
                }`}
              ></div>
            </li>
          </Link>
        ))}
      </ul>
      <div
        className={`font-pretendardMedium uppercase  flex items-center justify-center`}
      >
        <Link
          target="_blank"
          onClick={() => setSelectedNoticeId(null)}
          href={`https://dev-api.id.myabcwallet.com/query/v2/faq?language=ko&service=wallet-homepage`}
          className={`flex ${
            isDesktop
              ? "mt-[60px] py-[20px] pr-[100px] pl-[90px] text-xl leading-normal text-[#454854] rounded-lg border border-[#5c6070] hover:bg-[#6d23ef] hover:text-[#fff] gap-2"
              : "mt-[28px] py-[14px] text-base leading-tight text-[#5c6070] gap-1"
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span>{button}</span>
          <Image
            src={isHovering ? arrow_down_white : arrow_down}
            alt="arrow_down"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
}
