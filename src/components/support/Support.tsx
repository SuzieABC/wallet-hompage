"use client";

import Notice from "@/components/support/Notice";
import FAQ from "@/components/support/FAQ";

interface SupportRow {
  title?: string;
  update_time?: string;
  language_type?: number;
  create_time?: string;
  notice_id?: string;
  service_type?: number;
}

interface SupportProps {
  noticeData: {
    rows: SupportRow[];
  };
  faqData: {
    rows: SupportRow[];
  };
}

export default function Support({ noticeData, faqData }: SupportProps) {
  const setupMailtoLink = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=help@myabcwallet.com"
    );
  };

  return (
    <>
      <div className="w-full bg-black text-white h-[40vh] flex justify-center items-center text-[50px]">
        고객센터
      </div>
      <div className="flex flex-col w-full px-[360px] py-[100px] border gap-[49px]">
        <div className="flex border justify-between gap-[49px]">
          <Notice datas={noticeData["rows"]} />
          <FAQ datas={faqData["rows"]} />
        </div>
        <div className="border flex flex-col">
          <span>1:1 문의</span>
          <a href={"#"} onClick={setupMailtoLink}>
            help@myabcwallet.com
          </a>
          <span>
            궁금한 점이나 개선사항을 알려주세요. 여러분의 소중한 의견을
            기다립니다.
          </span>
        </div>
      </div>
    </>
  );
}
