"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import bg from "@/assets/images/main/bottom_background.png";
import logoXLogo from "@/assets/images/main/logo_x_logo_image.png";
import logoXLogoRow from "@/assets/images/main/logo_x_logo_row_image.png";
import phones from "@/assets/images/main/bottom_phone_image.png";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
export default function FifthIntro({
  intro_5_title,
  intro_5_content,
}: {
  intro_5_title: string;
  intro_5_content: string;
}) {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            overflow: "hidden",
          }}
        >
          <div
            className={`max-w-[1440px] mx-auto flex items-center w-full relative gap-1.5 ${
              isDesktop || isLargeDesktop
                ? `flex-row ${
                    isLargeDesktop ? "px-[120px]" : "px-[40px]"
                  } justify-between pt-[25px]`
                : "flex-col px-[20px] pt-[60px]"
            }`}
          >
            <div className="flex flex-col items-center">
              <Image
                src={isDesktop || isLargeDesktop ? logoXLogoRow : logoXLogo}
                alt="abc wallet logo"
                width={isLargeDesktop ? 450 : isDesktop ? 389 : 154}
                height={isLargeDesktop ? 36 : isDesktop ? 30 : 90}
              />
              <div
                className={`flex flex-col w-full ${
                  isLargeDesktop
                    ? "pt-[40px] text-[22px] items-start justify-start"
                    : isDesktop
                    ? "pt-[40px] text-[20px] items-start justify-start"
                    : "pt-[20px] text-[15px] items-center justify-center"
                } pb-[24px] text-white font-pretendardMedium`}
              >
                <p>{intro_5_title}</p>
                <p>{intro_5_content}</p>
              </div>
            </div>

            <Image
              src={phones}
              alt="phone images"
              width={isDesktop ? 510 : 375}
              height={isDesktop ? 550 : 375}
              className="w-auto h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
