import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { ServicePageStyles } from "../styles/ServicePageStyles";

const servicesList = ["Secure Data", "24/7 Support", "Customized Solutions"];

const ServicePage = () => {
  const classes = ServicePageStyles();
  return (
    <>
      <Box className={classes.root} sx={{ padding: { xs: "5px", md: "30px" } }}>
        <Typography className="main-title">SERVICES WE PROVIDE</Typography>
        <Typography className="sub-title">
          At Secure Wave Bytes Inc., we offer a range of comprehensive data
          security services to protect your valuable information. From
          encryption and secure cloud storage solutions to advanced threat
          detection systems, our customized services are designed to meet your
          specific data protection needs. Trust us to keep your data safe and
          secure, allowing you to focus on your business goals with confidence.
        </Typography>
        <Grid container spacing={5} className="grid-container">
          {servicesList.map((item: any, index: number) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Box className="services-card">
                <Typography className="card-title">
                  {item.toUpperCase()}
                </Typography>
                <Button className="main-btn">Learn More</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={5}>
        <Divider />
      </Box>
    </>
  );
};

export default ServicePage;
