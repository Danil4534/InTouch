import React from "react";
import style from "./aboutUs-style.module.scss";

function AboutUs() {
  return (
    <>
      <div className={style.main}>
        <div className={style.body}>
          <h1>About us</h1>
          <div className={style.bodyLine}></div>
          <div className={style.bodyContent}>
            <p>We are the best team in the world.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
