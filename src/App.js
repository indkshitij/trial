import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Footer from "./Components/Footer/footer.jsx";
import HeroSection from "./Components/Hero Section/hero.jsx";
import AboutSection from "./Components/AboutUs/AboutUs.jsx";
import WorkingProcess from "./Components/WorkingProcess/WorkingProcess.jsx";
import Appointment from "./Components/Appointment/Appointment.jsx";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkingProcess />
      <Appointment />
      <Footer />
    </>
  );
}

export default App;
