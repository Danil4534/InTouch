import React from "react";
import FooterBack from "../../assets/svg/FooterBack.svg";
import YodaIcon from "../../assets/svg/Baby Yoda.svg";
import style from "./footer-style.module.scss";
import MacbookFooter from "../../assets/svg/MacBook Pro 16 Footer.svg";
function Footer() {
  return (
    <>
      <div className={style.Logo}>
        <img src={YodaIcon} alt="" />
        <h1>nTouch</h1>
      </div>
      <div className={style.footerBackground}>
        <img src={FooterBack} alt="" />
        <div className={style.footerImg}>
          <img src={MacbookFooter} alt="" />
        </div>
        <div className={style.footerTextContent}>
          <p>Hello</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
