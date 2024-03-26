import React from "react";
import style from "../auth-style.module.scss";

import GoogleIcon from "../../../../assets/svg/googleIcon.svg";
import LockIcon from "../../../../assets/svg/LockIcon.svg";
import EmailIcon from "../../../../assets/svg/emailIcon.svg";
import useStore from "../../../../store/useStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Notification from "../../Notification/Notification";
function LoginForm() {
  const { loginFormActive, setSwapLoginRegister } = useStore();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Input username"),
      password: Yup.string().required("Input password"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/auth/login/", {
          username: values.username,
          password: values.password,
        });
        console.log(response);
        const { access, refresh } = response.data;
        document.cookie = `accessToken=${access}; path=/`;
        axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;

        console.log("success");
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
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
              type="text"
              name="username"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            <label
              className={
                (formik.touched.username && formik.errors.username) ||
                formik.values.username != ""
                  ? `${style.inputerrorlabel}`
                  : null
              }
              htmlFor="username"
            >
              Username
            </label>
            {formik.touched.username && formik.errors.username ? (
              <p
                style={{
                  color: "red",
                  fontSize: 14,
                  position: "relative",
                }}
              >
                {formik.errors.username}
              </p>
            ) : null}
          </div>
          <div className={style.passwordSection}>
            <img src={LockIcon} alt="" />
            <input
              type="password"
              name="password"
              id="password"
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
              htmlFor="password"
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
            <Notification />
            <button type="Submit" id="btnAuth" style={{ visibility: "hidden" }}>
              Log in
            </button>
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
