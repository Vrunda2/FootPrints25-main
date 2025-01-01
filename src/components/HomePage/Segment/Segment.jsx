import { Pagination, Mousewheel, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SegmentData from "../../../Data/SegmentData";
import Heading from '../../Common/Headings/Heading';
import Button from '../../Common/Buttons/Button';
// import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import "./Segment.css"

export default function Segment() {
    /* 
        let menu = ["TECHNOTRON", "KALIEDOSCOPE", "ROLLING SQUARES", "QUEST", "FSE", "FSR", "VIRTUOSITY", "MASCOT", "SCHITRON"];
        let icons = ["fa-screwdriver-wrench", "fa-user-tie", "fa-guitar", "fa-puzzle-piece", "fa-money-bill-trend-up", "fa-hand-holding-heart","fa-solid fa-gamepad", "fa-robot", "fa-school"];
         */

    let menu = ["TECHNOTRON", "KALIEDOSCOPE", "ROLLING SQUARES", "QUEST", "FSE", "VIRTUOSITY", "FSR", "SCHITRON"];
    let icons = ["fa-screwdriver-wrench", "fa-user-tie", "fa-guitar", "fa-puzzle-piece", "fa-money-bill-trend-up","fa-gamepad","fa-hand-holding-heart", "fa-school"];

    const pagination = {

        clickable: true,

        renderBullet: function (index, className) {

            return `<div class="${className} myCustom tooltip"> 
                        
                        <span class="tooltiptext">${menu[index]}</span>

                        <i class="fa fa-solid ${icons[index]}"></i>

                    </div>`;
        },
    };


    return (

        <section id="segments" >

            <div className="container">

                <Heading id="segment_heading" title="SEGMENTS" />

                <Swiper

                    modules={[Pagination, Mousewheel, Autoplay, EffectFade]}

                    className={"segmentsContainer"}

                    speed={3000}

                    spaceBetween={30}

                    loop={true}

                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                     }}

                    // mousewheel={true}

                    pagination={pagination}

                    effect={"fade"}

                     
                >
                    {SegmentData.map((segments, index) => {

                        return <SwiperSlide key={index} className="segmentItems" data-aos="fade-up" >

                            <div className="segmentImg">
                                <img src={segments.imgSrc} alt={segments.name} />
                            </div>

                            <div className="segmentContent">

                                <h1 className="segmentHeading">{segments.name}</h1>

                                <div className="segmentDescription">{segments.description}

                                </div>


                                <div className="eventsButtonGrp TechnotronButtons row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">

                                    {segments.events.map((events, index) => {

                                        return <div className="col" key={index}>
                                            {/* <Link to={"/home"} className="btn btn-primary eventButton" tabIndex="-1" role="button">{element}</Link> */}
                                            <Button title={events.name} className={`seg_btn_${segments.name}`} redirects={events.redirects} />
                                        </div>
                                    })}

                                </div>

                            </div>

                        </SwiperSlide>


                    })}

                </Swiper>

            </div >

        </section>



    );
};