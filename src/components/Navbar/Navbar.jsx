import React from "react";
import style from "./navbar-style.module.scss";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/svg/Home Page.svg";
import CalendarIcon from "../../assets/svg/Google Calendar.svg";
import GroupIcon from "../../assets/svg/People Skin Type 7.svg";
import MeetingIcon from "../../assets/svg/Headset.svg";
import MessageIcon from "../../assets/svg/Letter.svg";
import SettingsIcon from "../../assets/svg/Settings.svg";
function Navbar() {
  return (
    <>
      <div className={style.navbarWrapper}>
        <div className={style.navbarBody}>
          <div className={style.navbarBtns}>
            <Link to="/test">
              <button>
                <img src={HomeIcon} alt="" />
              </button>
            </Link>
            <Link to="/test">
              <button>
                <img src={CalendarIcon} alt="" />
              </button>
            </Link>
            <Link to="/test">
              <button>
                <img src={GroupIcon} alt="" />
              </button>
            </Link>
            <Link to="/test">
              <button>
                <img src={MeetingIcon} alt="" />
              </button>
            </Link>
            <Link to="/test">
              <button>
                <img src={MessageIcon} alt="" />
              </button>
            </Link>
            <div className={style.navbarSettingsBtn}>
              <Link to="/test">
                <button>
                  <img src={SettingsIcon} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
