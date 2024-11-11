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

  const res = await fetch(
    "https://dev-api.id.myabcwallet.com/query/v2/notice/items?service=wallet-homepage&sort=create-time&order=desc&language=ko&offset=0&limit=999",
    {
      cache: "no-store", // API 데이터가 항상 최신이도록 설정
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const noticeData = await res.json();

  return (
    <div className="flex flex-col justify-center items-center">
      <Support data={noticeData} />
    </div>
  );
}
