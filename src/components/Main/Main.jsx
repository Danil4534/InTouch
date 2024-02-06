import React from "react";
import Header from "../Header/Header";
import HeaderSection from "./Sections/HeaderSection/HeaderSection";
import style from "./main-style.module.scss";
function Main() {
  return (
    <div className={style.main}>
      <HeaderSection />
    </div>
  );
}

export default Main;
