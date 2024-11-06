import { DEFAULT_LANG, SupportedLangs } from "./app/types";

export const createLinkWithLang = (
  link: `/${string}`,
  lang?: SupportedLangs
) => {
  if (!lang || lang === DEFAULT_LANG) return link;
  return `/${lang}${link}`;
};
