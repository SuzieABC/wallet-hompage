// settings.ts

import type { InitOptions } from "i18next";

export const fallbackLng = "ko"; // This represents the language code to be used as the default language. This language code is used when the user’s browser settings or requested language do not match. Here, it is set to ‘ko’.
export const locales = [fallbackLng, "en"] as const; // This is an array representing all the supported language codes, including the fallback language. It is defined here as [‘ko’, ‘en’].
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = "common"; // This represents the default translation key (namespace) used in the translation files. Here, it is set to common’.

export function getOptions(lang = fallbackLng, ns = defaultNS): InitOptions {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: locales,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
