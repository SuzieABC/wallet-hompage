import { createTranslation } from "@/utils/localization/server";
import { LocaleTypes } from "@/utils/localization/settings";
import dynamic from "next/dynamic";
const Top = dynamic(() => import("@/components/main/Top"));
const FirstIntro = dynamic(() => import("@/components/main/FirstIntro"));
const SecondIntro = dynamic(() => import("@/components/main/SecondIntro"));
const ThirdIntro = dynamic(() => import("@/components/main/ThirdIntro"));
const FourthIntro = dynamic(() => import("@/components/main/FourthIntro"));
const FifthIntro = dynamic(() => import("@/components/main/FifthIntro"));
const Bottom = dynamic(() => import("@/components/main/Bottom"));

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await createTranslation(locale, "main");

  return (
    <>
      <Top
        title={t("top.title")}
        subtitle_1={t("top.subtitle_1")}
        subtitle_2={t("top.subtitle_2")}
        subtitle_3={t("top.subtitle_3")}
        detail={t("top.detail")}
      />
      <FirstIntro
        title={t("intro_1.intro_1_title")}
        title_2={t("intro_1.intro_1_title_2")}
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
        title_2={t("intro_3.intro_3_title_2")}
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
