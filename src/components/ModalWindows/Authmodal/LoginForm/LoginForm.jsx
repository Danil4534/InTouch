import React from "react";
import style from "../auth-style.module.scss";

import GoogleIcon from "../../../../assets/svg/googleIcon.svg";
import LockIcon from "../../../../assets/svg/LockIcon.svg";
import EmailIcon from "../../../../assets/svg/emailIcon.svg";
import useStore from "../../../../store/useStore";
import { useFormik } from "formik";
import * as Yup from "yup";
function LoginForm() {
  const { loginFormActive, setSwapLoginRegister } = useStore();
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
      } catch (e) {}
    },
  });
  return (
    <div
      className={
        loginFormActive ? `${style.loginBox} ` : `${style.loginBoxActive}`
      }
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label
              className={
                (formik.touched.email && formik.errors.email) ||
                formik.values.email != ""
                  ? `${style.inputerrorlabel}`
                  : null
              }
            >
              Email
            </label>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <label
              className={
                (formik.touched.password && formik.errors.password) ||
                formik.values.password != ""
                  ? `${style.inputerrorlabel}`
                  : null
              }
            >
              Password
            </label>
            {formik.touched.password && formik.errors.password ? (
              <p
                style={{
                  color: "red",
                  fontSize: 14,
                  position: "relative",
                }}
              >
                {formik.errors.password}
              </p>
            ) : null}
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
              Don`t have an account?
              <span onClick={() => setSwapLoginRegister()}> Register</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
