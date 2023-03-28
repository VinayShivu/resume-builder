type ThemeProps = {
    primary_fg: () => string;
    secondary_fg: () => string;
    bg: () => string;
    secondary_bg: () => string;
    border: () => string;
  };
  
  export default ThemeProps;