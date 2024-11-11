"use client";

import Notice from "@/components/support/Notice";
import Link from "next/link";
import { useState } from "react";

interface SupportRow {
  title?: string;
  update_time?: string;
  language_type?: number;
  create_time?: string;
  notice_id?: string;
  service_type?: number;
}

interface SupportProps {
  data: {
    rows: SupportRow[];
  };
}

export default function Support({ data }: SupportProps) {
  const [emailLink, setEmailLink] = useState("#");

  const emailAddress = "help@myabcwallet.com";
  const subject = encodeURIComponent("Subject goes here"); // Replace with desired subject
  const body = encodeURIComponent("Body content goes here"); // Replace with desired body content

  const setupMailtoLink = () => {
    const mailtoString = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setEmailLink(mailtoString);
  };
  return (
    <>
      <div className="w-full bg-black text-white h-[40vh] flex justify-center items-center text-[50px]">
        고객센터
      </div>
      <div className="flex flex-col w-full px-[360px] py-[100px] border gap-[49px]">
        <div className="flex border justify-between gap-[49px]">
          <Notice datas={data["rows"]} />
          <div className="border w-full flex flex-col">
            자주 묻는 질문 <span>전체 보기</span>
          </div>
        </div>

        <div className="border flex flex-col">
          <span>1:1 문의</span>
          <a href={emailLink} onClick={setupMailtoLink} target="_blank">
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
