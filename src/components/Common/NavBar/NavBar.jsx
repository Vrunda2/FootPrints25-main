import React, { useRef } from "react";
// import ThemeContext from "../../../Context/Theme/ThemeContext";
import { Link } from "react-router-dom";

import "./Navbar.css";

import menuItems from "../../../Data/menuItems";

export default function NavBar(props) {

  /* array of technical event */

  // const techEvent=["Cybernetics" ,"Macheanema", "Citadel", "Sanganikee", "Rasayanam", "Lycra" ,"OpenX"];

  // const context = useContext(ThemeContext);
  // const toggleBtn = useRef([]);
  const toggleHamburger = useRef(null);

  // useEffect(() => {
  //   themeState = sessionStorage.getItem("Fp-theme");
  //   themeIcon = sessionStorage.getItem("Fp-icon");

  //   if (themeState == "light" && themeIcon == "moon") {
  //     sessionStorage.setItem("Fp-theme", "dark");

  //     sessionStorage.setItem("Fp-icon", "sun");

  //     toggleBtn.current[0].click();
  //   }
  // }, [Location.pathname,window.innerWidth]);

  /* Hamburger function in Navbar */

  const toggleHamburgerFunc = (e) => {

    if (e.current.classList.contains('fa-list-ul')) {
      e.current.classList.remove('fa-list-ul');
      e.current.classList.add('fa-xmark');

    }

    else {
      e.current.classList.remove('fa-xmark');
      e.current.classList.add('fa-list-ul');

    }
  };

  return (
    <header className="nav-header ">
      <Link to={"./home"} className="navbar-logo flex-grow-1">
        <img
          src={`https://res.cloudinary.com/dwdln9iy2/image/upload/v1674703728/Logo/Logo-for-website_kqjzy6.png`}
          alt="Footprints'23"
        />
      </Link>

      <input type="checkbox" name="" id="menu-bar" />

      <label htmlFor="menu-bar" className="">
        <span>
          <i
            className="fa-solid fa-list-ul"
            id="navicon"
            style={{ color: "var(--yellow-to-black)" }}
            ref={toggleHamburger}
            onClick={(event) => {
              event.stopPropagation();
              toggleHamburgerFunc(toggleHamburger);
            }}></i>
        </span>
      </label>
      {/* <span
        style={{ color: "var(--white)" }}
        className="ms-3 d-xl-none">
        <i
          onClick={(event) => {
            event.stopPropagation();
            props.switchTheme();
          }}
          style={{ cursor: "pointer" }}
          id="iconsTheme"
          className={props.icon}
          ref={(ele) => (toggleBtn.current[0] = ele)}></i>
      </span> */}

      {/* <span><i class="fa fa-regular fa-robot-astromech"></i></span> */}
      <nav className="custom-navbar">
        {/* Main List =>  Which is Horizontal : Technotron Kaliedoscope Rolling Square Quest Stock Exchange Virtuosity Accomodation More  */}

        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a style={{ cursor: "pointer" }}>
                {item.title}
                &nbsp;   &nbsp;
                {item.title == "More" ? <i id="dots" className="fa-solid fa-ellipsis-vertical"></i> : ""}
              </a>

              {/* Major Events => Which is a Events of Segments  :  Cybernatics Mechenema Citadel Sanganikee Rasyanam Lycra OpenX Enviorosavy */}

              {item.subItems ? (
                <ul className="subItems">
                  {item.subItems.map((subItem, idx) => (
                    <li key={idx + 999}>

                      {/* id="thirdhirarchy" */}

                      <a id="thirdhirarchy" target={(subItem.title == "Blog" || subItem.title == "WebTeam") ? "_blank" : ""} href={subItem.link || "#"}>

                        <span>{subItem.title}</span>

                        {/* <span>{techEvent.includes(subItem.title) ? <i id="dots" className="fa-solid fa-angle-right"></i> : ""}</span> */}

                      </a>

                      {/* Events => Which is a Events of Particular department  : Runtime Protocol Appster */}

                      <ul>
                        {subItem.subItems &&
                          subItem.subItems.map((subItem, idx) => (
                            <li key={idx + 9999}>
                              <a id="subsubEvent" target="" href={subItem.link || "#"}>
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </li>
          ))}
          {/* <li className="d-none d-xl-block">
            <a onClick={props.switchTheme} style={{ cursor: "pointer" }}>
              <i
                id="iconsTheme"
                className={props.icon}
                ref={(ele) => (toggleBtn.current[1] = ele)}></i>
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
