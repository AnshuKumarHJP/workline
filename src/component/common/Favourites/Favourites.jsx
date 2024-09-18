import React from "react";
import "./Favourites.css";
import { BsFillBookmarkFill } from "react-icons/bs";

const Favourites = () => {
  return (
    <>
      <div className="contents">
        <h5>
          <BsFillBookmarkFill /> Favourites
        </h5>
        <div className="row">
          <div className="col-sm-6">
            <ul className="fav">
              <li className="hvr-bounce-in">
                <a href="#">
                  <span className="favorico">VP</span> <b>View Profile</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="favorico">HL</span> <b>Holiday list</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="favorico">VL</span> <b>View Leave Balance</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="favorico">CJ</span>{" "}
                  <b>Current Job Openings</b>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="fav">
              <li>
                <a href="#">
                  <span className="favorico">MN</span> <b>Make Notes</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="favorico">RA</span>{" "}
                  <b>Raise a Service Request</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="favorico">PI</span> <b>Post Idea</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourites;
