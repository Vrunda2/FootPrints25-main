import React, {useEffect} from 'react'
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Heading from "../Common/Headings/Heading";
import "./TeamFP.css";
import {
  coordinatorsData,
  ccData,
  orgcData,
  headsData,
} from "../../Data/TeamFP";

function TeamFP() {
  
  useEffect(() => {
  
    document.title="Team FP | FootPrints'23"

  }, [])

  return (
    <>
      {/* <div className="cover">
      <Heading id="heading_ourteam" title="Our Team" />
      </div> */}
      <div className="team_header_img" id="parent_div">
        <div className="text-on-image-team">
          <Heading id="heading_sponsors_page" title="OUR TEAM" />
        </div>
      </div>
      {/* <section id="achivements" className="acheivements section-bg container"> */}
      <div className="container">
        <div className="coordinatesDiv">
          <div className="heading">Coordinators</div>
          <div className="memcards row">
            {coordinatorsData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                  data-aos="zoom-in-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                >
                  <div className="img-box">
                    <img
                      src={element.imgSrc}
                      alt={element.name}
                      className="memImg"
                    />
                    <ul>
                      <li>
                        <a href={element.linked} target="_blank">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="memName">{element.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="headsDiv">
          <div className="heading">Heads</div>
          <div className="memcards row">
            {headsData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                >
                  <div className="img-box">
                    <img
                      src={element.imgSrc}
                      alt={element.name}
                      className="memImg"
                    />
                    <ul>
                      <li>
                        <a href={element.linked} target="_blank">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="memName">{element.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ccDiv">
          <div className="heading">Core Committee</div>
          <div className="memcards row">
            {ccData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                >
                  <div className="img-box">
                    <img
                      src={element.imgSrc}
                      alt={element.name}
                      className="memImg"
                    />
                    <ul>
                      <li>
                        <a href={element.linked} target="_blank">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="memName">{element.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="orgcDiv">
          <div className="heading">Organizing Team</div>
          <div className="memcards row">
            {orgcData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                >
                  <div className="img-box">
                    <img
                      src={element.imgSrc}
                      alt={element.name}
                      className="memImg"
                    />
                  </div>
                  <p className="memName">{element.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* </section> */}
      <Sponsors />
      <Footer />
    </>
  );
}

export default TeamFP;
