import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";
import Top from "@/components/main/Top";
import FirstIntro from "@/components/main/FirstIntro";
import SecondIntro from "@/components/main/SecondIntro";
import ThirdIntro from "@/components/main/ThirdIntro";
import FourthIntro from "@/components/main/FourthIntro";
import FifthIntro from "@/components/main/FifthIntro";
import Bottom from "@/components/main/Bottom";

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  // Make sure to use the correct namespace here.
  const { t } = await createTranslation(locale, "main");

  const res = await fetch("https://api.id.myabcwallet.com/query/v2/app-dapps", {
    cache: "no-store", // API 데이터가 항상 최신이도록 설정
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <>
      <Top
        title={t("top.title")}
        subtitle_1={t("top.subtitle_1")}
        subtitle_2={t("top.subtitle_2")}
        subtitle_3={t("top.subtitle_3")}
      />
      <FirstIntro
        title={t("intro_1.intro_1_title")}
        content={t("intro_1.intro_1_content")}
        card_1_title={t("intro_1.card_1_title")}
        card_1_content={t("intro_1.card_1_content")}
        card_2_title={t("intro_1.card_2_title")}
        card_2_content={t("intro_1.card_2_content")}
        card_3_title={t("intro_1.card_3_title")}
        card_3_content={t("intro_1.card_3_content")}
      />
      <SecondIntro
        title={t("intro_2.intro_2_title")}
        content={t("intro_2.intro_2_content")}
        card_1_title={t("intro_2.card_1_title")}
        card_1_content={t("intro_2.card_1_content")}
        card_2_title={t("intro_2.card_2_title")}
        card_2_content={t("intro_2.card_2_content")}
        card_3_title={t("intro_2.card_3_title")}
        card_3_content={t("intro_2.card_3_content")}
        card_4_title={t("intro_2.card_4_title")}
        card_4_content={t("intro_2.card_4_content")}
      />
      <ThirdIntro
        title={t("intro_3.intro_3_title")}
        content={t("intro_3.intro_3_content")}
        card_1_title={t("intro_3.card_1_title")}
        card_1_content={t("intro_3.card_1_content")}
        card_2_title={t("intro_3.card_2_title")}
        card_2_content={t("intro_3.card_2_content")}
        card_3_title={t("intro_3.card_3_title")}
        card_3_content={t("intro_3.card_3_content")}
        card_4_title={t("intro_3.card_4_title")}
        card_4_content={t("intro_3.card_4_content")}
        card_5_title={t("intro_3.card_5_title")}
        card_5_content={t("intro_3.card_5_content")}
        card_6_title={t("intro_3.card_6_title")}
        card_6_content={t("intro_3.card_6_content")}
      />
      <FourthIntro
        datas={data}
        intro_4_title={t("intro_4.intro_4_title")}
        intro_4_content={t("intro_4.intro_4_content")}
        card1_title={t("intro_4.card1_title")}
        card2_title={t("intro_4.card2_title")}
      />
      <FifthIntro
        intro_5_title={t("intro_5.intro_5_title")}
        intro_5_content={t("intro_5.intro_5_content")}
      />
      <Bottom />
    </>
  );
}
