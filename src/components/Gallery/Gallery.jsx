import React, {useEffect} from 'react'
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import './Gallery.css'


const Gallery = () => {

  useEffect(() => {
  
    document.title="Gallery | FootPrints'23"

  }, [])

    let data = [
        {
            id: 1,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640244/Gallery/Jasleen_Royal_nlwvns_pjsgbn.jpg",
            title: "Rolling Squares",
            subtitle: "Concert",
        },
        {
            id: 2,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640179/Gallery/Burnout_e6cqzt_nnjmbj.jpg",
            title: "Macheanema",
            subtitle: "Burnout",
        },
        {
            id: 3,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640204/Gallery/Quest_mzgszb_ryo25v.jpg",
            title: "Quest",
            subtitle: "12th Battalion",
        },
        {
            id: 4,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640206/Gallery/Pawan_Agarwal_shmmm4_nhx9sb.jpg",
            title: "Kaleidoscope",
            subtitle: "Guest Lecture",
        },

        {
            id: 5,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640476/Gallery/FSR-gallery-changed_iokgbp.jpg",
            title: "FSR",
            subtitle: "FootPrints Social Responsibility",
        },

        {
            id: 6,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640514/Gallery/Deco_hisrcz_wysauj.jpg",
            title: "College Decoration",
            subtitle: "During the Fest",
        },
        {
            id: 7,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640502/Gallery/Smack_p59im9_ckixpk.jpg",
            title: "Sanganikee",
            subtitle: "SmackBotz",
        },
        {
            id: 8,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640130/Gallery/Beat_Cracker_auqvjn_zy24er.jpg",
            title: "Rolling squares",
            subtitle: "Concert",
        },
        {
            id: 9,
            imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640187/Gallery/Jampad_f4edla_uyok1p.jpg",
            title: "Jampad",
            subtitle: "Open Mic",
        },

    ]
    return (
      <>
        <div className="gal_header_img" id="parent_div">
          <div className="text-on-image-gal">
            <Heading id="heading_gallerypage" title="GALLERY" />
          </div>
        </div>
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                <img src={item.imgSrc} style={{ width: "100%" }} />
                <div className="img-overlay">
                  <div className="imgtext" style={{ textAlign: "center" }}>
                    <p className="imgtitle" style={{ fontSize: "25px" }}>
                      {item.title}
                    </p>
                    <hr />
                    <p className="imgsubtitle" style={{ fontSize: "22px" }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Sponsors />
        <Footer />
      </>
    );
}
export default Gallery