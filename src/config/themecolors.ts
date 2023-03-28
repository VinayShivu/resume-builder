import ThemeProps from "../props/Theme";

export const getUITheme = (getTheme: string): ThemeProps => {
  const primary_fg = (): string => {
    if (getTheme === "red") return "text-red-bg";
    if (getTheme === "orange") return "text-orange-bg";
    return "text-blue-bg";
  };
  const secondary_fg = (): string => {
    if (getTheme === "red") return "text-red-fg";
    if (getTheme === "orange") return "text-orange-fg";
    return "text-blue-fg";
  };
  const bg = (): string => {
    if (getTheme === "red") return "bg-red-bg";
    if (getTheme === "orange") return "bg-orange-bg";
    return "bg-blue-bg";
  };
  const secondary_bg = (): string => {
    if (getTheme === "red") return "bg-red-fg";
    if (getTheme === "orange") return "bg-orange-fg";
    return "bg-blue-fg";
  };
  const border = (): string => {
    if (getTheme === "red") return "border-red-bg";
    if (getTheme === "orange") return "border-orange-bg";
    return "border-blue-bg";
  };
  return { primary_fg, secondary_fg, bg, secondary_bg, border };
};
