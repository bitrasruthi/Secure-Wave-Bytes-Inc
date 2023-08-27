import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const AboutPageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "30px",
    "& .main-title": {
      fontSize: 40,
      lineHeight: 1.1,
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
    "& .sub-title": {
      marginTop: 20,
      fontSize: 18,
      textAlign: "left",
      fontFamily: "kanit-light",
    },
    "& .main-btn": {
      width: 150,
      background: theme.palette.primary.light,
      color: "#fff",
      marginTop: 50,
      borderRadius: "10px",
      textTransform: "capitalize",
      "&:hover": {
        background: theme.palette.primary.light,
        color: "#fff",
      },
    },
    "& .wave-style": {
      height: 400,
      width: 400,
      transform: "rotate(5deg)",
      position: "absolute",
      marginTop: -30,
      marginLeft: 50,
    },
    "& .wave2-style": {
      height: 400,
      width: 400,
      transform: "rotate(185deg)",
      position: "absolute",
      marginTop: -30,
      marginLeft: 30,
    },
    "& .video-style": {
      position: "relative",
      top: 10,
      height: 330,
      width: 330,
      left: 70,
    },
    "& .custom-video-player": {
      height: 650,
      width: 650,
    },
    [theme.breakpoints.up("xl") ?? "600"]: {
      "& .main-title": {
        marginTop: 70,
      },
      "& .wave-style": {
        height: 400,
        width: 400,
        marginLeft: 200,
      },
      "& .wave2-style": {
        height: 400,
        width: 400,
        marginLeft: 170,
      },
      "& .video-style": {
        height: 330,
        width: 330,
        left: 200,
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
    },
    [theme.breakpoints.down("sm") ?? "600"]: {
      "& .wave-style": {
        height: 200,
        width: 200,
      },
      "& .wave2-style": {
        height: 200,
        width: 200,
        marginLeft: 0,
        marginTop: 10,
      },
      "& .video-style": {
        height: 180,
        width: 180,
        left: 30,
        top: 0,
      },
      "& .border-line": {
        marginLeft: 50,
      },
    },
  },
}));
