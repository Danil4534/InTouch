import React from "react";
import style from "./navbar-style.module.scss";
import { Link } from "react-router-dom";
import HomeIcon from "../../../../assets/svg/Home Page.svg";
import CalendarIcon from "../../../../assets/svg/Google Calendar.svg";
import GroupIcon from "../../../../assets/svg/People Skin Type 7.svg";
import MeetingIcon from "../../../../assets/svg/Headset.svg";
import MessageIcon from "../../../../assets/svg/Letter.svg";
import SettingsIcon from "../../../../assets/svg/Settings.svg";
import useStore from "../../../../store/useStore";
function Navbar() {
  const { setSettingsModalActive } = useStore();
  return (
    <>
      <div className={style.navbarWrapper}>
        <div className={style.navbarBody}>
          <div className={style.navbarBtns}>
            <Link to="/">
              <button>
                <img src={HomeIcon} alt="" />
              </button>
            </Link>
            <Link to="/calendar">
              <button>
                <img src={CalendarIcon} alt="" />
              </button>
            </Link>
            <Link to="/courses">
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
              <button onClick={() => setSettingsModalActive()}>
                <img src={SettingsIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
