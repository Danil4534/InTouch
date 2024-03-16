import React from "react";
import style from "./profile-style.module.scss";
import ProfileIcon from "./../../assets/svg/Profile.png";
import PencilIcon from "./../../assets/svg/Pencil.svg";
import FollowresIcon from "./../../assets/svg/Followers.svg";
import CoursesIcon from "./../../assets/svg/Courses.svg";
import TasksIcon from "./../../assets/svg/Tasks1.svg";
import useStore from "../../store/useStore";
function Profile() {
  const { activeCourses } = useStore();
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
              <p>Username</p>
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
                    <p>{activeCoursesItem.percent}% </p>
                    <div className={style.course}>
                      <p>
                        {activeCoursesItem.name.length > 16
                          ? activeCoursesItem.name.slice(0, 16) + "..."
                          : activeCoursesItem.name}
                      </p>
                      <div className={style.ActiveStatus}>
                        <div className={style.circle}></div>
                        <p>{activeCoursesItem.status}</p>
                      </div>
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
