import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "../DashBoard/Menu/Menu.css";
import client_logo from "../../../assets/img/client_logo.png";
import userPic from "../../../assets/img/man1.png";
import WlLogo from "../../../assets/img/WL_BandLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  getcurrentUserProfile,
  logout,
} from "../../../Redux/features/user/Action";
import { toast } from "react-toastify";

const menuData = [
  {
    tittle: (
      <>
        Workforce
        <br />
        Management
      </>
    ),
    icon: <IoBagHandle />,
    path: "./wfm",
  },
  {
    tittle: (
      <>
        Talent
        <br />
        Acquisition
      </>
    ),
    icon: <FaFilter />,
    path: "/",
  },
  {
    tittle: (
      <>
        Attendance <br /> & Timeoff
      </>
    ),
    icon: <FaClock />,
    path: "/",
  },
  {
    tittle: (
      <>
        Compensation
        <br />& Benefits
      </>
    ),
    icon: <FaMoneyBill />,
    path: "/",
  },
  {
    tittle: (
      <>
        Performance
        <br />& Goals
      </>
    ),
    icon: <IoIosColorPalette />,
    path: "/",
  },
  {
    tittle: (
      <>
        Learning
        <br />& Development
      </>
    ),
    icon: <GiSkills />,
    path: "/",
  },
  {
    tittle: (
      <>
        Travel
        <br />
        Management
      </>
    ),
    icon: <IoAirplaneSharp />,
    path: "/",
  },
  {
    tittle: (
      <>
        Expenses
        <br />
        Management
      </>
    ),
    icon: <FaCalculator />,
    path: "/",
  },
  {
    tittle: (
      <>
        Workforce
        <br />
        Engagement
      </>
    ),
    icon: <FaHandshakeAngle />,
    path: "/",
  },
  {
    tittle: (
      <>
        Business
        <br />
        Process
      </>
    ),
    icon: <IoBagHandle />,
    path: "/",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const { user, isLoding, error } = auth;
  const Jwt = localStorage.getItem("token");


  // get userinformation from redux
  useEffect(() => {
    if (Jwt) {
      dispatch(getcurrentUserProfile(navigate));
   }
  }, [dispatch,Jwt]);

  //check session expire and remove the token
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     navigate("/login");
  //     localStorage.removeItem("token");
  //   }
  // }, [error]);

  const handleLogout = async () => {
    dispatch(logout());
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <div className="sticky-top bg-light" style={{ zIndex: "" }}>
        <div className="d-flex justify-content-between p-1 py-2">
          <div className="myLogo">
            <Link to="/">
              <img src={client_logo} alt=""></img>
            </Link>
          </div>
          <div className="d-none d-md-block">
            <div className="MyMenu">
              {user && (
                <>
                  <span className="">
                    <Link to="/home">
                      <AiFillHome className="Icon" />
                    </Link>
                  </span>
                  <Link onClick={() => { window.open('home/Emp/Locator', '_blank'); }}                  >
                      <BiSearchAlt2 className="Icon" />
                  </Link>
                  <span className="dropdown ">
                    <div role="button" data-bs-toggle="dropdown">
                      <AiOutlineClockCircle className="Icon" />
                    </div>
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
                  <span className="dropdown ">
                    <div role="button" data-bs-toggle="dropdown">
                      <IoNotificationsOutline className="Icon" />
                      <span className="Notification_NO">43</span>
                    </div>
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
                                  - Your Mobile Bill Reimbursement and request -
                                  9868 has been Verified and processed by
                                  Vishakha
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
                                  - Regularization request is awaiting for your
                                  submission
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
                                  - Your Mobile Bill Reimbursement and request -
                                  9868 has been Verified and processed by
                                  Vishakha
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
                                  - Regularization request is awaiting for your
                                  submission
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
                                  - Your Mobile Bill Reimbursement and request -
                                  9868 has been Verified and processed by
                                  Vishakha
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
                                  - Regularization request is awaiting for your
                                  submission
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
                  <span className="dropdown ">
                    <div
                      className="d-flex"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        src={userPic}
                        alt="Profile Image"
                        className="userpic"
                      />
                      <div className="text">
                        <div className="name">{user?.NAME}</div>
                        <div className="desig">{user?.UserDesc}</div>
                      </div>
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
                            <a className="btn bg-secondary my-2 mx-2" href="#">
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
                </>
              )}
              <div className="myLogo">
                <a className="" href="">
                  <img src={WlLogo} alt=""></img>
                </a>
              </div>
            </div>
          </div>
          {user && (
            <div className="d-block d-md-none">
              <span className="dropdown">
                <CgMenuGridR
                  className="Icon"
                  size={50}
                  role="button"
                  data-bs-toggle="dropdown"
                />
                <ul className="dropdown-menu mobileviewDiv">
                  <MobileView />
                </ul>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const MobileView = () => {
  return (
    <div className="MenuMainDiv">
      {menuData?.map((item, index) => (
        <Link to={item.path} key={index} className="IconStyle">
          <div className="MenuMainDiv_Item">
            <p style={{ fontSize: "30px" }}>{item.icon}</p>
            {item.tittle}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
