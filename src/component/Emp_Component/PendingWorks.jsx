import React from "react";
import { GiBackwardTime } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const PendingWorks = () => {
  return (
    <>
      <div className="row mb-3">
        <div className="card pb-4 p-0">
          <div className="card-header py-3">
            <h6 className="mb-0 fw-bold">Pending Works</h6>
          </div>
          <div className="card-body cutomeCard_body">
            {[1, 1, 1, , 1, 1].map((item, index) => (
              <div key={index} className="shadow-sm border mb-4 bg-white">
                <div className="card-body d-sm-flex align-items-center gap-2 justify-content-between">
                  <a>
                    <img
                      className="rounded-circle"
                      src="./assets/avatar4.jpg"
                      alt=""
                      width="50px"
                      height="50px"
                    />
                  </a>
                  <div className="" style={{ fontSize: "13px" }}>
                    <p className="mb-1">
                      Please initiate the confirmation appraisal process of
                      Moorthy Alagarsamy[ 50161 ]
                    </p>
                  </div>
                </div>
                <div className="card-footer justify-content-between d-flex align-items-center">
                  <div
                    className="d-none d-md-block"
                    style={{ fontSize: "13px" }}
                  >
                    <strong>Applied on:</strong>
                    <span>23-Jun-2024 11:30 AM</span>
                  </div>
                  <div className="card-hover-show">
                    <a className="btn btn-sm btn-warning border lift" href="#">
                      <GiBackwardTime />
                      <span className="hidden-text">Sendback</span>
                    </a>
                    <a className="btn btn-sm btn-success border lift" href="#">
                      <FaCheck />
                      <span className="hidden-text">Approve</span>
                    </a>
                    <a className="btn btn-sm btn-danger border lift" href="#">
                      <IoMdClose />
                      <span className="hidden-text">Reject</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingWorks;
