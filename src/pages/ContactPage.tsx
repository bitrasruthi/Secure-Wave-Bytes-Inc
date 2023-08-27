import { ContactPageStyles } from "../styles/ContactPageStyles";
import { Box, Divider, Grid, Typography } from "@mui/material";
import wave3 from "../assets/gifs/wave3.gif";
import wave4 from "../assets/gifs/wave4.gif";
import wave2 from "../assets/gifs/wave2.gif";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactPage = () => {
  const classes = ContactPageStyles();

  return (
    <>
      <Box className={classes.root} sx={{ padding: { xs: "5px", md: "30px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5} mt={10}>
            <Typography className="main-title">
              Companies We've Worked With
            </Typography>
            <Box className="wave2-style">
              <img src={wave2} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={7} mt={10}>
            <Box className="border-line">
              <Typography textAlign={"left"}>
                Fueling business growth with advanced connectivity solutions
                that bridge gaps and unlock new opportunities in the digital
                landscape.
                <br />
                <br />
                <span className="sub-text">- TechNova Solutions</span>
              </Typography>
            </Box>
            <Box className="border-line" mt={2}>
              <Typography textAlign={"left"}>
                Redefining water management with smart technologies that
                optimize usage and conservation for a sustainable planet.
                <br />
                <br />
                <span className="sub-text">- AquaGlobe Innovations</span>
              </Typography>
            </Box>
            <Box className="border-line" mt={2}>
              <Typography textAlign={"left"}>
                Empowering data-driven decisions through a comprehensive suite
                of analytics tools, fostering success in a data-centric world.
                <br />
                <br />
                <span className="sub-text">- Veritas Nexus Ventures</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}>
        <Divider />
      </Box>
      <Box className={classes.root} sx={{ padding: { xs: "5px", md: "30px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <Typography className="main-title">Let's talk business.</Typography>
            <Box mt={5}>
              <Typography className="main-sub-title">PHONE</Typography>
              <Typography className="sub-title">(123) 456-7890</Typography>
            </Box>
            <Box mt={2}>
              <Typography className="main-sub-title">EMAIL</Typography>
              <Typography className="sub-title">
                hello@securewavebytes.com
              </Typography>
            </Box>
            <Box
              mt={5}
              className="border-line2"
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography className="main-sub-title">SOCIAL</Typography>
              <Box
                mt={1}
                display={"flex"}
                justifyContent={"space-between"}
                width={100}
              >
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            item
            xs={12}
            sm={4}
          >
            <Box className="wave3-style">
              <img src={wave4} width={"100%"} height={"100%"} />
            </Box>
            <Box className="wave-style">
              <img src={wave3} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactPage;
