import React from "react";
import style from "./colorPalette-style.module.scss";
function ColorPalette() {
  return (
    <>
      <div className={style.main}>
        <div className={style.body}>
          <h1>Color palette</h1>
          <div className={style.bodyLine}></div>
          <div className={style.bodyColorPaletteCircles}>
            <div>
              <p>#48a651</p>
            </div>
            <div>
              <p>#57c58a</p>
            </div>
            <div>
              <p>#98c900</p>
            </div>
            <div>
              <p>#adf0b4</p>
            </div>
            <div>
              <p>#FFA500</p>
            </div>
            <div>
              <p>#FFA500</p>
            </div>
            <div>
              <p>#FFA500</p>
            </div>
            <div>
              <p>#FFA500</p>
            </div>
            <div>
              <p>#FFA500</p>
            </div>
            <div>
              <p>#808080</p>
            </div>
            <div>
              <p>#f5f5f5</p>
            </div>
            <div>
              <p>#FFFFFF</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorPalette;
