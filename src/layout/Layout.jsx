import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Main/Sections/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
