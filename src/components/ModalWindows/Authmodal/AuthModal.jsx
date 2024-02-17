import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./auth-style.module.scss";
import Title from "../../Main/Sections/HeaderSection/components/Title/Title";
import Logo from "../../Main/Sections/HeaderSection/components/logo/Logo";
import GoogleIcon from "../../../assets/svg/googleIcon.svg";
import LockIcon from "../../../assets/svg/LockIcon.svg";
import EmailIcon from "../../../assets/svg/emailIcon.svg";
function AuthModal({ authModalActive, setAuthModalActive }) {
  useEffect(() => {
    if (authModalActive) {
      document.getElementsByTagName("body")[0].classList.add("modal-open");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    }
  }, [authModalActive]);
  return (
    <div
      className={
        authModalActive
          ? `${style.authModal} ${style.active}`
          : `${style.authModal}`
      }
      onClick={() => setAuthModalActive(false)}
    >
      <div className={style.blurBackground}></div>
      <div className={style.loginLogo}>
        <Logo />
      </div>
      <div
        className={
          authModalActive
            ? `${style.authModalBody} ${style.active}`
            : `${style.authModalBody}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <form className={style.formBody}>
          <div className={style.formTitle}>
            <h1>Login</h1>
          </div>
          <div className={style.formInfoBlock}>
            <div className={style.emailSection}>
              <img src={EmailIcon} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className={style.passwordSection}>
              <img src={LockIcon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
            <div className={style.formBtn}>
              <button>Log in</button>
            </div>
            <div className={style.formOR}>
              <hr />
              <p>Or</p>
              <hr />
            </div>
            <div className={style.googleBtn}>
              <button>
                <img src={GoogleIcon} alt="" />
                Continue with Google
              </button>
              <p>
                Don`t have an account?<span> Register</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
