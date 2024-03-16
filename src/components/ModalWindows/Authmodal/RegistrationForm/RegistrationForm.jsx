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
  const { registerFormActive, setSwapRegisterLogin } = useStore();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      newEmail: "",
      newPassword: "",
    },
    validationSchema: Yup.object({
      newEmail: Yup.string().email("Invalid email").required("Input email"),
      newPassword: Yup.string()
        .required("Input password")
        .min(4, "Min 4 symbols"),
      nickName: Yup.string().required("Input nickname"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/auth/users/", {
          email: values.email,
          username: values.username,
          password: values.newPassword,
        });
        window.location.reload();
      } catch (e) {
        console.log(e);
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
              name="nickName"
              id="activeinputNickname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nickName}
            />
            <label
              className={
                (formik.touched.nickName && formik.errors.nickName) ||
                formik.values.nickName != ""
                  ? `${style.inputerrorlabel}`
                  : null
              }
              htmlFor="activeinputNickname"
            >
              Nickname
            </label>
            {formik.touched.nickName && formik.errors.nickName ? (
              <p
                style={{
                  color: "red",
                  fontSize: 14,
                  position: "relative",
                }}
              >
                {formik.errors.nickName}
              </p>
            ) : null}
          </div>

          <div className={style.emailSection}>
            <img src={EmailIcon} alt="" />
            <input
              type="text"
              name="newEmail"
              id="activeInputEmail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newEmail}
            />
            <label
              className={
                (formik.touched.newEmail && formik.errors.newEmail) ||
                formik.values.newEmail != ""
                  ? `${style.inputerrorlabel}`
                  : null
              }
              htmlFor="activeInputEmail"
            >
              Email
            </label>
            {formik.touched.newEmail && formik.errors.newEmail ? (
              <p
                style={{
                  color: "red",
                  fontSize: 14,
                  position: "relative",
                }}
              >
                {formik.errors.newEmail}
              </p>
            ) : null}
          </div>
          <div className={style.passwordSection}>
            <img src={LockIcon} alt="" />
            <input
              type="password"
              name="newPassword"
              id="activeInputPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
            />
            <label
              className={
                (formik.touched.newPassword && formik.errors.newPassword) ||
                formik.values.newPassword != ""
                  ? `${style.inputerrorlabel}`
                  : null
              }
              htmlFor="activeInputPassword"
            >
              Password
            </label>
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <p
                style={{
                  color: "red",
                  fontSize: 14,
                  position: "relative",
                }}
              >
                {formik.errors.newPassword}
              </p>
            ) : null}
          </div>
          <div className={style.formBtn}>
            <Notification />
            {/* <button type="Submit">Register</button> */}
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
