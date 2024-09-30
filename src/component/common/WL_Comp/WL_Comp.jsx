import React from "react";
import "./WL_Comp.css";

const ErrorDiv = ({ children }) => {
  return (
    <div id="errorDiv" className="">
      {children}
    </div>
  );
};

const SuccessDiv = ({ children }) => {
  return <div id="successDiv">{children}</div>;
};

const WL_Div = ({ children, Bordercolor, alignRight }) => {
  return (
    <div
      id="WL_Div"
      style={{
        borderTop: `2px solid ${Bordercolor}`,
        textAlign: `${alignRight ? "Right" : "Left"}`,
      }}
    >
      {children}
    </div>
  );
};

// Buttom

const SaveButtom = ({ children, functionName }) => {
  return (
    <button
      className="btn px-4 m-2"
      role="button"
      onClick={functionName}
      style={{ backgroundColor: "#263e5f", color: "white" }}
    >
      {children}
    </button>
  );
};

const CancelButtom = ({ children, functionName }) => {
  return (
    <button
      className="btn px-4 m-2"
      role="button"
      onClick={functionName}
      style={{ backgroundColor: "#263e6f", color: "white" }}
    >
      {children}
    </button>
  );
};

// Main wrapper that exports the subcomponents as properties
const WL_Comp = {
  ErrorDiv,
  SuccessDiv,
  WL_Div,
  SaveButtom,
  CancelButtom,
};

export default WL_Comp;
