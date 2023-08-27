import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const ServicePageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px",
    "& .grid-container": {
      padding: "50px ",
      textAlign: "left",
    },
    "& .main-title": {
      fontSize: 40,
      lineHeight: 1.1,
      textAlign: "left",
      fontFamily: "kanit-light",
    },
    "& .sub-title": {
      marginTop: 20,
      fontSize: 18,
      textAlign: "left",
      fontFamily: "kanit-light",
    },
    "& .services-card": {
      background: "#f2f2f2",
      textAlign: "center",
      paddingTop: 80,
      height: 200,
      maxWidth: 500,
    },
    "& .card-title": {
      color: theme.palette.primary.light,
      fontSize: 25,
    },
    "& .main-btn": {
      width: 150,
      background: theme.palette.primary.main,
      color: "#fff",
      marginTop: 50,
      borderRadius: "10px",
      textTransform: "capitalize",
      "&:hover": {
        background: theme.palette.primary.main,
        color: "#fff",
      },
    },
    [theme.breakpoints.up("xl") ?? "600"]: {
      "& .main-title": {
        marginTop: 70,
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
  },
}));
