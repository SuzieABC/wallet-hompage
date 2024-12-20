"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import ViewAllButton from "@/components/elements/ViewAllButton";
import arrow_right_colour from "@/assets/icons/support/support_arrow_right_colour_icon.png";
import arrow_right from "@/assets/icons/support/support_arrow_right_icon.png";
// import MockData from "@/data/NOTICE.json";

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
  notice_title: string;
  button: string;
  locale: string;
}

export default function Notice({
  datas,
  notice_title,
  button,
  locale,
}: NoticeProps) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  // const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const [selectedNoticeId, setSelectedNoticeId] = useState<string | null>(null);

  const items = datas.slice(0, 4);

  const formatDate = (date?: string) => {
    return date ? dayjs(date).format("YYYY. MM. DD") : "";
  };

  return (
    <div
      style={{ visibility: windowWidth ? "visible" : "hidden" }}
      className={`max-w-[1440px] w-full flex flex-col  ${
        isDesktop || isLargeDesktop
          ? "pt-[100px] pb-[196px] px-[40px]"
          : "py-[60px] px-[20px]"
      }`}
    >
      <span
        className={`text-black ${
          isDesktop || isLargeDesktop
            ? "text-[37px] leading-[51.80px]"
            : "text-[26px] leading-9"
        } font-pretendardBold uppercase`}
      >
        {notice_title}
      </span>
      <ul
        className={`${
          isDesktop || isLargeDesktop ? "mt-[20px]" : "mt-[16px]"
        } `}
      >
        {items.map((item) => (
          <Link
            key={item.notice_id}
            target="_blank"
            href={`https://dev-api.id.myabcwallet.com/query/v2/notice?language=${locale}&service=wallet-homepage&id=${item.notice_id}`}
          >
            <li
              className={`flex flex-col justify-between ${
                isDesktop || isLargeDesktop ? "mt-[40px]" : "mt-[24px]"
              } group`}
              onClick={() => setSelectedNoticeId(item.notice_id || null)}
            >
              <div
                className={`flex flex-col w-full pr-[88px] ${
                  isDesktop || isLargeDesktop ? "gap-6" : "gap-4"
                } relative`}
              >
                <p
                  className={`text-[#5c6070] ${
                    isDesktop || isLargeDesktop ? "text-base" : "text-sm"
                  } font-pretendardMedium`}
                >
                  {formatDate(item.update_time)}
                </p>

                {isDesktop || isLargeDesktop ? (
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
                  width={isMobile ? 24 : 32}
                  height={isMobile ? 24 : 32}
                  className="absolute right-0 top-1/2 -translate-y-1/2 mr-[10px] group-hover:hidden"
                />
                <Image
                  src={arrow_right_colour}
                  alt="arrow_right_colour"
                  width={isMobile ? 24 : 32}
                  height={isMobile ? 24 : 32}
                  className="absolute right-0 top-1/2 -translate-y-1/2 mr-[10px] hidden group-hover:block"
                />
              </div>

              <div
                className={`h-0 border border-[#e3e4e8] ${
                  isDesktop || isLargeDesktop ? "mt-[32px]" : "mt-[24px]"
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
        url={`https://dev-api.id.myabcwallet.com/query/v2/notice?language=${locale}&service=wallet-homepage`}
      />
    </div>
  );
}
