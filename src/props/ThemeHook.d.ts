import { Dispatch } from "react";
import ThemeProps from "./Theme";

type ThemeHookProps = [
  state: ThemeProps,
  setState: Dispatch<React.SetStateAction<string>>
];

export default ThemeHookProps;