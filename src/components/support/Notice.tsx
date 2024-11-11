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
export default function Notice({ datas }: NoticeProps) {
  const items: NoticeData[] = datas.map((data: NoticeData) => ({
    title: data.title,
    update_time: data.update_time,
    language_type: data.language_type,
    create_time: data.create_time,
    notice_id: data.notice_id,
    service_type: data.service_type,
  }));
  console.log("items", items);
  return (
    <div className="border w-full flex flex-col">
      공지사항
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <p>{item.update_time}</p>
            <Link
              target="_blank"
              href={`https://dev-api.id.myabcwallet.com/query/v2/notice?language=ko&service=wallet-homepage&id=${item.notice_id}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        target="_blank"
        href={`https://dev-api.id.myabcwallet.com/query/v2/notice?language=ko&service=wallet-homepage`}
      >
        전체 보기
      </Link>
    </div>
  );
}
