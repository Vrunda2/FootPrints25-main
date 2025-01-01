import React, {useEffect} from 'react'
import TaleidoData from "../../Data/Taleido";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Taleido.css";
import Heading from "../Common/Headings/Heading";

function Taleido() {

  useEffect(() => {
  
    document.title="Taleidoscope | FootPrints'23"

  }, [])

  return (
    <>
      <section id="Taleido">
        <div className="T_header_img">
          <img
            src={
              window.innerWidth > 800
                ? "https://res.cloudinary.com/dm4earvp9/image/upload/v1674626721/Kaleidoscope-_vvhne5.gif"
                : "https://res.cloudinary.com/dm4earvp9/image/upload/v1674627307/Kaleidoscope__1_i8xzzp.gif"
            }
            alt="Kaleido-header"
            id="kaleidoT-header"
          />
          <hr />
        </div>

        <div className="container">
          <Heading
            className="taleido_heading"
            id="glheading"
            title="TALEIDOSCOPE"
          />

          {TaleidoData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="taleido_lec content">
                    <div className="about_taleido about_taleido_para1">
                      <div className="taleido_heading">
                        <h3 className="taleido_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-taleido">
                        {" "}
                        {element.content}
                      </p>
                      <a
                        href={element.ytlink}
                        className="yt-link-part"
                        target="_blank"
                      >
                        {/* YouTube Link */}
                        Watch Now
                      </a>
                    </div>

                    <div
                      className="taleido_img taleido_img_style"
                      data-aos="zoom-in-right"
                      data-aos-duration="1000"
                      data-aos-delay="100"

                    >
                      <img
                        src={element.imgSrc}
                        className="Taleido-img"
                        alt={element.name}
                      />
                    </div>

                    <div className="about_taleido about_taleido_para2">
                      <div className="taleido_heading">
                        <h3 className="taleido_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>

                      <p className="text-without-icon-taleido">
                        {" "}
                        {element.content}
                      </p>
                      <a
                        href={element.ytlink}
                        className="yt-link-part"
                        target="_blank"
                      >
                        YouTube Link
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="taleido_lec">
                  <div
                    className="taleido_img"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-delay="100"

                  >
                    <img
                      src={element.imgSrc}
                      className="Taleido-img"
                      alt={element.name}
                    />
                  </div>

                  <div className="about_taleido para1">
                    <div className="taleido_heading">
                      <h3 className="taleido_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-taleido">
                      {element.content}
                    </p>
                    <a
                      href={element.ytlink}
                      className="yt-link-part"
                      target="_blank"
                    >
                      YouTube Link
                    </a>
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

export default Taleido;
