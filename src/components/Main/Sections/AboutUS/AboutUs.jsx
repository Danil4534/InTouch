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
            <ul>
              <li>
                Our team is made up of experienced professionals, each bringing
                unique skills and ideas to our work.
              </li>
              <li>
                We value diversity and encourage collaboration to provide our
                clients with the most innovative and effective solutions.
              </li>
              <li>
                We are proud of our accomplishments and are committed to
                continued development and growth.
              </li>
              <li>
                Our goal is to be the best at what we do and continue to make a
                positive contribution to society and technology.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
