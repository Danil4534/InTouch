import React, { useEffect } from "react";
import style from "./switchDarkMode.module.scss";

function SwitchDarkMode() {
  //DarkMode start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    selectedTheme === "dark" ? setDarkMode() : setLightMode();
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  selectedTheme === "dark" ? setDarkMode() : setLightMode();

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  //DarkMode  end ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <div>
      <div
        className={
          selectedTheme === "dark"
            ? `${style.switch} ${style.switchActive}`
            : `${style.switch} `
        }
        onClick={() => document.querySelector("#checker").click()}
      >
        <div className={style.handle}></div>
      </div>
      <input
        checked={localStorage.getItem("selectedTheme") === "dark"}
        type="checkbox"
        id="checker"
        onChange={toggleTheme}
        style={{
          visibility: "hidden",
          userSelect: "none",
          position: "absolute",
        }}
      />
    </div>
  );
}

export default SwitchDarkMode;
