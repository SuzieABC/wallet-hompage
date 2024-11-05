"use client";

import logo_image from "@/assets/images/footer/footer_logo_image.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const service = [{ name: "다운로드" }, { name: "개발자" }];
  const company = [
    { name: "회사 소개", url: "https://ahnlabblockchain.company/" },
    { name: "이용약관", url: "https://ahnlabblockchain.company/" },
    { name: "개인정보처리방침", url: "https://ahnlabblockchain.company/" },
  ];
  const connect = [
    { sns_name: "facebook", url: "https://www.facebook.com/abcwallet2022" },
    { sns_name: "X", url: "https://x.com/AhnLab_ABC" },
    { sns_name: "Medium", url: "https://medium.com/@AhnLabBlockchainCompany" },
    { sns_name: "Youtube", url: "https://www.youtube.com/@ABC_Wallet" },
  ];
  return (
    <div className="w-full px-4 pt-10 pb-20 bg-white flex-col justify-start items-start gap-2.5 overflow-hidden">
      <div className="self-stretch flex-col justify-start items-start gap-12 flex">
        <div className="px-2 flex-col justify-start items-center gap-2.5 flex">
          <Image src={logo_image} alt="logo" width={126.998} height={17.41} />
        </div>

        <div className="self-stretch flex-col justify-start items-start gap-[20px] flex">
          <div className="self-stretch h-16 flex-col justify-start items-start gap-0.5 flex">
            <div className="px-2 justify-center items-center gap-2.5 inline-flex">
              <span className="text-black text-[15px] font-archivoBold">
                Service
              </span>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              {service.map((item) => (
                <div
                  className="px-2 py-3.5 justify-start items-center gap-2.5 flex"
                  key={item.name}
                >
                  <div className="text-[#5c6070] text-[15px] font-pretendardMedium tracking-tight">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="self-stretch h-16 flex-col justify-start items-start gap-0.5 flex">
            <div className="px-2 justify-center items-center gap-2.5 inline-flex">
              <span className="text-black text-[15px] font-bold font-archivoBold">
                Company
              </span>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              {company.map((item) => (
                <Link
                  className="px-2 py-3.5 justify-start items-center gap-2.5 flex"
                  key={item.name}
                  href={item.url}
                  target="_blank"
                >
                  <div className="text-[#5c6070] text-[15px] font-pretendardMedium tracking-tight">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="self-stretch h-16 flex-col justify-start items-start gap-0.5 flex">
            <div className="px-2 justify-start items-center gap-2.5 inline-flex">
              <span className="text-black text-[15px] font-bold font-archivoBold">
                Connect
              </span>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              {connect.map((item) => (
                <Link
                  className="px-2 py-3.5 justify-start items-center gap-2.5 flex"
                  key={item.sns_name}
                  href={item.url}
                  target="_blank"
                >
                  <div className="text-[#5c6070] text-[15px] font-pretendardMedium tracking-tight">
                    {item.sns_name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="px-2 justify-start items-center mt-[15px]">
            <p className="text-[#5c6070] text-[11px] font-normal font-pretendard tracking-tight">
              © AhnLab Blockchain Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
