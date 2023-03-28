import { AnyAction } from "redux";

export const COUNTERDATA = "COUNTERDATA";
export const THEME = "THEME";
export const FONTFAMILY = "FONTFAMILY";
export const RESUMEDATA = "RESUMEDATA";

export function updateCounter(data: AnyAction) {
  return {
    type: COUNTERDATA,
    payload: data,
  };
}

export function updateTheme(data: any) {
  return {
    type: THEME,
    payload: data,
  };
}

export function updateFontFamily(data: any) {
  return {
    type: FONTFAMILY,
    payload: data,
  };
}

export function updateResumeData(data: any) {
  return {
    type: RESUMEDATA,
    payload: data,
  };
}
