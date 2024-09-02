import React from "react";

const SaveBtn = ({tittle,functionName}) => {
  return (
    <div>
      <a
        className="btn"
        role="button"
        onClick={functionName}
        style={{ backgroundColor: "#263e5f", color: "white" }}
      >
        {tittle}
       
      </a>
    </div>
  );
};

export default SaveBtn;
