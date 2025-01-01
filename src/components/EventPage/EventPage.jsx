import React, { useContext, useEffect } from "react";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import OneLinerEventData from "../../Data/Onliner";
import "./EventPage.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import ThemeContext from "../../Context/Theme/ThemeContext";
import Loader from "../Common/Loader/Loader";
import TechHeaderImg from "../../Data/TechHeaderImg";

const EventPage = () => {
  const param = useParams();
  const context = useContext(ThemeContext);


  useEffect(() => {
    document.title = `${(param.name).slice(0, 1).toUpperCase() + (param.name).slice(1)} | FootPrints'23`
  }, [])

  const getEvents = async () => {
    const res = await fetch(`${context.BASE_URL}/api/event/${param.name}/`);
    return res.json();
  };
  const { isError, isFetched, isLoading, data } = useQuery(
    "event-data",
    getEvents
  );


  if (isLoading) {
    return (
      <Loader size={'lg'} />
    );
  }

  if (isError) {
    return <h1>Error!!</h1>;
  }
  if (isFetched) {
    console.log(TechHeaderImg)
    return (
      <section id="Dep_Events">
        <div className="event-container">
          <div className="T_header_img">
            {TechHeaderImg.filter(
              (element) => element.event == param.name.toLocaleLowerCase()
            ).map((eveimage, index) => {
              return (
                <img
                  key={index}
                  src={
                    window.innerWidth > 800
                      ? eveimage.image[1].largesrc
                      : eveimage.image[0].smallsrc
                  }
                  alt="image"
                />
              );
            })}
            <hr />
          </div>
          <div
            className="center-portion"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="problem">
              {TechHeaderImg.filter(
                (element) => element.event == param.name.toLocaleLowerCase()
              ).map((eventdes, index) => {
                return (
                  <div key={index}>
                    <h3>{eventdes.heading}</h3>
                    <p>{eventdes.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="events">
          {data[0].sub_event.map((item, index) => {
            // console.log(item.parent_slug);
            return (
              <div className="pics" key={index}>
                <div
                  className="image-card"
                  id="try1"
                  data-aos="flip-up"
                  data-aos-duration="1500"
                >
                  <img src={item.event_img} className="image" />

                  <div className="oneline-overlay" id="test1">
                    {/* <p className="hover-text">{item.short_desc}</p> */}
                    {OneLinerEventData.filter(
                      (element) =>
                        element.subEvent == item.name.toLocaleLowerCase()
                    ).map((desc, index) => {
                      // console.log(item.slug);
                      return (
                        <p key={index} className="hover-text">
                          {desc.oneliner}
                        </p>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => {
                    window.location = `/event/${item.parent_slug.toLocaleLowerCase()}/${item.slug.toLocaleLowerCase()}`;
                  }}
                  className="readBtn"
                  id="readBtn123"
                >
                  learn more
                </button>
              </div>
            );
          })}
        </div>
        <Sponsors />
        <Footer />
      </section>
    );
  }
};
export default EventPage;
