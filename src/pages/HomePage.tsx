import { Box, Divider, Grid, Typography } from "@mui/material";
import { HomePageStyles } from "../styles/HomePageStyles";
import wave1 from "../assets/gifs/wave1.gif";
import wave2 from "../assets/gifs/wave2.gif";
import logo from "../assets/images/logo.png";

const HomePage = () => {
  const classes = HomePageStyles();
  return (
    <>
      <Box className={classes.root} sx={{ padding: { xs: "5px", md: "30px" } }}>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
          }}
        >
          <img src={logo} width={50} height={50} />
          <Typography className="logo-title" ml={2}>
            Secure Wave Bytes Inc.
          </Typography>
        </Box>
        <Grid container spacing={1} className="grid-container">
          <Grid item sm={12} md={9} xl={8}>
            <Typography className="main-title">
              ALWAYS <br /> READY <br />
              TO MAKE YOUR
              <br /> LIFE BETTER
            </Typography>
            <Typography className="sub-title">Every step of the way</Typography>
          </Grid>
          <Grid item sm={12} md={3} xl={4}>
            <Box className="wave-style">
              <img src={wave1} width={"100%"} height={"100%"} />
            </Box>
            <Box className="wave2-style">
              <img src={wave2} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={15}>
        <Divider />
      </Box>
    </>
  );
};

export default HomePage;
