import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";
import SupportTop from "@/components/support/SupportTop";
import Notice from "@/components/support/Notice";
import FAQ from "@/components/support/FAQ";
import Enquiry from "@/components/support/Enquriy";

// 공통 API 호출 함수
async function fetchData(url: string, errorMessage: string) {
  const response = await fetch(url, { cache: "no-store" }); // 항상 최신 데이터
  if (!response.ok) {
    throw new Error(errorMessage);
  }
  return response.json();
}

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await createTranslation(locale, "support");

  // API 요청
  const [noticeData, faqData] = await Promise.all([
    fetchData(
      `https://dev-api.id.myabcwallet.com/query/v2/notice/items?service=wallet-homepage&sort=create-time&order=desc&language=${locale}&offset=0&limit=999`,
      "Failed to fetch notice data"
    ),
    fetchData(
      `https://dev-api.id.myabcwallet.com/query/v2/faq/items?service=wallet-homepage&category=all&sort=update-time&order=desc&language=${locale}&offset=0&limit=999`,
      "Failed to fetch FAQ data"
    ),
  ]);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* 상단 support 페이지 제목 */}
      <SupportTop title={t("title")} />

      {/* 공지 사항 */}
      <Notice
        datas={noticeData.rows}
        notice_title={t("notice.title")}
        button={t("view_all")}
        locale={locale}
      />

      {/* FAQ 섹션 */}
      <FAQ
        datas={faqData.rows}
        faq_title={t("faq.title")}
        button={t("view_all")}
        locale={locale}
      />

      {/* 문의하기 섹션 */}
      <Enquiry
        title_1={t("enquiry.title_1")}
        title_2={t("enquiry.title_2")}
        content_1={t("enquiry.content_1")}
        content_2={t("enquiry.content_2")}
      />
    </div>
  );
}
