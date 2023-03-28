import { fontFamily } from "./fontList";

export const getFontFamily = (fontFamilyName: string) => {
  return fontFamily[fontFamilyName as keyof typeof fontFamily];
};
