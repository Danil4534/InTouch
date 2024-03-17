import { Button, notification, Space } from "antd";
import React from "react";
import style from "./notification.module.scss";
import useStore from "../../../store/useStore";
function Notification() {
  const { registerFormActive, setSwapRegisterLogin } = useStore();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Success",
      description: "Access",
    });
  };
  return (
    <div>
      {contextHolder}
      <Space>
        <Button
          className={style.formBtn}
          type="submit"
          onClick={() => openNotificationWithIcon("success")}
        >
          {registerFormActive ? "Register" : "Login"}
        </Button>
      </Space>
    </div>
  );
}

export default Notification;
