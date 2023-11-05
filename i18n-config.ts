export const ViLang = "vi-VN";
export const EnLang = "en-US";

export const i18n = {
  defaultLocale: ViLang,
  locales: [ViLang, EnLang],
} as const;

export type Locale = (typeof i18n)["locales"][number];
