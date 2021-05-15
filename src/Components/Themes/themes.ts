import { createMuiTheme } from "@material-ui/core/styles";

export const primaryColor = "#06ABEB";
export const primaryContrast = "#ffffff";

export const secondaryColor = "#D9058D";
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
  },
  typography: {
    fontFamily: "Roboto",
    body1: {
      fontSize: 20,
    },
    h1: {
      fontFamily: "Barlow",
      fontSize: 50,
      color: primaryColor,
      paddingBottom: "5px",
    },
    h2: {
      fontSize: 25,
      color: secondaryColor,
      paddingBottom: "2px",
    },
    h3: {
      fontSize: 18,
    },
    h4: {
      fontSize: 40,
      fontFamily: "Monteserrat",
    },
    h6: {
      color: secondaryColor,
    },
  },
});

export default baseTheme;
