import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./auth-style.module.scss";
import Title from "../../Main/Sections/HeaderSection/components/Title/Title";
import Logo from "../../Main/Sections/HeaderSection/components/logo/Logo";
import GoogleIcon from "../../../assets/svg/googleIcon.svg";
import LockIcon from "../../../assets/svg/LockIcon.svg";
import EmailIcon from "../../../assets/svg/emailIcon.svg";
import * as Yup from "yup";
import useStore from "../../../store/useStore";

import { useFormik } from "formik";
function AuthModal() {
  const { authModalState, setAuthModalDisActive } = useStore();

  useEffect(() => {
    if (authModalState) {
      document.getElementsByTagName("body")[0].classList.add("modal-open");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    }
  }, [authModalState]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Input email"),
      password: Yup.string().required("Input password"),
    }),
    onSubmit: async (values) => {
      try {
        console.log(values.email, values.password);
      } catch (e) {}
    },
  });

  return (
    <div
      className={
        authModalState
          ? `${style.authModal} ${style.active}`
          : `${style.authModal}`
      }
      onClick={() => setAuthModalDisActive()}
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
        <form
          className={style.formBody}
          method="post"
          onSubmit={formik.handleSubmit}
        >
          <div className={style.formTitle}>
            <h1>Login</h1>
          </div>
          <div className={style.formInfoBlock}>
            <div className={style.emailSection}>
              <img src={EmailIcon} alt="" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p
                  style={{
                    color: "red",
                    fontSize: 14,
                    position: "relative",
                  }}
                >
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className={style.passwordSection}>
              <img src={LockIcon} alt="" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            <div className={style.formBtn}>
              <button type="Submit">Log in</button>
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
