import React,{useEffect} from "react";
import "./Acco.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Heading from "../Common/Headings/Heading";
import Revealing from '../Common/RevealingText/Revealing';

function Acco() {

  useEffect(() => {
  
    document.title="Accomodation || FootPrints'23"

  }, [])

  return (
    <>
      <div className="acco_header_img" id="parent_div">
        {/* <img
          src="https://res.cloudinary.com/doe7b5us3/image/upload/v1674731120/Kaleido/6228688_mo8sfs.jpg"
          alt="Accomodation-header"
          id="acco-header"
        /> */}
        <div className="text-on-image-acco">
          {/* <p>Accomodation</p> */}
          <Heading id="heading_sponsors_page" title="ACCOMODATION" />
        </div>
        {/* <hr /> */}
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

export default Acco;
