import React from "react";
import style from "./subtitle-style.module.scss";
import { useTranslation } from "react-i18next";
function Subtitle() {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <ul className={style.ul}>
        <li>{t("header.YaroslavPopov")}</li>
        <li>{t("header.AlinaKhudolii")} </li>
        <li>{t("header.AndreyEvseev")}</li>
        <li>{t("header.DanilTsapok")}</li>
      </ul>
    </div>
  );
}

export default Subtitle;
