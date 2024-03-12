import React, { useEffect, useState } from "react";
import style from "./scrollUp.module.scss";
import ArrowIcon from "../../assets/svg/Up.svg";
import { positions } from "@mui/system";

function ScrollUp() {
  const [activeScrollBtn, setActiveScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      position >= 300 ? setActiveScrollBtn(true) : setActiveScrollBtn(false);
      //   if (position >= 300) {
      //     console.log(position + "Test2");
      //     setActiveScrollBtn(true);
      //   } else if (position <= 100) {
      //     setActiveScrollBtn(false);
      //     console.log(position + "Test3");
      //   }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {activeScrollBtn ? (
        <div className={style.btnScroll}>
          <button onClick={() => scrollToTop()}>
            <img src={ArrowIcon} alt="" />
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ScrollUp;
