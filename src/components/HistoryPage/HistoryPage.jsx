import React, { useEffect } from "react";
import HistoryData from "../../Data/HistoryData";
import Heading from "../Common/Headings/Heading";
import "./HistoryPage.css";

function HistoryPage() {

  useEffect(() => {
  
    document.title="History | FootPrints'25"

  }, [])

  useEffect(() => {

    let agPosY;
    let agHeight;
    let agTop;

    (function ($) {
      $(function () {


        $(window).on('scroll', function () {
          fnOnScroll();
        });

        $(window).on('resize', function () {
          fnOnResize();
        });


        let agTimeline = $('.js-timeline'),
          agTimelineLine = $('.js-timeline_line'),
          agTimelineLineProgress = $('.js-timeline_line-progress'),
          agTimelinePoint = $('.js-timeline-card_point-box'),
          agTimelineItem = $('.js-timeline_item'),
          agOuterHeight = $(window).outerHeight(),

          f = -1,
          agFlag = false;

        agHeight = $(window).height();

        function fnOnScroll() {

          agPosY = $(window).scrollTop();

          fnUpdateFrame();
        }

        function fnOnResize() {
          agPosY = $(window).scrollTop();
          agHeight = $(window).height();

          fnUpdateFrame();
        }

        function fnUpdateWindow() {
          agFlag = false;

          agTimelineLine.css({
            top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
            bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
          });

          f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
        }

        function fnUpdateProgress() {
          agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

          let i = agTop + agPosY - $(window).scrollTop();
          let a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
          let n = agPosY - a + agOuterHeight / 2;
          i <= agPosY + agOuterHeight / 2 && (n = i - a);
          agTimelineLineProgress.css({ height: n + "px" });

          agTimelineItem.each(function () {
            agTop = $(this).find(agTimelinePoint).offset().top;

            (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
          })
        }

        function fnUpdateFrame() {
          agFlag || requestAnimationFrame(fnUpdateWindow);
          agFlag = true;
        }


      });
    })(jQuery);


  })


  return (
    <>
      <section id="history">
        <div className="history_header_img" id="parent_div">
          <div className="text-on-image-history">
            <Heading id="history_heading" title="HISTORY" />
          </div>
        </div>

        <div className="ag-timeline-block">
          <section className="ag-section">
            <div className="ag-format-container">
              <div className="js-timeline ag-timeline">
                <div className="js-timeline_line ag-timeline_line">
                  <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
                </div>

                <div className="ag-timeline_list">
                  {HistoryData.map((element, index) => {
                    return (
                      <div
                        className="js-timeline_item ag-timeline_item"
                        key={index}
                      >
                        <div className="ag-timeline-card_box">
                          {(index + 1) % 2 == 1 ? (
                            <>
                              <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">
                                  20{element.year}
                                </div>
                              </div>

                              <div className="ag-timeline-card_meta-box">
                                <div className="ag-timeline-card_meta">
                                  Footprints'{element.year}
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="ag-timeline-card_meta-box">
                                <div className="ag-timeline-card_meta">
                                  Footprints'{element.year}
                                </div>
                              </div>

                              <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                                <div className="ag-timeline-card_point">
                                  20{element.year}
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        <div className="ag-timeline-card_item">
                          <div className="ag-timeline-card_inner">
                            <div className="ag-timeline-card_info">
                              <div className="ag-timeline-card_title">
                                Footprints'{element.year}
                              </div>

                              <div className="ag-timeline-card_desc">
                                <h3>{element.heading}</h3>

                                <p>{element.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="ag-timeline-card_arrow"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default HistoryPage;
