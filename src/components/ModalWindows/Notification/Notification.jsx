import { Button, notification, Space } from "antd";
import React from "react";
import style from "./notification.module.scss";
import useStore from "../../../store/useStore";
function Notification() {
  const { registerFormActive, setSwapRegisterLogin, notificationState } =
    useStore();
  const [api, contextHolder] = notification.useNotification();
  console.log(notificationState);
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: `${notificationState.message}`,
      description: `${notificationState.description}`,
    });
  };
  return (
    <div>
      {contextHolder}
      <Space>
        <Button
          className={style.formBtn}
          onClick={() => {
            document.querySelector("#btnAuthRegister").click();
            openNotificationWithIcon(notificationState.status);
          }}
        >
          {registerFormActive ? "Register" : "Login"}
        </Button>
      </Space>
    </div>
  );
}

export default Notification;
