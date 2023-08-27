import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import { Box } from "@mui/material";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Box margin={"20px 40px"}>
      <HomePage />
      <IntroPage />
      <ServicePage />
      <AboutPage />
      <ContactPage />
    </Box>
  );
}

export default App;
