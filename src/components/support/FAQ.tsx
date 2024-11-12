"use client";

import Link from "next/link";

interface NoticeData {
  title?: string;
  update_time?: string;
  language_type?: number;
  create_time?: string;
  notice_id?: string;
  service_type?: number;
}

interface NoticeProps {
  datas: NoticeData[];
}
export default function FAQ({ datas }: NoticeProps) {
  const items: NoticeData[] = datas.map((data: NoticeData) => ({
    title: data.title,
    update_time: data.update_time,
    language_type: data.language_type,
    create_time: data.create_time,
    notice_id: data.notice_id,
    service_type: data.service_type,
  }));

  return (
    <div className="border w-full flex flex-col">
      자주 묻는 질문
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <p>{item.update_time}</p>
            <Link
              target="_blank"
              href={`https://dev-api.id.myabcwallet.com/query/v2/faq?language=ko&service=wallet-homepage&id=${item.notice_id}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        target="_blank"
        href={`https://dev-api.id.myabcwallet.com/query/v2/faq?language=ko&service=wallet-homepage`}
      >
        전체 보기
      </Link>
    </div>
  );
}
