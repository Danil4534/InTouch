import React, { useEffect, useRef, useState } from "react";
import style from "./roadMapSection-style.module.scss";
import Idea from "./../../../../assets/svg/Idea.svg";
import Classroom from "./../../../../assets/svg/Classroom.svg";
import Management from "../../../../assets/svg/Management.svg";
import GoogleCalendar from "../../../../assets/svg/Google Calendar2.svg";
import Tasks from "../../../../assets/svg/Tasks.svg";
import Chats from "../../../../assets/svg/Chat.svg";

function RoadMapSection() {
  const [isAnimated, setIsAnimated] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position >= 370) {
      setIsAnimated(true);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className={style.main}>
        <div className={style.header}>
          <h1>Roadmap</h1>
        </div>
        <div className={style.body}>
          <div className={style.backgroundLine}>
            <div className={`${style.circle} ${style.start}`}>
              <p>start</p>
            </div>
            <div
              className={
                isAnimated
                  ? `${style.item} ${style.itemIdea} ${style.itemIdeaActive}`
                  : `${style.item} ${style.itemIdea}`
              }
            >
              <div className={`${style.circle} ${style.itemBackground}`}>
                <img src={Idea} alt="" />
              </div>
              <p>Idea</p>
            </div>

            <div
              className={
                isAnimated
                  ? `${style.item} ${style.itemClassroom} ${style.itemClassroomActive}`
                  : `${style.item} ${style.itemClassroom}`
              }
            >
              <div className={`${style.circle} ${style.itemBackground}`}>
                <img src={Classroom} alt="" />
              </div>
              <p>course</p>
            </div>

            <div
              className={
                isAnimated
                  ? `${style.item} ${style.itemCourse} ${style.itemCourseActive}`
                  : `${style.item} ${style.itemCourse}`
              }
            >
              <div className={`${style.circle} ${style.itemBackground}`}>
                <img src={Tasks} alt="" />
              </div>
              <p>tasks</p>
            </div>

            <div
              className={
                isAnimated
                  ? `${style.item} ${style.itemMembers} ${style.itemMembersActive}`
                  : `${style.item} ${style.itemMembers}`
              }
            >
              <div className={`${style.circle} ${style.itemBackground}`}>
                <img src={Management} alt="" />
              </div>
              <p>members</p>
            </div>
            <div
              className={
                isAnimated
                  ? `${style.item} ${style.itemChats} ${style.itemChatsActive}`
                  : `${style.item} ${style.itemChats}`
              }
            >
              <div className={`${style.circle} ${style.itemBackground}`}>
                <img src={Chats} alt="" />
              </div>
              <p>chat</p>
            </div>
            <div
              className={
                isAnimated
                  ? `${style.item} ${style.itemCalendar} ${style.itemCalendarActive}`
                  : `${style.item} ${style.itemCalendar}`
              }
            >
              <div className={`${style.circle} ${style.itemBackground}`}>
                <img src={GoogleCalendar} alt="" />
              </div>
              <p>calendar</p>
            </div>

            <div
              className={
                isAnimated
                  ? `${style.circle} ${style.finish} ${style.finishActive}`
                  : `${style.circle} ${style.finish}`
              }
            >
              <p>Finish</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadMapSection;
