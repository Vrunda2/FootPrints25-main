import React from "react";
import ThemeContext from "./ThemeContext";

const BASE_URL = "https://footprint23.azurewebsites.net";

function ThemeState(props) {
  /* useState is a Asynchronous so it not affect immedatley Not used  */
  // const [theme, setTheme] = useState("light"); // -> Currenlty is on light theme

  let themeIcon;

  const toggleTheme = (ref) => {
    /* Logic */
    let theme = sessionStorage.getItem("Fp-theme");

    themeIcon = sessionStorage.getItem("Fp-icon");

    if (themeIcon == null) {
      sessionStorage.setItem("Fp-icon", "sun");
    }

    if (theme == null || theme == "dark") {
      theme = "light";
      sessionStorage.setItem("Fp-theme", theme);

      themeIcon = "moon";
      sessionStorage.setItem("Fp-icon", themeIcon);
      ref.classList.remove("fa-sun");
      ref.classList.add("fa-moon");
    } else {
      theme = "dark";
      sessionStorage.setItem("Fp-theme", theme);

      themeIcon = "sun";
      sessionStorage.setItem("Fp-icon", themeIcon);

      ref.classList.remove("fa-moon");
      ref.classList.add("fa-sun");
    }

    /* it works when we want to convert into "Dark Theme" */
    if (theme == "dark") {
      document.documentElement.style.setProperty("--white", "#fff");

      document.documentElement.style.setProperty("--yellow", "#ffc800");

      document.documentElement.style.setProperty("--icon-color", "#ffc800");

      document.documentElement.style.setProperty(
        "--background-color",
        "rgb(15, 15, 15)"
      );

      document.documentElement.style.setProperty(
        "--footer-background",
        "#020a08ab"
      );

      document.documentElement.style.setProperty(
        "--yellow-to-black",
        "#ffc800"
      );

      document.documentElement.style.setProperty(
        "--color-onHover-Theme",
        "#ffc800"
      );

      document.documentElement.style.setProperty(
        "--yellow-to-white",
        "#ffc800"
      );

      document.documentElement.style.setProperty("--card-shadow", "none");

      document.documentElement.style.setProperty("--card-border", "none");

      document.documentElement.style.setProperty(
        "--card-history-background",
        "#282828"
      );

      document.documentElement.style.setProperty("--filter-image", "none");

      document.documentElement.style.setProperty("--box-bg", "#171717");

      document.documentElement.style.setProperty(
        "--low-opacity-layer",
        "rgba(255, 255, 255, 0.619)"
      );

      document.documentElement.style.setProperty("--team-cover-bg", "black");

      document.documentElement.style.setProperty("--home-card-border", "none");

      document.documentElement.style.setProperty("--white-to-blue", "white");

      document.documentElement.style.setProperty("--yellow-to-blue", "#ffc800");
    } else {

      /* it works when we want to convert into "light Theme" */
      document.documentElement.style.setProperty("--white", "black");

      document.documentElement.style.setProperty("--yellow", "white");

      document.documentElement.style.setProperty("--icon-color", "black");

      document.documentElement.style.setProperty("--background-color", "white");

      document.documentElement.style.setProperty(
        "--footer-background",
        "black"
      );

      document.documentElement.style.setProperty("--yellow-to-black", "black");

      document.documentElement.style.setProperty(
        "--color-onHover-Theme",
        "#7d6e21"
      );

      document.documentElement.style.setProperty("--yellow-to-white", "white");

      document.documentElement.style.setProperty(
        "--card-shadow",
        " -3px 6px 4px #524e4e"
      );

      document.documentElement.style.setProperty(
        "--card-border",
        "1px solid black"
      );

      document.documentElement.style.setProperty(
        "--card-history-background",
        "white"
      );

      document.documentElement.style.setProperty(
        "--filter-image",
        "grayscale(1)"
      );

      document.documentElement.style.setProperty("--box-bg", "white");

      document.documentElement.style.setProperty(
        "--low-opacity-layer",
        "black"
      );

      document.documentElement.style.setProperty(
        "--team-cover-bg",
        "whitesmoke"
      );

      document.documentElement.style.setProperty(
        "--home-card-border",
        "#8f8888"
      );

      document.documentElement.style.setProperty("--white-to-blue", "#0d6efd");

      document.documentElement.style.setProperty("--yellow-to-blue", "#0d6efd");
    }
  };

  return (
    <ThemeContext.Provider value={{ BASE_URL }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeState;
