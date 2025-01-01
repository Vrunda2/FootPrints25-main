import React from "react";
// import Img from "../../../assets/images/Insta-icon3.png";
import Heading from "../../Common/Headings/Heading";
import './Glimpse.css'

const Glimpse = () => {
  return (
    <>
      <Heading id="heading_glimpse" title="CATCH THE GLIMPSE" />
      <div className="yt-videos">
        <div className="glimpse" data-aos="zoom-in"  data-aos-delay="100"  data-aos-duration="1200">
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/8WBh9tEzzeQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="glimpse" data-aos="zoom-in" data-aos-delay="100"  data-aos-duration="1200">
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/6p5UVHeReA0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="glimpse" data-aos="zoom-in"  data-aos-delay="100"  data-aos-duration="1200">
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/W-vxQZUhKDw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Heading id="heading_flashback" title="FLASHBACK FRIDAY" />
      <div className="flash-video">
        <div
          className="link"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"  data-aos-duration="1200"
        >
          <a
            target="_blank"
            href="https://www.instagram.com/reel/ChuvQ05g7gI/?utm_source=ig_web_copy_link"
          >
            <img
              src="https://res.cloudinary.com/dynqt1htx/image/upload/v1666642035/Reel%20Part/Jasleen_-_web_ilghlg_t0cqfh.jpg"
              className="imagef"
              alt=""
              width="300px"
            />
            <div className="ig-overlay">
              <img
                src="https://res.cloudinary.com/dtddbqymx/image/upload/v1674675468/Insta-icon3_z0wufu.png"
                alt=""
              />
            </div>
          </a>
        </div>
        <div
          className="link"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"  data-aos-duration="1200"
        >
          <a
            target="_blank"
            href="https://www.instagram.com/reel/Cg3PD3QKGj7/?utm_source=ig_web_copy_link"
          >
            <img
              src="https://res.cloudinary.com/dynqt1htx/image/upload/v1666642047/Reel%20Part/FSR-reel-2_dmeyjw_zoh1iw.jpg"
              className="imagef"
              alt=""
              width="300px"
            />
            <div className="ig-overlay">
              <img
                src="https://res.cloudinary.com/dtddbqymx/image/upload/v1674675468/Insta-icon3_z0wufu.png"
                alt=""
              />
            </div>
          </a>
        </div>{" "}
        <div
          className="link"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"  data-aos-duration="1200"
        >
          <a
            target="_blank"
            href="https://www.instagram.com/reel/CeVyZm6KR3S/?utm_source=ig_web_copy_link"
          >
            <img
              src="https://res.cloudinary.com/dynqt1htx/image/upload/v1666642067/Reel%20Part/Dome-reel-3_adidq8_kgaxqn.jpg"
              className="imagef"
              alt=""
              width="300px"
            />
            <div className="ig-overlay">
              <img
                src="https://res.cloudinary.com/dtddbqymx/image/upload/v1674675468/Insta-icon3_z0wufu.png"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
      <img src="" alt="" />
    </>
  );
};

export default Glimpse;
