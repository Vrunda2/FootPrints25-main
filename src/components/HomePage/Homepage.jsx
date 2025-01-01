import React, { useEffect } from "react";
import Footer from "../Common/Footer/Footer";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Testimonials from "./Testimonials/Testimonials";
import Achivements from "./Achivements/Achivements";
import Segment from "./Segment/Segment";
import Glimpse from "./Glimpse/Glimpse";
import Home from "./Home/Home";

// Common CSS File //
import '../Common/CSS/MediaQuery.css';
import '../Common/CSS/Root.css';

function Homepage() {

  useEffect(() => {

    document.title = "Home | FootPrints'23"

  }, [])

  return (

    <>
      <Home />
      <Segment />
      <Glimpse />
      <Testimonials />
      <Achivements />
      <Sponsors />
      <Footer />
    </>
  );
}

export default Homepage;
