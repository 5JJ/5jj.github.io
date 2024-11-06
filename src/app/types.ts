const supportedLangs = ["kr", "en"] as const;

export const DEFAULT_LANG = "en";
export type SupportedLangs = (typeof supportedLangs)[number];
