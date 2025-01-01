import React, { useEffect } from 'react'
import "./Fse.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Revealing from '../Common/RevealingText/Revealing';
function Fse() {

  useEffect(() => {

    document.title = "FSE | FootPrints'23"

  }, [])


  return (
    <>
      <div className="fse_header_img">
        <img
          src={
            window.innerWidth > 800
              ? "https://res.cloudinary.com/ds4a2i0b7/image/upload/v1674647488/Footprints_Stock_Exchange_tezzmt.gif"
              : "https://res.cloudinary.com/ds4a2i0b7/image/upload/v1674647376/Footprints_Stock_Exchange_1_srg9as.gif"
          }
          alt="Fse-header"
          id="fse-header"
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

export default Fse;
