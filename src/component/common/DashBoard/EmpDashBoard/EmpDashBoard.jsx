import React from "react";

import EmpMenu from "./EmpMenu/EmpMenu";
import "./EmpDashBoard.css";

const EmpDashBoard = () => {
  return (
    <>
      <EmpMenu />
      <div className="d-flex justify-content-center align-items-center my-5">
        <h3 className="text-start">
          <b>
            Hello <i>Anshu !</i>
          </b>
          <br />
          <span>
            Thank you for sharing your mood with us{" "}
            <span>
              &#128516;
            </span>
            <br />
          </span>
          <br />
          We see that you are in a happy mood... Time to fly
        </h3>
      </div>
    </>
  );
};

export default EmpDashBoard;
