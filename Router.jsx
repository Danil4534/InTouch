import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./src/App";
import AuthModal from "./src/components/ModalWindows/Authmodal/AuthModal";
import Test from "./src/components/ModalWindows/test/test";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default Router;
