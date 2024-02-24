import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./src/App";
import AuthModal from "./src/components/ModalWindows/Authmodal/AuthModal";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default Router;
