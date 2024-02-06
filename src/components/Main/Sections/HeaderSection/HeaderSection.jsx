import React from "react";
import Title from "./components/Title/Title";
import Logo from "./components/logo/Logo";
import Circles from "./components/circles/Circles";
import Subtitle from "./components/Subtitle/Subtitle";

function HeaderSection() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Title />
          <Logo />
          <Subtitle />
        </div>
        <Circles />
      </div>
    </div>
  );
}

export default HeaderSection;
