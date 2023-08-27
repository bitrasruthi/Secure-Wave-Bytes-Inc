import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const ContactPageStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .main-title": {
      fontSize: 40,
      lineHeight: 1.1,
      textAlign: "left",
      fontFamily: "kanit-light",
    },
    "& .main-sub-title": {
      fontSize: 30,
      textAlign: "left",
      fontFamily: "kanit-light",
    },
    "& .grid-container": {
      padding: "50px 80px",
      textAlign: "left",
    },
    "& .border-line": {
      border: "1px solid #fff",
      padding: 50,
    },
    "& .border-line2": {
      border: "1px solid #fff",
      padding: 10,
      width: 300,
    },
    "& .sub-title": {
      marginTop: 20,
      fontSize: 18,
      textAlign: "left",
      fontFamily: "kanit-light",
    },
    "& .sub-text": {
      color: theme.palette.primary.light,
      fontSize: 18,
    },
    "& .wave-style": {
      height: 250,
      width: 170,
      transform: "rotate(0deg)",
      position: "absolute",
      marginTop: 150,
    },
    "& .wave3-style": {
      height: 250,
      width: 170,
      transform: "rotate(180deg)",
      position: "absolute",
      marginLeft: 50,
      marginTop: 50,
    },
    "& .wave2-style": {
      height: 350,
      width: 350,
      position: "relative",
      top: 80,
    },

    [theme.breakpoints.up("xl") ?? "600"]: {
      "& .main-title": {
        marginTop: 70,
      },
      "& .wave2-style": {
        height: 350,
        width: 300,
        top: 120,
      },
      "& .wave-style": {
        height: 300,
        width: 200,
        marginTop: 150,
      },
      "& .wave3-style": {
        height: 350,
        width: 270,
        marginLeft: 30,
      },
    },
    [theme.breakpoints.down("md") ?? "600"]: {
      "& .grid-container": {
        padding: "5px",
      },
      "& .main-title": {
        fontSize: 40,
        marginTop: 30,
      },
      "& .logo-title": {
        fontSize: 20,
      },
      "& .sub-title": {
        fontSize: 20,
      },
      "& .wave2-style": {
        height: 200,
        width: 200,
        marginLeft: 0,
        marginTop: 10,
      },
      "& .border-line2": {
        border: "1px solid #fff",
        padding: 10,
        width: 250,
      },
    },
  },
}));
