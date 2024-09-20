import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  // Make sure to use the correct namespace here.
  const { t } = await createTranslation(locale, "products");

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-white text-[70px] uppercase">{t("title")}</span>
    </div>
  );
}
