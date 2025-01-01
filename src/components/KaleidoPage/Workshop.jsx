import React, { useEffect } from "react";
import { PrevWorkshopData, CurrentWorkshopData } from "../../Data/Workshop";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Workshop.css";
import Heading from "../Common/Headings/Heading";

function Workshop() {
  useEffect(() => {
    document.title = "Workshops | FootPrints'23";
  }, []);

  return (
    <>
      <section id="Workshop">
        <div className="W_header_img">
          <img
            src={
              window.innerWidth > 800
                ? "https://res.cloudinary.com/dm4earvp9/image/upload/v1674626721/Kaleidoscope-_vvhne5.gif"
                : "https://res.cloudinary.com/dm4earvp9/image/upload/v1674627307/Kaleidoscope__1_i8xzzp.gif"
            }
            alt="Kaleido-header"
            id="kaleido-header"
          />
          <hr />
        </div>

        <div className="container">
          {/* <p id="reveling-heading"> REVEALING SOON! </p> */}
          <Heading
            className="workshop_heading"
            id="glheading"
            title="WORKSHOPS"
          />

          {CurrentWorkshopData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="workshop_lec content">
                    <div className="about_workshop about_workshop_para1">
                      <div className="workshop_heading">
                        <h3 className="workshop_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-workshop">
                        {" "}
                        {element.content}
                      </p>
                      <p className="clock-icon">
                        <i className="fa fa-light fa-calendar"></i> &nbsp;
                        {element.date}
                      </p>
                    </div>

                    <div
                      className="workshop_img workshop_img_style"
                      data-aos="zoom-in-right"
                      data-aos-duration="1000"
                      data-aos-delay="100"

                    >
                      <img
                        src={element.imgSrc}
                        className="Workshop-img"
                        alt={element.name}
                      />
                    </div>

                    <div className="about_workshop about_workshop_para2">
                      <div className="workshop_heading">
                        <h3 className="workshop_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-workshop">
                        {" "}
                        {element.content}
                      </p>
                      <p className="clock-icon">
                        <i className="fa fa-light fa-calendar"></i> &nbsp;
                        {element.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="workshop_lec">
                  <div
                    className="workshop_img"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-delay="100"

                  >
                    <img
                      src={element.imgSrc}
                      className="Workshop-img"
                      alt={element.name}
                    />
                  </div>

                  <div className="about_workshop para1">
                    <div className="workshop_heading">
                      <h3 className="workshop_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-workshop">
                      {element.content}
                    </p>
                    <p className="clock-icon">
                      <i className="fa fa-light fa-calendar"></i> &nbsp;
                      {element.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <Heading
            className="workshop_heading"
            id="glheading"
            title="PREVIOUS WORKSHOPS"
          />

          {PrevWorkshopData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="workshop_lec content">
                    <div className="about_workshop about_workshop_para1">
                      <div className="workshop_heading">
                        <h3 className="workshop_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-workshop">
                        {" "}
                        {element.content}
                      </p>
                    </div>

                    <div
                      className="workshop_img workshop_img_style"
                      data-aos="zoom-in-right"
                      data-aos-duration="1000"
                      data-aos-delay="100"

                    >
                      <img
                        src={element.imgSrc}
                        className="Workshop-img"
                        alt={element.name}
                      />
                    </div>

                    <div className="about_workshop about_workshop_para2">
                      <div className="workshop_heading">
                        <h3 className="workshop_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-workshop">
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
                <div className="workshop_lec">
                  <div
                    className="workshop_img"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-delay="100"

                  >
                    <img
                      src={element.imgSrc}
                      className="Workshop-img"
                      alt={element.name}
                    />
                  </div>

                  <div className="about_workshop para1">
                    <div className="workshop_heading">
                      <h3 className="workshop_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-workshop">
                      {element.content}
                    </p>
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

export default Workshop;
