import React, { useEffect, useState } from "react";
import "./EmpModuleDashBoard.css";
import { Link } from "react-router-dom";
import ProfileSummery from "../../../../pages/EMP/ProfileSummery";
import Offcanvas_Comp from "../../Offcanvas_Comp";
import Loading from "../../Loading/Loading";
import ProfileAdd from "../../../../pages/EMP/ProfileAdd";
import ProfileView from "../../../../pages/EMP/ProfileView";
import MyConnects from "../../../Emp_Component/MyConnects";
import PendingWorks from "../../../Emp_Component/PendingWorks";
import MyTeam from "../../../Emp_Component/MyTeam";
import { ProfileCard } from "../../../Emp_Component/ProfileCard";
import { FaRegStar, FaStar } from "react-icons/fa";

const sunmenu = [
  {
    tittle: "DashBoard",
    menu: false,
  },
  {
    tittle: "About Me",
    menu: true,
  },
  {
    tittle: "About My Team",
    menu: true,
  },
  {
    tittle: "About My Sphere",
    menu: true,
  },
];

const subGroup = [{}];

const EmpModuleDashBoard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [FavMenu, setFavMenu] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (index) => {
    // Toggle favorite status for the clicked item
    const updatedFavorites = [...FavMenu];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavMenu(updatedFavorites);
  };

  return (
    <>
      <div className="top_section">
        <h3>WORKFOLIO</h3>
      </div>
      <ul className="custom-nav-item" role="tablist">
        {sunmenu.map((item, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <a
              className={`custom-nav-link ${
                activeTab === index ? "active" : ""
              }`}
              id={`simple-tab-${index}`}
              data-bs-toggle="tab"
              href={`#simple-tabpanel-${index}`}
              role="tab"
              aria-controls={`simple-tabpanel-${index}`}
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {item.tittle}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content pt-4" id="tab-content">
        {sunmenu.map((item, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? "active" : ""}`}
            id={`simple-tabpanel-${index}`}
            role="tabpanel"
            aria-labelledby={`simple-tab-${index}`}
          >
            {item.menu == false ? (
              <div className="container-fluid">
                <div className="row gap-4 justify-content-center">
                  <div className="col-md-5 col-sm-12 p-0">
                    <ProfileCard setIsAddMode={setIsAddMode} />
                    <MyTeam />
                  </div>
                  <div className="col-md-6 col-sm-12 mx-1">
                    <PendingWorks />
                    <MyConnects />
                  </div>
                </div>
              </div>
            ) : (
              <>
                {[1, 1, 1, 1, 1].map((item, index) => (
                  <div className="box" key={index}>
                    <div className="box-header with-border">
                      <h3 className="box-title">My Profile</h3>
                    </div>
                    <div className="panel-collapse">
                      <div className="box-body">
                        <div className="row">
                          {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                            <div className="col-md-6" key={index}>
                              <div className="detail-functions">
                                <a href="">Review Process</a>
                                <span>
                                  {FavMenu[index] ? (
                                    <FaStar
                                      onClick={() => toggleFavorite(index)}
                                    />
                                  ) : (
                                    <FaRegStar
                                      onClick={() => toggleFavorite(index)}
                                    />
                                  )}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>

      {/* pop up canvas */}
      <Offcanvas_Comp>
        {isLoading ? <Loading /> : isAddMode ? <ProfileAdd /> : <ProfileView />}
      </Offcanvas_Comp>
    </>
  );
};

export default EmpModuleDashBoard;
