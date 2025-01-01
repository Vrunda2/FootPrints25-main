import React, { useEffect } from 'react'
import "./Quest.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Revealing from '../Common/RevealingText/Revealing';

function Quest() {


  useEffect(() => {

    document.title = "Quest | FootPrints'23"

  }, [])

  return (
    <>
      <div className="quest_header_img">
        <img
          src={
            window.innerWidth > 800
              ? "https://res.cloudinary.com/dm4earvp9/image/upload/v1674646527/Quest-_xjeizl.gif"
              : "https://res.cloudinary.com/dm4earvp9/image/upload/v1674646522/Quest__1_q1rwbr.gif"
          }
          alt="Quest-header"
          id="quest-header"
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

export default Quest;
