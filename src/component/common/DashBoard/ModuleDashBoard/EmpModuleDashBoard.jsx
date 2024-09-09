import React from "react";
import "./EmpModuleDashBoard.css";
import { Link } from "react-router-dom";

const EmpModuleDashBoard = () => {
  return (
    <>
      <div className="top_section">
        <h3>WORKFOLIO</h3>
      </div>
      <div>
        <Link to="/emp/profile">View Profile</Link>
      </div>
    </>
  );
};

export default EmpModuleDashBoard;
