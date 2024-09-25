import React from "react";

import Menu from "./Menu/Menu";
import "./DashBoard.css";
import Favourites from "../Favourites/Favourites";
import ExternalLinks from "../External Links/ExternalLinks";
import { FaHighlighter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashBoard = () => {

  const { auth } = useSelector((store) => store);
  const { user, isLoding, error } = auth;


  return (
    <>
      <Menu />
      <div className="d-flex justify-content-center align-items-center my-5">
        <h3 className="text-start">
          <b>
            Hello <i>{user?.NAME} !</i>
          </b>
          <br />
          <span>
            Thank you for sharing your mood with us <span>&#128516;</span>
            <br />
          </span>
          <br />
          We see that you are in a happy mood... Time to fly
        </h3>


        <Link to='/emp/profileView'>DBsddsdsdd</Link>
      </div>


      {/* Quick Access start  */}
      <div className="container-fluid">
        <h4 className="">
          <FaHighlighter /> Quick Access
        </h4>
        <div className="row">
          <div className="col-md-6">
            <Favourites />
          </div>
          <div className="col-md-6">
            <ExternalLinks />
          </div>
        </div>
      </div>

      {/* Quick Access end  */}
    </>
  );
};

export default DashBoard;
