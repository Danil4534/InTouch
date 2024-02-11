import React, { useEffect, useRef } from "react";
import style from "./roadMapSection-style.module.scss";
import Idea from "./../../../../assets/svg/Idea.svg";
import Classroom from "./../../../../assets/svg/Classroom.svg";
import Management from "../../../../assets/svg/Management.svg";
import GoogleCalendar from "../../../../assets/svg/Google Calendar.svg";
import Tasks from "../../../../assets/svg/Tasks.svg";
import Chats from "../../../../assets/svg/Chat.svg";
import Line from "../../../../assets/svg/Vector 1.svg";
function RoadMapSection() {
  return (
    <>
      <div className={style.main}>
        <div className={style.header}>
          <h1>Roadmap</h1>
        </div>
        <div className={style.body}>
          <div className={style.backgroundLine}>
            <img src={Line} alt="" />

            <div>
              <div className={`${style.circle} ${style.start}`}>
                <p>start</p>
              </div>
              <div className={`${style.item} ${style.itemIdea}`}>
                <div className={`${style.circle} ${style.itemBackground}`}>
                  <img src={Idea} alt="" />
                </div>
                <p>Idea</p>
              </div>

              <div className={`${style.item} ${style.itemClassroom}`}>
                <div className={`${style.circle} ${style.itemBackground}`}>
                  <img src={Classroom} alt="" />
                </div>
                <p>course</p>
              </div>

              <div className={`${style.item} ${style.itemCourse}`}>
                <div className={`${style.circle} ${style.itemBackground}`}>
                  <img src={Tasks} alt="" />
                </div>
                <p>tasks</p>
              </div>

              <div className={`${style.item} ${style.itemMembers}`}>
                <div className={`${style.circle} ${style.itemBackground}`}>
                  <img src={Management} alt="" />
                </div>
                <p>members</p>
              </div>
              <div className={`${style.item} ${style.itemChats}`}>
                <div className={`${style.circle} ${style.itemBackground}`}>
                  <img src={Chats} alt="" />
                </div>
                <p>chat</p>
              </div>
              <div className={`${style.item} ${style.itemCalendar}`}>
                <div className={`${style.circle} ${style.itemBackground}`}>
                  <img src={GoogleCalendar} alt="" />
                </div>
                <p>calendar</p>
              </div>

              <div className={`${style.circle} ${style.finish}`}>
                <p>Finish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadMapSection;
