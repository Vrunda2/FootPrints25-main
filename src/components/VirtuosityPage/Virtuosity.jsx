import React from "react";
import "./Virtuosity.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Revealing from '../Common/RevealingText/Revealing';

function Virtuosity() {
  return (
    <>
      <div className="Vir_header_img">
        <img
          src={
            window.innerWidth > 800
              ? "https://res.cloudinary.com/ds4a2i0b7/image/upload/v1674647378/virtuosity_zvvbdm.gif"
              : "https://res.cloudinary.com/ds4a2i0b7/image/upload/v1674647376/virtuosity_1_yjeq4u.gif"
          }
          alt="Virtuosity-header"
          id="virtuo-header"
        />
        <hr />
      </div>
      {/* <div className="reveal-text">
        <p className="reveal-soon-text">REVEALING SOON!</p>
      </div> */}
            <Revealing />

      <Sponsors />
      <Footer />
    </>
  );
}

export default Virtuosity;
