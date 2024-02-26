import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./src/App";
import AuthModal from "./src/components/ModalWindows/Authmodal/AuthModal";
import Layout from "./src/layout/Layout";

function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace={true}></Navigate>} />
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/profile" element={<></>} />
      </Route>
    </Routes>
  );
}

export default Router;
