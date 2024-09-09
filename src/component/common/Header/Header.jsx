import React from "react";
import "./Header.css";
import { AiFillHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import client_logo from "../../../assets/img/client_logo.png";
import userPic from "../../../assets/img/man1.png";
import WlLogo from "../../../assets/img/WL_BandLogo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("./login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="myNavbar">
              <div className="myLogo">
                <Link to="/">
                  <img src={client_logo} alt=""></img>
                </Link>
              </div>
              <div className="MyMenu">
                <ul className="navbar-nav d-flex px-3">
                  <li className="nav-item px-2 d-flex">
                    <div className="d-flex ">
                      <span>
                        <a href="#">
                          <AiFillHome className="Icon" />
                        </a>
                      </span>
                      <span>
                        <a href="#" data-bs-toggle="offcanvas">
                          <BiSearchAlt2 className="Icon" />
                        </a>
                      </span>
                      <span className="dropdown">
                        <p
                          className="dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          <AiOutlineClockCircle className="Icon" />
                        </p>
                        <ul className="dropdown-menu markatt">
                          <li className="dropdown-header">
                            <center>Mark Attendance</center>
                          </li>
                          <li>
                            <div className="cinout">
                              <div className="cin marked">
                                <div className="time">
                                  <b>In</b>
                                  <br />
                                  14:05:30
                                </div>
                                <a
                                  className="mcio-button"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#checkingreet"
                                >
                                  <FaDoorOpen size={25} /> Marked In
                                </a>
                                <br />
                                <div className="active">
                                  Active for
                                  <br />
                                  3:00 hours
                                </div>
                              </div>
                              <div className="cout">
                                <div className="time">
                                  <b>
                                    Out
                                    <br />
                                    --:--:--
                                  </b>
                                </div>
                                <a
                                  className="mcio-button"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#checkoutgreet"
                                >
                                  <FaDoorClosed size={25} /> Mark Out
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </span>
                      <span className="dropdown">
                        <p
                          className="dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          <IoNotificationsOutline className="Icon" />
                          <span className="Notification_NO">43</span>
                        </p>
                        <ul className="dropdown-menu">
                          <li className="dropdown-header sticky-top">
                            <center>Notifications</center>
                          </li>
                          <li>
                            <ul className="list-unstyled px-2 py-2">
                              <li>
                                <a href="#" title="Regularization Pending">
                                  <div className="notification-text">
                                    <i>
                                      {" "}
                                      - Your Mobile Bill Reimbursement and
                                      request - 9868 has been Verified and
                                      processed by Vishakha
                                    </i>
                                  </div>
                                  <div className="notification-age py-1">
                                    1 month ago
                                  </div>
                                </a>
                              </li>
                              <br />
                              <hr></hr>
                              <li>
                                <a href="#" title="Regularization Pending">
                                  <div className="notification-text">
                                    <i>
                                      {" "}
                                      - Regularization request is awaiting for
                                      your submission
                                    </i>
                                  </div>
                                  <div className="notification-age py-1">
                                    1 month ago
                                  </div>
                                </a>
                              </li>
                              <br />
                              <hr></hr>
                              <li>
                                <a href="#" title="Regularization Pending">
                                  <div className="notification-text">
                                    <i>
                                      {" "}
                                      - Your Mobile Bill Reimbursement and
                                      request - 9868 has been Verified and
                                      processed by Vishakha
                                    </i>
                                  </div>
                                  <div className="notification-age py-1">
                                    1 month ago
                                  </div>
                                </a>
                              </li>
                              <br />
                              <hr></hr>
                              <li>
                                <a href="#" title="Regularization Pending">
                                  <div className="notification-text">
                                    <i>
                                      {" "}
                                      - Regularization request is awaiting for
                                      your submission
                                    </i>
                                  </div>
                                  <div className="notification-age py-1">
                                    1 month ago
                                  </div>
                                </a>
                              </li>
                              <br />
                              <hr></hr>
                              <li>
                                <a href="#" title="Regularization Pending">
                                  <div className="notification-text">
                                    <i>
                                      {" "}
                                      - Your Mobile Bill Reimbursement and
                                      request - 9868 has been Verified and
                                      processed by Vishakha
                                    </i>
                                  </div>
                                  <div className="notification-age py-1">
                                    1 month ago
                                  </div>
                                </a>
                              </li>
                              <br />
                              <hr></hr>
                              <li>
                                <a href="#" title="Regularization Pending">
                                  <div className="notification-text">
                                    <i>
                                      {" "}
                                      - Regularization request is awaiting for
                                      your submission
                                    </i>
                                  </div>
                                  <div className="notification-age py-1">
                                    1 month ago
                                  </div>
                                </a>
                              </li>
                              <br />
                              <hr></hr>
                            </ul>
                          </li>
                          <li className="dropdown-footer">
                            <a href="#">
                              <center>View All Notifications</center>
                            </a>
                          </li>
                        </ul>
                      </span>
                    </div>
                    <span className="dropdown d-flex">
                      <p
                        className="dropdown-toggle d-flex"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        <img
                          src={userPic}
                          alt="Profile Image"
                          className="userpic"
                        />
                        <div className="text">
                          <div className="name">Anshu Kumar</div>
                          <div className="desig">Full Stack Developer</div>
                        </div>
                      </p>
                      <div className="myLogo">
                        <a className="" href="#">
                          <img src={WlLogo} alt=""></img>
                        </a>
                      </div>
                      <ul className="dropdown-menu userProfile">
                        <li className="user-header">
                          <img
                            alt="Profile Image"
                            src={userPic}
                            className="profileDetails"
                          />
                          <p>
                            Anshu Kumar
                            <br />
                            <small>
                              <a href="#">View Profile</a>
                            </small>
                            <br />
                            <small>Last Login: 12-Oct-2018 18:35:18 IST</small>
                          </p>
                        </li>
                        <li className="user-body">
                          <div className="change-role">Change My Role</div>
                          <div className="role">
                            <a href="#">
                              <em>&laquo; Back to original profile</em>
                            </a>
                            <hr />
                          </div>
                          <div className="scrollerrc">
                            <div className="role">
                              <a href="#">
                                <span>&laquo;</span> <b>Employee</b>{" "}
                                <span>&raquo;</span>
                              </a>
                              <hr />
                            </div>
                            <div className="role">
                              <a href="#">Recruiter</a>
                              <hr />
                            </div>
                            <div className="role">
                              <a href="#">BHR Head</a>
                              <hr />
                            </div>
                            <div className="role">
                              <a href="#">Vertical Head</a>
                              <hr />
                            </div>
                          </div>
                        </li>
                        <li className="user-footer clearfix">
                          <div className="float-start ">
                            <span>
                              <a
                                className="btn bg-secondary my-2 mx-2"
                                href="#"
                              >
                                Change Password
                              </a>
                            </span>
                          </div>
                          <div className="float-end ">
                            <span>
                              <a
                                className="btn bg-danger my-2 mx-2"
                                onClick={handleLogout}
                              >
                                Log out
                              </a>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
