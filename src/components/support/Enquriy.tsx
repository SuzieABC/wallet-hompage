"use client";

import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface EnquiryProps {
  title_1: string;
  title_2: string;
  content_1: string;
  content_2: string;
}

export default function Enquiry({
  title_1,
  title_2,
  content_1,
  content_2,
}: EnquiryProps) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;
  //   const setupMailtoLink = () => {
  //     window.open(
  //       "https://mail.google.com/mail/?view=cm&fs=1&to=help@myabcwallet.com"
  //     );
  //   };
  return (
    <div className={`flex flex-col max-w-[1440px] w-full`}>
      <div
        className={`bg-[#F5F5F5] flex flex-col  ${
          isMobile ? "px-[16px]" : isTablet ? "px-[20px]" : "px-[60px]"
        } ${
          isDesktop || isLargeDesktop
            ? "mx-[40px] mb-[160px] rounded-3xl py-[72px] items-start"
            : "py-[80px] items-center"
        }`}
      >
        <p
          className={`text-black uppercase leading-[33.60px] ${
            isMobile || isTablet ? "mb-[36px]" : "mb-[40px]"
          }`}
        >
          <span
            className={`font-pretendardSemibold ${
              isMobile || isTablet ? "text-2xl" : "text-[28px]"
            } `}
          >
            {title_1}
          </span>
          &nbsp;
          <span
            className={`font-pretendardBold ${
              isMobile || isTablet ? "text-2xl" : "text-[26px]"
            }`}
          >
            {title_2}
          </span>
        </p>
        {/* <a href={"#"} onClick={setupMailtoLink}> */}
        <a
          href={"mailto:help@myabcwallet.com"}
          className={`text-center text-black font-archivoSemibold ${
            isMobile
              ? "text-[28px] leading-10 "
              : isTablet
              ? "text-[32px] leading-[45.44px]"
              : "text-[40px]"
          }`}
        >
          help@myabcwallet.com
        </a>
        <p
          className={`text-center text-[#454854] font-pretendardRegular leading-snug ${
            isMobile || isTablet ? "text-base pt-[20px]" : "text-lg pt-[28px]"
          }`}
        >
          {content_1}
          {(isMobile || isTablet) && <br />}
          {content_2}
        </p>
      </div>
    </div>
  );
}
