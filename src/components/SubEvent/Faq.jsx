import React from "react";
import "./Faq.css"

function Faq(props) {

  // console.log("name : ", props.title);


  let { data, title } = props;
  data = String(data);

  return (
    <div
      onClick={() => props.toggleAccordion(props.index)}

    >
      <div className="acc-faqHeading">
        <h3 className={props.accordion === props.index ? "active" : ""}>
          {props.title}
        </h3>
        <div className="acc-openclose">
          {props.accordion === props.index ? (
            <>
              <span className="verticle">-</span>
            </>
          ) : (
            <>
              <span className="verticle">+</span>
            </>
          )}
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="acc-answer">
        <p
          style={{ whiteSpace: "pre-line" }}
          className={props.accordion === props.index ? "active" : "inactive"}
        >
          <ul>
            {data
              .split(/[ ]+/)
              .join(" ")
              .split('\n')
              .map((rules, index) => {

                /* Return start */

                return (
                  <>
                    {rules == "0" || rules == "" || rules.trim().includes("https") ? (<></>) :

                      (

                        <li key={index} className="rulesOfEvent">
                          {rules.trim()}
                          {rules.trim().includes("@") ? <li>Click on : <a className="YellowToWhite" href="mailto:abstract4fp23@msufp.in">abstract4fp23@msufp.in</a></li> : <></>}
                          {title == "Event Rules" ? " " : ""}
                        </li>

                      )

                    }

                    {
                      rules.trim().includes("https") ? <li>Website : <a className="YellowToWhite" href="https://msufp.in/hackprints2.0/">Hackprints 2.0</a></li> : <></>
                    }

                  </>

                );

                /* Return close */

              })}

          </ul>

          {/* {(props.data)} */}
        </p>
      </div>
    </div>
  );
}

export default Faq;
