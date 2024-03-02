import React, { useEffect } from "react";
import style from "./auth-style.module.scss";
import Logo from "../../Main/Sections/HeaderSection/components/logo/Logo";
import useStore from "../../../store/useStore";
import CloseIcon from "./../../../assets/svg/Close.svg";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
function AuthModal() {
  const { authModalState, setAuthModalDisActive, setSwapLoginRegister } =
    useStore();
  useEffect(() => {
    if (authModalState) {
      document.getElementsByTagName("body")[0].classList.add("modal-open");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    }
  }, [authModalState]);
  return (
    <div
      className={
        authModalState
          ? `${style.authModal} ${style.active}`
          : `${style.authModal}`
      }
    >
      <div className={style.blurBackground}></div>
      <div className={style.loginLogo}>
        <Logo />
      </div>
      <div
        className={
          authModalState
            ? `${style.authModalBody} ${style.active}`
            : `${style.authModalBody}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.btnClose}>
          <img onClick={() => setAuthModalDisActive()} src={CloseIcon} alt="" />
        </div>
        <LoginForm />
        <RegistrationForm />
      </div>
    </div>
  );
}

export default AuthModal;
