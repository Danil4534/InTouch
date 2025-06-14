import React from "react";
import Title from "./components/Title/Title";
import Logo from "./components/logo/Logo";
import Circles from "./components/circles/Circles";
import Subtitle from "./components/Subtitle/Subtitle";
import BtnLogin from "./components/btnLogIn/BtnLogin";
import style from "./headerSection-style.module.scss";
import useUsers from "../../../../store/useStore";
const HeaderSection = () => {
  return (
    <div>
      <div className={style.header}>
        <div>
          <Title />
          <Logo />
          <BtnLogin />
          <Subtitle />
        </div>
        <Circles />
      </div>
    </div>
  );
};

export default HeaderSection;
