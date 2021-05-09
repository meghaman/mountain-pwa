import { createMuiTheme } from "@material-ui/core/styles";

export const primaryColor = "#000080";
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
      default: "#008080",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default baseTheme;
