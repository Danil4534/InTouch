import React, { useEffect } from "react";
import style from "./settings.module.scss";
import useStore from "../../../store/useStore";
import CloseIcon from "../../../assets/svg/Close.svg";
import Logo from "../../Main/Sections/HeaderSection/components/logo/Logo";
import SwitchDarkMode from "../../SwitchDarkMode/switchDarkMode";
import { useTranslation } from "react-i18next";
function Settings() {
  const { settingsModalState, setSettingsModalDisActive } = useStore();
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
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
          <h1>{t("Settings.title")}</h1>
        </div>
        <div className={style.changeDarkMode}>
          <p>{t("Settings.ChangeDarkMode")}</p>
          <div>
            <SwitchDarkMode />
          </div>
        </div>
        <div className={style.changeLang}>
          <p>{t("Settings.ChangeLanguage")}</p>
          <div className={style.btnsChange}>
            <button
              className={style.btnsChangeItem}
              onClick={() => handleChangeLanguage("en")}
            >
              Eng
            </button>
            <button
              className={style.btnsChangeItem}
              onClick={() => handleChangeLanguage("ua")}
            >
              UA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
