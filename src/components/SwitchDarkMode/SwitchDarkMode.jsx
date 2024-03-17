import React, { useEffect } from "react";
import style from "./switchDarkMode.module.scss";
import useStore from "../../store/useStore";

function SwitchDarkMode() {
  const { isChecked, switchCheck } = useStore();
  // console.log(isChecked);
  //DarkMode start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    isChecked ? setLightMode() : setDarkMode();
  }, [isChecked]);

  const setDarkMode = () => {
    // switchCheck();
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    // switchCheck();
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  // const selectedTheme = localStorage.getItem("selectedTheme");
  // selectedTheme === "dark" ? setDarkMode() : setLightMode();

  const toggleTheme = (e) => {
    switchCheck();
  };
  //DarkMode  end ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <div>
      <div
        className={
          isChecked
            ? `${style.switch} `
            : `${style.switch} ${style.switchActive} `
        }
        onClick={() => document.querySelector("#checker").click()}
      >
        <div className={style.handle}></div>
      </div>
      <input
        checked={isChecked}
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
