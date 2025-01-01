import React, {useEffect} from 'react'
import FsrData from "../../Data/Fsr";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Fsr.css";
import Heading from "../Common/Headings/Heading";


function Fsr() {

  useEffect(() => {
  
    document.title="FSR | FootPrints'23"

  }, [])
  
  return (
    <>
      <section id="Fsr">
        <div className="FSR_header_img">
          <img
            src={
              window.innerWidth > 800
                ? "https://res.cloudinary.com/ds4a2i0b7/image/upload/v1674647378/Footprints_Social_Responsibility_-_hghlfp.gif"
                : "https://res.cloudinary.com/ds4a2i0b7/image/upload/v1674647377/Footprints_Social_Responsibility__1_xkeuot.gif"
            }
            alt="FSR-header"
            id="fsr-header"
          />
          <hr />
        </div>

        <div className="container">
          <Heading className="fsr_heading" id="glheading" title="FSR DRIVES" />

          {FsrData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="fsr_lec content">
                    <div className="about_fsr about_fsr_para1">
                      <div className="fsr_heading">
                        <h3 className="fsr_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-fsr">
                        {" "}
                        {element.content}
                      </p>
                    </div>

                    <div className="fsr_img fsr_img_style">
                      <img
                        src={element.imgSrc}
                        className="Fsr-img"
                        alt={element.name}
                      />
                    </div>

                    <div className="about_fsr about_fsr_para2">
                      <div className="fsr_heading">
                        <h3 className="fsr_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>

                      <p className="text-without-icon-fsr">
                        {" "}
                        {element.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="fsr_lec">
                  <div className="fsr_img">
                    <img
                      src={element.imgSrc}
                      className="Fsr-img"
                      alt={element.name}
                    />
                  </div>

                  <div className="about_fsr para1">
                    <div className="fsr_heading">
                      <h3 className="fsr_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-fsr">{element.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Sponsors />
      <Footer />
    </>
  );
}

export default Fsr;
