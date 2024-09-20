import { LocaleTypes } from "@/utils/localization/settings";
import { redirect } from "next/navigation";

export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  // Redirect to the /products page
  redirect(`/${locale}/products`);
}
