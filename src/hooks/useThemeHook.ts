import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUITheme } from "../config/themecolors";
import ThemeHookProps from "../props/ThemeHook";
import { updateTheme } from "../redux/actions";

export const useTheme = (): ThemeHookProps => {
  const dispatch = useDispatch();
  const getTheme = useSelector((state: any) => state.getTheme);
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    dispatch(updateTheme(theme));
  }, [dispatch, theme]);

  return [getUITheme(getTheme), setTheme];
};