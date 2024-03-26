import React from "react";
import useStore from "../../../../store/useStore";
import style from "../auth-style.module.scss";
import CloseIcon from "../../../../assets/svg/Close.svg";
import GoogleIcon from "../../../../assets/svg/googleIcon.svg";
import LockIcon from "../../../../assets/svg/LockIcon.svg";
import EmailIcon from "../../../../assets/svg/emailIcon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Notification from "../../Notification/Notification";
function RegistrationForm() {
  const {
    registerFormActive,
    setSwapRegisterLogin,
    setNotificationState,
    notificationState,
  } = useStore();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Input email"),
      password: Yup.string().required("Input password").min(4, "Min 4 symbols"),
      username: Yup.string().required("Input nickname"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/auth/register/",
          {
            username: values.username,
            email: values.email,
            password: values.password,
          }
        );
        console.log(response.status);
        if (response.status === 201) {
          setNotificationState({
            status: "success",
            message: "Success",
            description: "Check your email",
          });
        }
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } catch (e) {
        if (e.response.status === 400) {
          setNotificationState({
            status: "error",
            message: "Warning",
            description: "This email is exits",
          });
        } else {
          console.log(e);
        }
      }
    },
  });
  return (
    <div
      className={
        registerFormActive ? `${style.registBoxActive} ` : `${style.registBox}`
      }
    >
      <form
        className={style.formBody}
        method="post"
        onSubmit={formik.handleSubmit}
      >
        <div className={style.formTitle}>
          <h1>Registration</h1>
        </div>
        <div className={style.formInfoBlock}>
          <div className={style.emailSection}>
            <input
              type="text"
              name="username"
              id="activeinputNickname"
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
              htmlFor="activeinputNickname"
            >
              Nickname
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

          <div className={style.emailSection}>
            <img src={EmailIcon} alt="" />
            <input
              type="text"
              name="email"
              id="activeInputEmail"
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
              htmlFor="activeInputEmail"
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
              id="activeInputPassword"
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
              htmlFor="activeInputPassword"
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
            <button
              type="Submit"
              id="btnAuthRegister"
              style={{ visibility: "hidden" }}
            >
              Register
            </button>
          </div>

          <div className={style.googleBtn}>
            <p>
              Already have an account?
              <span onClick={() => setSwapRegisterLogin()}> Login</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
