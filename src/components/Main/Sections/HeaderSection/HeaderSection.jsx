import React from "react";
import Title from "./components/Title/Title";
import Logo from "./components/logo/Logo";
import Circles from "./components/circles/Circles";
import Subtitle from "./components/Subtitle/Subtitle";
import BtnLogin from "./components/btnLogIn/BtnLogin";

function HeaderSection() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 117,
        }}
      >
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
}

export default HeaderSection;
