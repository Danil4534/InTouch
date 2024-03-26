import React from "react";
import style from "./aboutUs-style.module.scss";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className={style.main}>
        <div className={style.body}>
          <h1>{t("aboutUs.title")}</h1>
          <div className={style.bodyLine}></div>
          <div className={style.bodyContent}>
            <ul>
              <li>{t("aboutUs.FirstParagraph")}</li>
              <li>{t("aboutUs.SecondParagraph")}</li>
              <li>{t("aboutUs.ThirdParagraph")}</li>
              <li>{t("aboutUs.FourthParagraph")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
