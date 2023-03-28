import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFontFamily } from "../redux/actions";
import { getFontFamily } from "../config/getFontFamily";


export const useFontFamily = (): any => {
    const dispatch = useDispatch();
    const getFontFam = useSelector((state: any) => state.getFontFamily);
    const [theme, setTheme] = useState(getFontFam);
  
    useEffect(() => {
      dispatch(updateFontFamily(theme));
    }, [dispatch, theme]);
  
    return [getFontFamily(getFontFam), setTheme];
  };