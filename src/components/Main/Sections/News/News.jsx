import React from "react";
import style from "./news-style.module.scss";
function News() {
  const arrayNews = [
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
    "Something new...",
  ];
  return (
    <div className={style.main}>
      <div className={style.body}>
        <h1>News</h1>
        <div className={style.bodyLine}></div>
        <div className={style.bodyContent}>
          {arrayNews.map((item, index) => (
            <div className={style.new} key={index}>
              <div className={style.newsBody}>
                <div className={style.newBodyLine}></div>
                <div className={style.newContentText}>
                  <p>{item}</p>
                </div>
              </div>
              <div className={style.newsDate}>11.02.2024</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
