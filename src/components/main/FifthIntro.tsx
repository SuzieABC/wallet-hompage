"use client";
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

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div
        className={`max-w-[1440px] mx-auto flex items-center w-full relative gap-1.5 pt-[60px] ${
          isLargeDesktop && "px-[120px]"
        } ${
          isDesktop || isLargeDesktop
            ? "flex-row px-[40px] justify-between"
            : "flex-col px-[20px]"
        }`}
      >
        <div className="flex flex-col items-center">
          <Image
            src={isDesktop ? logoXLogoRow : logoXLogo}
            alt="abc wallet logo"
            width={isDesktop ? 389 : 154}
            height={isDesktop ? 30 : 90}
          />
          <div
            className={`flex flex-col justify-center ${
              isDesktop
                ? "pt-[40px] text-xl"
                : "pt-[20px] text-[15px] items-center"
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
        />
      </div>
    </div>
  );
}
