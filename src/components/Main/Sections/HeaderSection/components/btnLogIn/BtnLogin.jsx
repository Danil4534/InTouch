import React from "react";
import style from "./btnLogin-style.module.scss";
import { Link } from "react-router-dom";
import useStore from "../../../../../../store/useStore";
const BtnLogin = () => {
  const { authModalState, setAuthModalActive } = useStore();
  return (
    <div>
      <button className={style.btn} onClick={() => setAuthModalActive()}>
        Login
      </button>
    </div>
  );
};

export default BtnLogin;
