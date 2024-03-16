import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./src/App";

import Layout from "./src/layout/Layout";
import Profile from "./src/pages/Profile/Profile";
import Courses from "./src/pages/Courses/Courses";
import Calendar from "./src/pages/Calendar/Calendar";

function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace={true}></Navigate>} />
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default Router;
