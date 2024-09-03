import React from "react";
import { IoClose } from "react-icons/io5";

const Offcanvas_Comp = ({ children }) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end RightSideBar"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div
          className="offcanvas-body p-0"
          id="RightSideBarr"
          style={{ backgroundColor: "white" }}
        >
          <span
            data-bs-dismiss="offcanvas"
             aria-label="Close"
            style={{
              position: "fixed",
              right: "20px",
              top: "10px",
              zIndex: 99999,
              cursor: "pointer",
              backgroundColor:'white'
            }}
          >
            <IoClose size={30} />
          </span>
          {children}
        </div>
      </div>
    </>
  );
};

export default Offcanvas_Comp;
