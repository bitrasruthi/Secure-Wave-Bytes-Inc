import { useRef, useState } from "react";
import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { AboutPageStyles } from "../styles/AboutPageStyles";
import wave5 from "../assets/gifs/wave5.gif";
import sercureDataVideo from "../assets/video/securedData.mp4";
import poster from "../assets/images/poster1.jpg";
import project1 from "../assets/images/p1.webp";
import project2 from "../assets/images/p2.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const AboutPage = () => {
  const classes = AboutPageStyles();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isPlaying2, setIsPlaying2] = useState<boolean>(true);
  const videoRef = useRef<any>(null);
  const videoRef2 = useRef<any>(null);

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handlePlayButtonClick2 = () => {
    setIsPlaying2(!isPlaying2);
    if (isPlaying2) {
      videoRef2.current.play();
    } else {
      videoRef2.current.pause();
    }
  };

  return (
    <>
      <Box className={classes.root} sx={{ padding: { xs: "5px", md: "30px" } }}>
        <Grid container spacing={5} className="grid-container">
          <Grid item sm={12} md={6} className="border-line">
            <Typography className="main-title">100% Secured Data</Typography>
            <Typography className="sub-title">
              Our cutting-edge technologies and industry expertise converge to
              create an impregnable fortress for your valuable information.
              Through meticulous end-to-end encryption, multi-factor
              authentication, and stringent access controls, we ensure that your
              data remains inaccessible to unauthorized entities.
            </Typography>
            <Button className="main-btn">Learn More</Button>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box className="wave-style">
              <img src={wave5} width={"100%"} height={"100%"} />
            </Box>
            <Avatar className="video-style">
              <video
                className="custom-video-player"
                src={sercureDataVideo}
                poster={poster}
                ref={videoRef}
              />
              {isPlaying ? (
                <PlayArrowIcon
                  className="play-button"
                  onClick={handlePlayButtonClick}
                />
              ) : (
                <PauseIcon
                  className="play-button"
                  onClick={handlePlayButtonClick}
                />
              )}
            </Avatar>
          </Grid>
          <Grid mt={15} item sm={12} md={6}>
            <Box className="wave2-style">
              <img src={wave5} width={"100%"} height={"100%"} />
            </Box>
            <Avatar className="video-style">
              <video
                className="custom-video-player"
                src={sercureDataVideo}
                poster={poster}
                ref={videoRef2}
              />
              {isPlaying2 ? (
                <PlayArrowIcon
                  className="play-button"
                  onClick={handlePlayButtonClick2}
                />
              ) : (
                <PauseIcon
                  className="play-button"
                  onClick={handlePlayButtonClick2}
                />
              )}
            </Avatar>
          </Grid>
          <Grid mt={15} item sm={12} md={6} className="border-line">
            <Typography className="main-title">
              24/7 Customer Support
            </Typography>
            <Typography className="sub-title">
              Our dedication to your satisfaction knows no bounds. With our 24/7
              customer support, we're always here to address your needs, no
              matter the hour. Whether you have questions, require assistance,
              or need expert guidance, our team is your steadfast partner,
              ensuring your journey with us is smooth, supported, and
              hassle-free.
            </Typography>
            <Button className="main-btn">Learn More</Button>
          </Grid>
          <Grid item xs={12} mt={8}>
            <Divider sx={{ backgroundColor: "#fff" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography className="main-title">
              Some of Our Sample Projects
            </Typography>
            <Box
              mt={5}
              mb={10}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box width={"45%"} height={"5%"}>
                <img src={project1} width={"100%"} height={"100%"} />
                <Typography className="sub-title">
                  Empower users to track and improve their eco-friendly choices
                  with real-time sustainability insights.
                </Typography>
              </Box>
              <Box width={"45%"} height={"40%"}>
                <img src={project2} width={"100%"} height={"100%"} />
                <Typography className="sub-title">
                  Revolutionize health management by offering tailored resources
                  and guidance for users' well-being journeys.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}>
        <Divider />
      </Box>
    </>
  );
};

export default AboutPage;
