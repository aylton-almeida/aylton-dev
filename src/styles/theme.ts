import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#607d8b",
        light: "#8eacbb",
        dark: "#34515e",
        contrastText: "#000",
      },
      background: {
        paper: "#EFEFEF",
      },
      text: {
        primary: "#504E48",
      },
    },
    shape: {
      borderRadius: 12,
    },
  })
);

export default theme;
