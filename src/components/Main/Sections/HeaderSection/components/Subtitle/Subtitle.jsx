import React from "react";
import style from "./subtitle-style.module.scss";
function Subtitle() {
  return (
    <div>
      <ul className={style.ul}>
        <li>Popov Yaroslav</li>
        <li>Khudolii Alina</li>
        <li>Evseev Andrey</li>
        <li>Tsapok Danil</li>
      </ul>
    </div>
  );
}

export default Subtitle;
