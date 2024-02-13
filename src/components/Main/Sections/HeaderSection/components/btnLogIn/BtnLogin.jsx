import React from "react";
import style from "./btnLogin-style.module.scss";
import { Link } from "react-router-dom";
function BtnLogin() {
  return (
    <div>
      <Link to="/login">
        <button className={style.btn}>Login</button>
      </Link>
    </div>
  );
}

export default BtnLogin;
