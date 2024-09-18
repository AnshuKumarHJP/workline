import React, { Children } from "react";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./Header/Navbar";

const MainLayout = ({ children }) => {
  const Jwt = localStorage.getItem("token");

  return (
    <>
    <ToastContainer />
      <div className="p-0 m-0">
        <Navbar/>
        <div style={{ minHeight: "80dvh" }}>{children}</div>
        {Jwt && <Footer />}
      </div>
    </>
  );
};

export default MainLayout;
