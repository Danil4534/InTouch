import React from "react";
import Header from "../Header/Header";
import HeaderSection from "./Sections/HeaderSection/HeaderSection";
import style from "./main-style.module.scss";
import AboutUs from "./Sections/AboutUS/AboutUs";
import ColorPalette from "./Sections/ColorPalette/ColorPalette";
import News from "./Sections/News/News";
import BackCircle from "./Sections/HeaderSection/components/circles/BackCircle";
import TechnologyStackSection from "./Sections/TechnologyStackSection/TechnologyStackSection";
function Main() {
  return (
    <div className={style.main}>
      <HeaderSection />
      <TechnologyStackSection />
      <div className={style.mainAboutUsColorPalette}>
        <AboutUs />
        <ColorPalette />
      </div>
      <News />
      <div className={style.mainBackgound}>
        <BackCircle />
      </div>
    </div>
  );
}

export default Main;
