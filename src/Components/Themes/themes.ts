import { createMuiTheme } from "@material-ui/core/styles";

export const primaryColor = "#06ABEB";
export const primaryContrast = "#ffffff";

export const secondaryColor = "#808080";
export const secondaryContrast = "#ffffff";

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: primaryContrast,
    },
    secondary: {
      main: secondaryColor,
      contrastText: secondaryContrast,
    },
    background: {
      default: primaryColor,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default baseTheme;
