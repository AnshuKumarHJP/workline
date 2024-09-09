import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import MYLOGO from "../../../assets/img/WL_LOGO.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <a href="https://www.workline.hr" target="_blank" className="nav-link">
          <img src={MYLOGO} alt="Conpany_Logo" />
        </a>
        <a
          href="https://in.linkedin.com/company/worklineinc"
          target="_blank"
          className="nav-link"
        >
          <FaLinkedinIn size={30} style={{ color: "white" }} />
        </a>
      </div>
    </>
  );
};

export default Footer;
