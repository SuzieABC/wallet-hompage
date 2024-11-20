import Image from "next/image";

import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface Coin {
  name: string;
  icon: string;
}

export default function Tags({ coins }: { coins: Coin[] }) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 700;
  const isTablet = windowWidth >= 700 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;
  const isLargeDesktop = windowWidth >= 1440;

  return (
    <>
      {coins.map((item) => (
        <div
          key={item.name}
          className="self-stretch justify-center items-center gap-2 inline-flex"
        >
          <div
            className={`${
              isMobile
                ? "p-3"
                : isTablet
                ? "px-[16px] py-[12px]"
                : "px-[32px] py-[20px]"
            } bg-[#e3e4e8] rounded-[80px] justify-center items-center gap-1.5 flex`}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={isDesktop || isLargeDesktop ? 48 : 24}
              height={isDesktop || isLargeDesktop ? 48 : 24}
            />
            <div
              className={`text-center text-black  font-pretendardMedium ${
                isDesktop || isLargeDesktop ? "text-xl" : "text-[15px]"
              }`}
            >
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
