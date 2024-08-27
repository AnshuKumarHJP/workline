import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { BsCake2 } from "react-icons/bs";
import avatar3 from "../../assets/img/avatar3.jpg";




export const ProfileCard = ({setIsAddMode}) => {
  return (
    <>
     <div className="row">
                <div className="card mb-3 shadow-lg">
                  <div
                    className="EidtIcon"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    onClick={()=>{setIsAddMode(true)}}
                  >
                    <FaRegEdit size={15} style={{ margin: "auto" }} />
                  </div>
                  <div className="card-body row gap-2">
                    <div className="col-md-4 text-center">
                      <a href="#" className="image-container">
                        <img
                          id="sample-img"
                          src={avatar3}
                          alt=""
                          height="110px"
                          width="110px"
                          className="image-fluid rounded-full"
                        />
                        <div
                          className="ProfileEditIcon"
                          //  onclick="fileUpload()"
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </div>
                        <input
                          id="file-input"
                          //onChange="fileChange(event)"
                          type="file"
                          accept=".jpg, .jpeg, .gif, .png"
                          style={{ display: "none" }}
                        />
                      </a>
                      <div className="d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="badge bg-success text-end mt-1">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="col-md-7 ">
                      <h6 className="mb-0 mt-2 fw-bold d-block fs-6 text-center text-md-start">
                        Ashokkumar Seerangan
                      </h6>
                      <p className="mt-1 mb-0 text-muted text-center text-md-start">
                        Senior Domain Leader
                      </p>

                      <div className="row g-2 pt-2 text-center">
                        <div className="col-xl-12 text-center">
                          <div className="d-flex align-items-center small">
                            <FaLocationDot />
                            <span className="ms-2">Chennai</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center small">
                            <MdCall />
                            <span className="ms-2">8526964377</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center small">
                            <IoMailSharp />
                            <span className="ms-2">
                              ashokkumar.s@workline.hr
                            </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center small">
                            <BsCake2 />
                            <span className="ms-2">10-May-1992</span>
                          </div>
                        </div>
                      </div>
                      <div className="align-items-center d-flex gap-3 mt-2">
                        <div
                          className="progress"
                          style={{ height: "9px", width: "230px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "75%", fontSize: "10px" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            75%
                          </div>
                        </div>
                        <span
                        onClick={()=>{setIsAddMode(false)}}
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                          className=""
                          style={{
                            fontSize: "12px",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          (View)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}
