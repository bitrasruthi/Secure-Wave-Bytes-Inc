import { Box, Divider, Grid, Typography } from "@mui/material";
import wave3 from "../assets/gifs/wave3.gif";
import wave4 from "../assets/gifs/wave4.gif";
import { IntroPageStyles } from "../styles/IntroPageStyles";

const IntroPage = () => {
  const classes = IntroPageStyles();
  return (
    <>
      <Box className={classes.root} sx={{ padding: { xs: "5px", md: "30px" } }}>
        <Grid container spacing={5} className="grid-container">
          <Grid item xs={12} md={6}>
            <Typography className="main-title">You can count on us.</Typography>
            <Box className="wave-style">
              <img src={wave3} width={"100%"} height={"100%"} />
            </Box>
            <Box className="wave2-style">
              <img src={wave4} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className="sub-title">
              Secure Wave Bytes Inc. understands the critical importance of data
              security in today's digital landscape. With our unwavering
              commitment to security, reliability, and customer satisfaction,
              you can rely on us to deliver robust and trusted data protection.
              Our team of experienced professionals is dedicated to ensuring the
              integrity and confidentiality of your data, providing you with the
              confidence and assurance you need. Choose Secure Wave Bytes Inc.
              as your partner in data security and experience the peace of mind
              that comes with knowing your sensitive information is in safe
              hands.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};

export default IntroPage;
