import React from "react";

const Loading = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "10%", marginLeft: "auto" }}
      >
        <div
          className="spinner-grow"
          role="status"
          style={{ width: "100px", height: "100px" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
