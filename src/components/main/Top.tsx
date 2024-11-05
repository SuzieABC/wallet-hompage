"use client";

import bg from "@/assets/images/main/top_bg_mo.png";
import mobile from "@/assets/images/main/top_mobile_image.png";
import Image from "next/image";

interface TopProps {
  title: string;
  subtitle_1: string;
  subtitle_2: string;
  subtitle_3: string;
}
export default function Top({
  title,
  subtitle_1,
  subtitle_2,
  subtitle_3,
}: TopProps) {
  return (
    <div
      className={`px-[20px] flex flex-col items-center w-full relative h-dvh pt-[102px] gap-1.5`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="mx-[20px] flex flex-col items-center tracking-[-0.19px]">
        <span className="text-center text-black text-[38px] font-archivoSemibold leading-none">
          {title}
        </span>
        <div>
          <span className="text-black text-[38px] font-pretendardBold">
            {subtitle_1}&nbsp;
          </span>
          <span className="text-[#6d23ef] text-[38px] font-archivoSemibold">
            {subtitle_2}&nbsp;
          </span>
          <span className="text-[#6d23ef] text-[38px] font-pretendardBold">
            {subtitle_3}
          </span>
        </div>
      </div>

      <button className="h-[41px] px-6 py-3 bg-[#6d23ef] rounded-[30px] justify-center items-center gap-2 inline-flex mt-[24px] mb-[40px]">
        <div className="text-center text-white text-base font-archivoMedium">
          Download
        </div>
      </button>
      <Image
        src={mobile}
        alt="mobile"
        className="mx-auto w-full h-auto px-[10px] object-contain"
      />
    </div>
  );
}
