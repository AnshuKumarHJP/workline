import React, { Children } from "react";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./Header/Navbar";
import { Outlet } from "react-router-dom";
import useClipboardUrlCheck from "../CustomHook/useClipboardUrlCheck";

const MainLayout = ({ children }) => {
  const Jwt = localStorage.getItem("token");
  const { isCopyURL } = useClipboardUrlCheck();
  return (
    <>
      <ToastContainer />
      <div className="p-0 m-0">
        <Navbar />
        <div style={{ minHeight: "95dvh" }}>
          {/* {isCopyURL ? (
            <WL_Comp.ErrorDiv>"Invalid URL"</WL_Comp.ErrorDiv>
          ) : ( */}
            <Outlet />
          {/* )} */}
        </div>
        {Jwt && <Footer />}
      </div>
    </>
  );
};

export default MainLayout;
