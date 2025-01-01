import React, {useEffect} from 'react'
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Heading from "../Common/Headings/Heading";
import "./Webteam.css";
import WebteamData from "../../Data/Webteam";

function WebTeam() {

  useEffect(() => {
  
    document.title="Website Team | FootPrints'23"

  }, [])

  return (
    <>
      {/* <div className="cover">
        <Heading id="heading_ourteam" title="Web Team" />
      </div> */}
      <div className="webteam_header_img" id="parent_div">
        <div className="text-on-image-webteam">
          <Heading id="heading_ourteam" title="WEB TEAM" />
        </div>
      </div>
      {/* <section id="achivements" className="acheivements section-bg container"> */}
      <div className="container">
        <div className="coordinatesDiv">
          <div className="memcards row my-5">
            {WebteamData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="memBlock col-sm-6 col-md-5 col-lg-3 profile"
                  data-aos="flip-left"
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
      </div>
      {/* </section> */}
      <Sponsors />
      <Footer />
    </>
  );
}

export default WebTeam;
