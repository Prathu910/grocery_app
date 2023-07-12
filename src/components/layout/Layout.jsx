import React from "react";
import "./Layout.scss";
import { Link, Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="container main-container">
        <Outlet />
      </div>
      <div className="footer container">
        <Footer />
      </div>
      <hr />
      <div className="credits">
        <p className="container">
          2022 Deal Buddy Limited, All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Layout;
