import React from "react";
import style from "./subtitle-style.module.scss";
function Subtitle() {
  return (
    <div>
      <ul className={style.ul}>
        <li>Yaroslav Popov</li>
        <li>Alina Khudolii </li>
        <li>Andrey Evseev</li>
        <li>Danil Tsapok</li>
      </ul>
    </div>
  );
}

export default Subtitle;
