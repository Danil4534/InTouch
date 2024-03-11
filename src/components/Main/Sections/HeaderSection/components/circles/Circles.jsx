import React from "react";
import style from "./circles-style.module.scss";
import ImgMacBook from "../../../../../../assets/img/Macbook Pro 17.png";

import AlinaPhoto from "../../../../../../assets/img/AlinaPhoto.svg";
import YarikPhoto from "../../../../../../assets/img/YarikPhoto.svg";
import AndreyPhoto from "../../../../../../assets/img/AndreyPhoto.svg";
import DanilPhoto from "../../../../../../assets/img/DanilPhoto.svg";
function Circles() {
  return (
    <>
      <div className={style.circles}>
        <div className={style.FirstCircle}>
          <div className={style.SecondCircle}>
            <div className={style.ThirdCircle} />
          </div>
          <div className={style.circlesYaroslav}>
            <img src={YarikPhoto} alt="" />
            <p>Scrum-Master</p>
          </div>
          <div className={style.circlesAlina}>
            <img src={AlinaPhoto} alt="" />
            <p>Tester</p>
          </div>
          <div className={style.circlesAndrey}>
            <img src={AndreyPhoto} alt="" />
            <p>Back-end</p>
          </div>
          <div className={style.circlesDanil}>
            <img src={DanilPhoto} alt="" />
            <p>Front-end</p>
          </div>
        </div>

        <img src={ImgMacBook} alt="" />
      </div>
    </>
  );
}

export default Circles;
