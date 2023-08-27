import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#301e41",
      dark: "#28264c",
      light: "#D73CBE",
    },
    secondary: {
      main: "#1d2e5a",
      dark: "#D7E9EF",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "kanit-regular",
  },
});

export default theme;
