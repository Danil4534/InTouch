import React, { useState } from "react";
import Header from "../Header/Header";
import HeaderSection from "./Sections/HeaderSection/HeaderSection";
import style from "./main-style.module.scss";
import AboutUs from "./Sections/AboutUS/AboutUs";
import ColorPalette from "./Sections/ColorPalette/ColorPalette";
import News from "./Sections/News/News";
// import BackCircle from "./Sections/HeaderSection/components/circles/BackCircle";
import TechnologyStackSection from "./Sections/TechnologyStackSection/TechnologyStackSection";
import Footer from "../Footer/Footer";
import RoadMapSection from "./Sections/RoadMapSection/RoadMapSection";

import AuthModal from "../ModalWindows/Authmodal/AuthModal";

function Main() {
  return (
    <div className={style.main}>
      <HeaderSection />
      <TechnologyStackSection />
      <RoadMapSection />
      <div className={style.mainAboutUsColorPalette}>
        <AboutUs />
        <ColorPalette />
      </div>

      <News />
      <div className={style.mainBackgound}></div>
      <Footer />
      <AuthModal />
    </div>
  );
}

export default Main;
