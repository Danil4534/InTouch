import React from "react";
import style from "./technologyStackSection-style.module.scss";
import Django from "../../../../assets/svg/DjangoLogo.svg";
import ReactLogo from "../../../../assets/svg/ReactLogo.svg";
import Vite from "../../../../assets/svg/ViteLogo.svg";
import PostgreSQL from "../../../../assets/svg/PostgreSQLLogo.svg";
import Docker from "../../../../assets/svg/DockerLogo.svg";
function TechnologyStackSection() {
  return (
    <>
      <div className={style.header}>
        <h1>TECHNOLOGY STACK</h1>
      </div>
      <div className={style.main}>
        <div className={style.infinitySlider}>
          <div className={style.slide}>
            <div className={style.slider}>
              <p>
                <img src={ReactLogo} alt="" />
                <span>ReactJS</span>
              </p>
              <p>
                <img src={Vite} alt="" />
                <span>Vite</span>
              </p>
              <p>
                <img src={PostgreSQL} alt="" />
                <span>PostgreSQL</span>
              </p>

              <p>
                <img src={Django} alt="" />
                <span>Django</span>
              </p>
              <p>
                <img src={Docker} alt="" />
                <span>Docker</span>
              </p>
            </div>
          </div>
          <div className={style.slide}>
            <div className={style.slider}>
              <p>
                <img src={ReactLogo} alt="" />
                <span>ReactJS</span>
              </p>
              <p>
                <img src={Vite} alt="" />
                <span>Vite</span>
              </p>
              <p>
                <img src={PostgreSQL} alt="" />
                <span>PostgreSQL</span>
              </p>

              <p>
                <img src={Django} alt="" />
                <span>Django</span>
              </p>
              <p>
                <img src={Docker} alt="" />
                <span>Docker</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologyStackSection;
