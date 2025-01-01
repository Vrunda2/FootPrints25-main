import React, {useEffect} from 'react'
import "./MediaPage.css"
import Heading from '../Common/Headings/Heading'
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";

function MediaPage() {

    useEffect(() => {
  
        document.title="Media | FootPrints'23"
    
      }, [])

    return (
      <>
        <div className="media_header_img" id="parent_div">
          <div className="text-on-image-media">
            <Heading id="heading_media" title="MEDIA COVERAGE" />
          </div>
        </div>
        <div className="section-xs container">
          {/* <Heading id="heading_media" title="MEADIA COVERAGE"/> */}

          {/* <img className="col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid" src="src/assets/images/Media/latest.jpeg" /> */}

          <img
            className="col-md-4 col-sm-12 col-xs-12 border-solid"
            src="https://res.cloudinary.com/dwdln9iy2/image/upload/v1676730002/Media/1_Media_iaznjj.jpg"
          />
          <img
            className="col-md-4 col-sm-12 col-xs-12 border-solid"
            src="https://res.cloudinary.com/dwdln9iy2/image/upload/v1676730002/Media/2_Media_epbo7c.jpg"
          />

          <img
            className="col-lg-4 col-md-4 col-sm-12 col-xs-12 border-solid"
            src="https://res.cloudinary.com/dwdln9iy2/image/upload/v1676730009/Media/3_Media_drenod.jpg"
          />
      

          <img
            className="col-lg-12 col-md-12 col-sm-6 col-xs-12 border-solid"
            src="https://www.msufp.in/2019/images/media/m_2(1).jpg"
          />
          <img
            className="col-md-6 col-sm-6 col-xs-12 border-solid"
            src="https://www.msufp.in/2019/images/media/m_1.jpg"
          />
          <img
            className="col-md-5 col-sm-6 col-xs-12 border-solid"
            src="https://www.msufp.in/2019/images/media/m_3(1).jpg"
          />
          <img
            className="col-md-5 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_2.jpg"
          />
          <img
            className="col-md-7 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_18.jpg"
          />
          <img
            className="col-md-4 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_10.jpg"
          />
          <img
            className="col-md-8 col-sm-10 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_13.jpg"
          />
          <img
            className="col-md-12 col-sm-12 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_3.jpg"
          />
          <img
            className="col-md-5 col-sm-5 col-xs-12 border-solid"
            src="https://www.msufp.in/2019/images/media/m_4.jpg"
          />
          <img
            className="col-md-5 col-sm-5 col-xs-12 border-solid"
            src="https://www.msufp.in/2019/images/media/m_9.jpg"
          />

          <img src="https://www.msufp.in/2019/images/media/m_5.png" />

          <br />
          <img
            className="col-md-6 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_12.jpg"
          />
          <img src="https://www.msufp.in/2019/images/media/m_8.jpg" />

          <br />

          <img
            className="col-md-6 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_6.jpg"
          />
          <img
            className="col-md-5 col-sm-5 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_7.jpg"
          />
          <img
            className="col-md-12 col-sm-12 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_16.jpg"
          />

          <img
            className="col-md-6 col-sm-6 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_17.jpg"
          />

          <img src="https://www.msufp.in/2019/images/media/m_14.jpg" />
          <img src="https://www.msufp.in/2019/images/media/m_15.jpg" />

          <img
            className="col-md-12 col-sm-12 col-xs-12"
            src="https://www.msufp.in/2019/images/media/m_11.jpg"
          />
            </div>
            <Sponsors />
            <Footer />
      </>
    );
}

export default MediaPage

