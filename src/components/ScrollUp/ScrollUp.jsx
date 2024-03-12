import React, { useEffect, useState } from "react";
import style from "./scrollUp.module.scss";
import ArrowIcon from "../../assets/svg/Up.svg";
function ScrollUp() {
  const [activeScrollBtn, setActiveScrollBtn] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    if (position >= 300) {
      setActiveScrollBtn(true);
    } else if (position <= 100) {
      setActiveScrollBtn(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {activeScrollBtn ? (
        <div className={style.btnScroll}>
          <a href="#">
            <img src={ArrowIcon} alt="" />
          </a>
        </div>
      ) : null}
    </>
  );
}

export default ScrollUp;
