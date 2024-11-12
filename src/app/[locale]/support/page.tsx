import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";
import Support from "@/components/support/Support";

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  // Make sure to use the correct namespace here.
  const { t } = await createTranslation(locale, "support");

  const resNotice = await fetch(
    "https://dev-api.id.myabcwallet.com/query/v2/notice/items?service=wallet-homepage&sort=create-time&order=desc&language=ko&offset=0&limit=999",
    {
      cache: "no-store", // API 데이터가 항상 최신이도록 설정
    }
  );

  if (!resNotice.ok) {
    throw new Error("Failed to fetch data");
  }

  const noticeData = await resNotice.json();

  const resFAQ = await fetch(
    "https://dev-api.id.myabcwallet.com/query/v2/faq/items?service=wallet-homepage&category=all&sort=update-time&order=desc&language=ko&offset=0&limit=999",
    {
      cache: "no-store", // API 데이터가 항상 최신이도록 설정
    }
  );

  if (!resFAQ.ok) {
    throw new Error("Failed to fetch data");
  }

  const faqData = await resFAQ.json();

  return (
    <div className="flex flex-col justify-center items-center">
      <Support noticeData={noticeData} faqData={faqData} />
    </div>
  );
}
