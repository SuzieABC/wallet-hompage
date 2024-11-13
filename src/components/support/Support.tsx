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


  return (
    <>
      <div className="flex flex-col w-full px-[360px] py-[100px] border gap-[49px]">
        <div className="flex border justify-between gap-[49px]">
          <Notice datas={noticeData["rows"]} />
          <FAQ datas={faqData["rows"]} />
        </div>
      </div>
    </>
  );
}
