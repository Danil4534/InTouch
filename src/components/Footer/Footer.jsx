import React from "react";
import FooterBack from "../../assets/svg/FooterBack.svg";
import YodaIcon from "../../assets/svg/Baby Yoda.svg";
import style from "./footer-style.module.scss";
import MacbookFooter from "../../assets/svg/MacBook Pro 16 Footer.svg";
import DanilPhoto from "../../assets/img/DanilPhoto.svg";
import YarikPhoto from "../../assets/img/YarikPhoto.svg";
import AlinaPhoto from "../../assets/img/AlinaPhoto.svg";
import AndreyPhoto from "../../assets/img/AndreyPhoto.svg";
import telegram from "../../assets/svg/Telegram.svg";
import GitHub from "../../assets/svg/GitHub.svg";
import Mail from "../../assets/svg/Gmail Logo.svg";
function Footer() {
  return (
    <footer>
      <div className={style.Logo}>
        <img src={YodaIcon} alt="" />
        <h1>nTouch</h1>
      </div>
      <div className={style.footerBackground}>
        <img src={MacbookFooter} alt="" />
      </div>
      <div className={style.footerTextContentWrapper}>
        <div className={style.footerTextContent}>
          <div className={style.Logo}>
            <img src={YodaIcon} alt="" />
            <h1>nTouch</h1>
          </div>
          <div className={style.footerInfoProgramer}>
            <div className={style.footerFio}>
              <img src={YarikPhoto} alt="" />
              <p>Yaroslav Popov</p>
            </div>
            <div className={style.socialLinks}>
              <div className={style.item}>
                <img src={Mail} alt="" />
              </div>
              <div className={style.item}>
                <a href="https://github.com/Yarik22">
                  <img src={GitHub} alt="" />
                </a>
              </div>
              <div className={style.item}>
                <a href="https://t.me/Clemsonn">
                  <img src={telegram} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className={style.footerInfoProgramer}>
            <div className={style.footerFio}>
              <img src={AlinaPhoto} alt="" />
              <p>Alina Khudolii</p>
            </div>
            <div className={style.socialLinks}>
              <div className={style.item}>
                <img src={Mail} alt="" />
              </div>
              <div className={style.item}>
                <a href="https://github.com/NEGAvv">
                  <img src={GitHub} alt="" />
                </a>
              </div>
              <div className={style.item}>
                <a href="https://t.me/NEGAv1">
                  <img src={telegram} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className={style.footerInfoProgramer}>
            <div className={style.footerFio}>
              <img src={AndreyPhoto} alt="" />
              <p>Andrey Evseev</p>
            </div>
            <div className={style.socialLinks}>
              <div className={style.item}>
                <img src={Mail} alt="" />
              </div>
              <div className={style.item}>
                <a href="https://github.com/stalker9855">
                  <img src={GitHub} alt="" />
                </a>
              </div>
              <div className={style.item}>
                <a href="https://t.me/SmilingKnight_1">
                  <img src={telegram} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className={style.footerInfoProgramer}>
            <div className={style.footerFio}>
              <img src={DanilPhoto} alt="" />
              <p>Danil Tsapok</p>
            </div>
            <div className={style.socialLinks}>
              <div className={style.item}>
                <a href="">
                  <img src={Mail} alt="" />
                </a>
              </div>
              <div className={style.item}>
                <a href="https://github.com/DanilTsapok">
                  <img src={GitHub} alt="" />
                </a>
              </div>
              <div className={style.item}>
                <a href="https://t.me/Dan122342">
                  <img src={telegram} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
