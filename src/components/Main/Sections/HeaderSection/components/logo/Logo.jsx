import React from "react";
import YodaIcon from "../../../../../../assets/svg/Baby Yoda.svg";
import style from "./logo-style.module.scss";
function Logo() {
  return (
    <>
      <div className={style.logo}>
        <img src={YodaIcon} alt="" />
        <h1>nTouch</h1>
      </div>
    </>
  );
}

export default Logo;
