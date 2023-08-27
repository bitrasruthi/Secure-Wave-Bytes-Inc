import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const IntroPageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "80px",
    "& .grid-container": {
      padding: "0px 20px",
      textAlign: "left",
    },
    "& .main-title": {
      marginTop: 20,
      fontSize: 30,
      color: theme.palette.primary.light,
      fontFamily: "kanit-light",
    },
    "& .sub-title": {
      marginTop: 90,
      fontSize: 20,
      fontFamily: "kanit-light",
    },
    "& .wave-style": {
      height: 300,
      width: 200,
      transform: "rotate(75deg)",
      position: "absolute",
      marginTop: 60,
    },
    "& .wave2-style": {
      height: 300,
      width: 220,
      position: "relative",
      transform: "rotate(255deg)",
      left: 160,
      zIndex: -1,
      marginTop: 60,
    },
    "& .divider-style": {
      borderBottomWidth: "1.5px",
      color: "#fff !important",
    },

    [theme.breakpoints.up("xl") ?? "600"]: {
      "& .sub-title": {
        fontSize: 30,
        marginTop: 150,
      },
      "& .wave-style": {
        height: 400,
        width: 250,
      },
      "& .wave2-style": {
        height: 400,
        width: 300,
        left: 160,
        marginTop: 60,
      },
    },
    [theme.breakpoints.down("md") ?? "600"]: {
      "& .grid-container": {
        padding: "5px",
      },
      "& .main-title": {
        fontSize: 30,
        marginTop: 30,
      },
      "& .logo-title": {
        fontSize: 20,
      },
      "& .sub-title": {
        fontSize: 20,
        marginTop: 10,
      },
      "& .wave-style": {
        height: 200,
        width: 130,
      },
      "& .wave2-style": {
        height: 200,
        width: 150,
        left: 50,
        marginTop: 120,
      },
    },
  },
}));
