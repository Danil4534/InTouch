import React from "react";
import style from "./profile-style.module.scss";
import ProfileIcon from "./../../assets/svg/Profile.png";
import PencilIcon from "./../../assets/svg/Pencil.svg";
import FollowresIcon from "./../../assets/svg/Followers.svg";
import CoursesIcon from "./../../assets/svg/Courses.svg";
import TasksIcon from "./../../assets/svg/Tasks1.svg";
function Profile() {
  const activeCourses = [
    {
      id: 1,
      persent: 67,
      name: "Брендинг та PR",
      status: "Active",
    },
    {
      id: 2,
      persent: 30,
      name: "Database development та трьохланкові...",
      status: "Active",
    },
    {
      id: 3,
      persent: 45,
      name: "Комп’ютерні мережі",
      status: "Active",
    },
    {
      id: 4,
      persent: 67,
      name: "Професіна практика програмної інжене... ",
      status: "Active",
    },
    {
      id: 5,
      persent: 100,
      name: "Розробка адаптивних web-інтерфейсів...",
      status: "Active",
    },
    {
      id: 6,
      persent: 63,
      name: "Якість програмного забезпечення т...",
      status: "Active",
    },
    {
      id: 7,
      persent: 23,
      name: "Іноземна мова",
      status: "Active",
    },
    {
      id: 8,
      persent: 65,
      name: "Брендинг та PR",
      status: "Active",
    },
    {
      id: 9,
      persent: 23,
      name: "Брендинг та PR",
      status: "Active",
    },
    {
      id: 10,
      persent: 76,
      name: "Брендинг та PR",
      status: "Active",
    },
  ];

  return (
    <>
      <div className={style.profileMain}>
        <div className={style.profileTitle}>
          <h1>Hello user</h1>
          <h1>Profile</h1>
        </div>
        <div className={style.profileLine}></div>
        <div className={style.profileContent}>
          <div className={style.profileUserCard}>
            <div className={style.profileUserImg}>
              <div className={style.profileEditImg}>
                <img src={PencilIcon} alt="" />
              </div>
              <img className={style.profileIcon} src={ProfileIcon} alt="" />
            </div>
            <div className={style.profileNick}>
              <h1>User</h1>
              <p>Nickname</p>
            </div>
            <div className={style.profileStatus}>
              <div className={style.circle}></div>
              <p>online</p>
            </div>
            <div className={style.profileInfo}>
              <div>
                <h4>Personal Id</h4>
                <p>@test</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>test@gmail.com</p>
              </div>
              <div>
                <h4>Number</h4>
                <p>+380***********</p>
              </div>
            </div>
            <div className={style.BtnFollow}>
              <button>Follow</button>
            </div>
          </div>
          <div className={style.profileRigthSide}>
            <div className={style.profileRigthSideStatistics}>
              <div className={style.statisticsItem}>
                <div className={style.itemHelp}>
                  <span>?</span>
                </div>
                <p>125</p>
                <h3>All followers</h3>
                <img src={FollowresIcon} alt="" />
              </div>
              <div className={style.statisticsItem}>
                <div className={style.itemHelp}>
                  <span>?</span>
                </div>
                <p>25</p>
                <h3>All courses</h3>
                <img src={CoursesIcon} alt="" />
              </div>
              <div className={style.statisticsItem}>
                <div className={style.itemHelp}>
                  <span>?</span>
                </div>
                <p>5</p>
                <h3>My tasks</h3>
                <img src={TasksIcon} alt="" />
              </div>
            </div>
            <div className={style.profileRigthSideActiveCourse}>
              <h2>Active courses</h2>
              <div className={style.activeCourseLine}></div>
              <div className={style.activeCourseContent}>
                {activeCourses.map((activeCoursesItem, index) => (
                  <div className={style.activeItem} key={index}>
                    <p>{activeCoursesItem.persent}% </p>
                    <div className={style.course}>
                      <p>{activeCoursesItem.name}</p>

                      <p className={style.ActiveStatus}>
                        <p className={style.circle}></p>
                        <p>{activeCoursesItem.status}</p>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
