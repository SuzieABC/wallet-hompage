"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import arrow_down from "@/assets/icons/support/support_arrow_down_icon.png";
import arrow_down_white from "@/assets/icons/support/support_arrow_down_white_icon.png";

interface ViewAllButtonProps {
  button: string;
  setSelectedNoticeId: (id: number | null) => void;
  url: string;
}

export default function ViewAllButton({
  button,
  setSelectedNoticeId,
  url,
}: ViewAllButtonProps) {
  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className={`font-pretendardMedium uppercase flex items-center justify-center`}
    >
      <Link
        target="_blank"
        onClick={() => setSelectedNoticeId(null)}
        href={url}
        className={`flex ${
          isDesktop || isLargeDesktop
            ? "mt-[60px] py-[18px] pr-[80px] pl-[100px] text-xl leading-normal text-[#454854] rounded-lg border border-[#5c6070] hover:bg-[#6d23ef] hover:text-[#fff] hover:border-transparent gap-2"
            : "mt-[28px] py-[14px] pr-[44px] pl-[56px] text-base leading-tight text-[#5c6070] gap-1"
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <span>{button}</span>
        <Image
          src={
            (isDesktop || isLargeDesktop) && isHovering
              ? arrow_down_white
              : arrow_down
          }
          alt="arrow_down"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}
