import React, { useEffect, useState } from "react";
import style from "./header-style.module.scss";
import LogoYoda from "../../assets/svg/Baby Yoda.svg";
import ProfileIcon from "../../assets/svg/Profile.svg";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SwitchDarkMode from "../SwitchDarkMode/switchDarkMode";
import axios from "axios";
import useStore from "../../store/useStore";

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { setActiveBtnLogin, currentUser, setCurrentUser } = useStore();
  const [username, setUsername] = useState("");
  const [btnLogoutActive, setbtnLogoutActive] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = getUserIdFromToken();
      if (userId) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/auth/me/`, {
            headers: {
              Authorization: `Bearer ${getCookie("accessToken")}`,
            },
          });

          setCurrentUser(response.data);
          setbtnLogoutActive(true);
          setActiveBtnLogin();
        } catch (e) {
          console.error(e);
        }
      }
    };
    fetchUserDetails();
  }, []);

  const logoutUser = async () => {
    document.cookie =
      "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.replace("/");
  };
  const getUserIdFromToken = () => {
    const token = getCookie("accessToken");
    console.log(token);
    if (token) {
      const decoded = jwtDecode(token);
      return decoded.user_id;
    }
  };
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  //Header Date Time start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => (prevTime = new Date()));
    }, 1000);
    return () => clearInterval(intervalId);

    // const timerID = setInterval(() => tick(), 1000);
    // return function cleanup() {
    //   clearInterval(timerID);
    // };
  }, []);
  function tick() {
    setCurrentTime(new Date());
  }
  const day = currentTime.getDate();
  const dayOfWeek = currentTime.getDay();
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
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const formatedDate = `${day} ${months[month]} ${year} ${
    dayOfWeek === 0 ? week[6] : week[dayOfWeek - 1]
  }`;
  //Header Date Time End ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <>
      <header className={style.header}>
        <div className={style.headerLeftSide}>
          <div className={style.logo}>
            <Link to="/" className={style.logoLink}>
              <img src={LogoYoda} alt="" />
              <h1>nTouch</h1>
            </Link>
          </div>
        </div>
        <div className={style.headerRightSide}>
          <p>{formatedDate}</p>
          <div className={style.profileLang}>
            <p>EN</p>
          </div>
          <SwitchDarkMode />

          <div className={style.profile}>
            {currentUser ? (
              <div className={style.profileItem}>
                <Link to="/profile">
                  <div className={style.profileIcon}>
                    <img src={ProfileIcon} alt="" />
                  </div>
                </Link>
                <div className={style.profileNickname}>
                  <p>Hi! {currentUser.username || "Guest"}</p>
                </div>
              </div>
            ) : (
              <></>
            )}

            <p>{time}</p>
            <div>
              {btnLogoutActive ? (
                <button className={style.btn} onClick={() => logoutUser()}>
                  Logout
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
