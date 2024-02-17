import React from "react";
import style from "./btnLogin-style.module.scss";
import { Link } from "react-router-dom";
const BtnLogin = ({ setAuthModalActive }) => {
  return (
    <div>
      <button className={style.btn} onClick={() => setAuthModalActive(true)}>
        Login
      </button>
    </div>
  );
};

export default BtnLogin;
