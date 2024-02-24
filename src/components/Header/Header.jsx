import React from "react";
import style from "./header-style.module.scss";
import LogoYoda from "../../assets/svg/Baby Yoda.svg";
import ProfileIcon from "../../assets/svg/Profile.svg";
import SunIcon from "../../assets/icons/Sun.svg";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.headerLeftSide}>
          <div className={style.logo}>
            <img src={LogoYoda} alt="" />
            <h1>nTouch</h1>
          </div>
        </div>
        <div className={style.headerRightSide}>
          <div className={style.profileLang}>
            <p>EN</p>
          </div>
          <img src={SunIcon} alt="" />
          <div className={style.profile}>
            <div className={style.profileIcon}>
              <img src={ProfileIcon} alt="" />
            </div>

            <div className={style.profileNickname}>
              <p>Hi! user</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
