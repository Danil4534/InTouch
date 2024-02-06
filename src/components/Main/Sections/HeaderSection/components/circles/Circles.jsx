import React from "react";
import style from "./circles-style.module.scss";
import ImgMacBook from "../../../../../../assets/img/Macbook Pro 17.png";
function Circles() {
  return (
    <>
      <div className={style.circles}>
        <div className={style.FirstCircle}>
          <div className={style.SecondCircle}>
            <div className={style.ThirdCircle} />
          </div>
        </div>
        <img src={ImgMacBook} alt="" />
      </div>
    </>
  );
}

export default Circles;
