import React, { useEffect, useState } from "react";
import style from "./header-style.module.scss";
import LogoYoda from "../../assets/svg/Baby Yoda.svg";
import ProfileIcon from "../../assets/svg/Profile.svg";
import SunIcon from "../../assets/icons/Sun.svg";
import useStore from "../../store/useStore";

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date());
  }

  const day = currentTime.getDate();
  const month = currentTime.getMonth();
  const year = currentTime.getFullYear();
  const time = currentTime.toLocaleTimeString();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formatedDate = `${day} ${months[month]} ${year}`;

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
          <p>{formatedDate}</p>
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
            <p>{time}</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
