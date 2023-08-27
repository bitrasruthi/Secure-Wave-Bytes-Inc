import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const HomePageStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .logo-title": {
      textAlign: "left",
      fontSize: 30,
      letterSpacing: "1px",
    },
    "& .grid-container": {
      padding: "50px 80px",
      textAlign: "left",
    },
    "& .main-title": {
      fontSize: 70,
      letterSpacing: "15px",
      lineHeight: 1.1,
    },
    "& .sub-title": {
      marginTop: 20,
      fontSize: 40,
    },
    "& .wave-style": {
      height: 250,
      width: 150,
      transform: "rotate(115deg)",
      position: "absolute",
    },
    "& .wave2-style": {
      height: 250,
      width: 250,
      position: "relative",
      top: 180,
    },
    [theme.breakpoints.up("xl") ?? "600"]: {
      "& .main-title": {
        marginTop: 70,
      },
      "& .wave-style": {
        height: 350,
        width: 200,
      },
      "& .wave2-style": {
        height: 350,
        width: 350,
        top: 220,
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
      "& .wave-style": {
        height: 200,
        width: 120,
        marginLeft: 60,
      },
      "& .wave2-style": {
        height: 200,
        width: 200,
        top: 110,
      },
    },
  },
}));
