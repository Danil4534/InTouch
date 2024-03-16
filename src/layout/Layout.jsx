import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Main/Sections/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import Settings from "../components/ModalWindows/Settings/Settings";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ padding: "115px, 150px" }}>
        <Outlet />
      </div>
      <Settings />
      <ScrollUp />
    </>
  );
}

export default Layout;
