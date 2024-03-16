import React, { useEffect } from "react";
import style from "./settings.module.scss";
import useStore from "../../../store/useStore";
import CloseIcon from "../../../assets/svg/Close.svg";
import Logo from "../../Main/Sections/HeaderSection/components/logo/Logo";
import SwitchDarkMode from "../../SwitchDarkMode/switchDarkMode";
function Settings() {
  const { settingsModalState, setSettingsModalDisActive } = useStore();
  console.log(settingsModalState);

  useEffect(() => {
    if (settingsModalState) {
      document.getElementsByTagName("body")[0].classList.add("modal-open");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    }
  }, [settingsModalState]);
  return (
    <div
      className={
        settingsModalState
          ? `${style.settingModal} ${style.active}`
          : `${style.settingModal}`
      }
    >
      <div className={style.blurBackground}></div>
      <div className={style.settingsLogo}>
        <Logo />
      </div>
      <div
        className={
          settingsModalState
            ? `${style.settingModalBody} ${style.active}`
            : `${style.settingModalBody}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.btnClose}>
          <img
            onClick={() => setSettingsModalDisActive()}
            src={CloseIcon}
            alt=""
          />
        </div>
        <div className={style.settingsTitle}>
          <h1>Settings</h1>
        </div>
        <div className={style.changeDarkMode}>
          <p>Change Theme</p>
          <div>
            <SwitchDarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
