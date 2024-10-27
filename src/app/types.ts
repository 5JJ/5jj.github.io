const supportedLangs = ["kr", "en"] as const;

export const defaultLang = "en";
export type SupportedLangs = (typeof supportedLangs)[number];
