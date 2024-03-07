import { createI18n } from "vue-i18n";

export interface LocaleOption {
  label: string;
  value: string;
}

/**
 * value 要对应语言文件名，配置了自动的懒加载
 */
export const LOCALE_OPTIONS: Array<LocaleOption> = [
  { label: "中文", value: "zh-cn" },
  { label: "English", value: "en-us" }
];

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "zh-cn",
  fallbackLocale: "zh-cn",
  legacy: false,
  allowComposition: true,
  messages: {}
});

export async function loadLanguageAsync(lang: string) {
  const messages = await import(/* webpackChunkName: "lang-[request]" */ `@/locale/lang/${lang}.json`);
  i18n.global.setLocaleMessage(lang, messages);
  i18n.global.locale.value = lang;
}

export default i18n;
