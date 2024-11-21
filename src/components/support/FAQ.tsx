"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import ViewAllButton from "@/components/elements/ViewAllButton";
import arrow_right_colour from "@/assets/icons/support/support_arrow_right_colour_icon.png";
import arrow_right from "@/assets/icons/support/support_arrow_right_icon.png";
// import MOCKDATA from "@/data/NOTICE.json";

interface NoticeData {
  question?: string;
  update_time?: string;
  language_type?: number;
  create_time?: string;
  faq_id?: string;
  service_type?: number;
}

interface NoticeProps {
  datas: NoticeData[];
  faq_title: string;
  button: string;
  locale: string;
}
export default function FAQ({ datas, faq_title, button, locale }: NoticeProps) {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;

  const [selectedNoticeId, setSelectedNoticeId] = useState<string | null>(null);

  const items = datas.slice(0, isDesktop ? 5 : 4);

  return (
    <div
      style={{ visibility: windowWidth ? "visible" : "hidden" }}
      className={`max-w-[1440px] w-full flex flex-col  ${
        isDesktop ? "pb-[160px] px-[40px]" : "py-[60px] px-[20px]"
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
            key={item.faq_id}
            target="_blank"
            href={`https://dev-api.id.myabcwallet.com/query/v2/faq?language=${locale}&service=wallet-homepage&id=${item.faq_id}`}
          >
            <li
              className={`flex flex-col justify-between group ${
                isDesktop ? "mt-[40px]" : "mt-[24px]"
              }`}
              onClick={() => setSelectedNoticeId(item.faq_id || null)}
            >
              <div
                className={`flex flex-col w-full py-[11px] pr-[88px] ${
                  isDesktop ? "gap-6" : "gap-4"
                } relative`}
              >
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
                    {item.question}
                  </p>
                ) : (
                  <p
                    className={`text-lg leading-[27px] whitespace-nowrap text-black font-pretendardSemibold overflow-hidden text-ellipsis`}
                  >
                    {item.question}
                  </p>
                )}

                <Image
                  src={
                    selectedNoticeId === item.faq_id
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
      <ViewAllButton
        button={button}
        setSelectedNoticeId={(id) =>
          setSelectedNoticeId(id ? String(id) : null)
        }
        url={`https://dev-api.id.myabcwallet.com/query/v2/faq?language=${locale}&service=wallet-homepage`}
      />
    </div>
  );
}
