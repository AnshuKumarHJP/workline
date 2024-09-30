import React, { useEffect, useState } from "react";
import "./ModuleDashBoard.css";
import { Link, useLocation, useParams } from "react-router-dom";
import Offcanvas_Comp from "../../component/common/Offcanvas_Comp";
import Loading from "../../component/common/Loading/Loading";
import ProfileAdd from "../EMP/ProfileAdd";
import ProfileView from "../EMP/ProfileView";
import MyConnects from "../../component/Emp_Component/MyConnects";
import PendingWorks from "../../component/Emp_Component/PendingWorks";
import MyTeam from "../../component/Emp_Component/MyTeam";
import { ProfileCard } from "../../component/Emp_Component/ProfileCard";
import { FaRegStar, FaStar } from "react-icons/fa";
import { decryptAsync } from "../../assets/Common JS/Commonfn";
import { useSelector } from "react-redux";
import { Sec_Menu_Group, Sec_Menu_SubGroup } from "../../DB/MenuSetUp";
import WL_Comp from "../../component/common/WL_Comp/WL_Comp";
import { MdOutlineAddBox } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ModuleDashBoard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAddMode, setIsAddMode] = useState(false);
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

  const location = useLocation(); // Access the location object
  const query = new URLSearchParams(location.search); // Create a URLSearchParams object
  const modCode = query.get("ModeCode");
  const { auth } = useSelector((store) => store);
  const { user, isLoding, error } = auth;
  const [Sec_Menu_GroupList, setSec_Menu_GroupList] = useState(null);
  const [Sec_Menu_SubGroupList, setSec_Menu_SubGroupList] = useState(null);
  const [master, setMaster] = useState(true);

  useEffect(() => {
    const decryptCode = async () => {
      try {
        const codeDecrypted = await decryptAsync(modCode, user.TYPEOFUSER);
        if (codeDecrypted) {
          const items = Sec_Menu_Group?.filter(
            (item) => item.Module_Code == codeDecrypted
          ).sort((a, b) => a.Display_Order - b.Display_Order);
          setSec_Menu_GroupList(items);
        }
      } catch (error) {
        console.error("Error in decryption:", error);
      }
    };

    // Call decryptCode only if modCode and user are defined
    if (modCode && user) {
      decryptCode();
    }
  }, [modCode, user, Sec_Menu_Group]);

  const toggleFavorite = (index) => {
    // Toggle favorite status for the clicked item
    const updatedFavorites = [...FavMenu];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavMenu(updatedFavorites);
  };

  const GetSec_Menu_SubGroup = async (Group_Code) => {
    const items = Sec_Menu_SubGroup?.filter(
      (item) => item.GroupCode == Group_Code
    ).sort((a, b) => a.DisplayOrder - b.DisplayOrder);
    setSec_Menu_SubGroupList(items);
  };

  if (isLoding) {
    return <Loading />;
  }

  return (
    <>
      <div className="top_section">
        <h3>WORKFOLIO</h3>
      </div>

      <ul className="custom-nav-item" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`custom-nav-link ${activeTab === 0 ? "active" : ""}`}
            id={`simple-tab-0`}
            data-bs-toggle="tab"
            href={`#simple-tabpanel-0`}
            role="tab"
            aria-controls={`simple-tabpanel-0`}
            aria-selected={activeTab === 0}
            onClick={() => setActiveTab(0)}
          >
            Dashboard
          </a>
        </li>
        {Sec_Menu_GroupList?.map((item, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <a
              className={`custom-nav-link ${
                activeTab === index + 1 ? "active" : ""
              }`}
              id={`simple-tab-${index + 1}`}
              data-bs-toggle="tab"
              href={`#simple-tabpanel-${index + 1}`}
              role="tab"
              aria-controls={`simple-tabpanel-${index + 1}`}
              aria-selected={activeTab === index + 1}
              onClick={() => {
                setActiveTab(index + 1);
                GetSec_Menu_SubGroup(item.Group_Code);
              }}
            >
              {item.Group_Name}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content pt-4 px-2" id="tab-content">
        <div
          className={`tab-pane ${activeTab === 0 ? "active" : ""}`}
          id={`simple-tabpanel-0`}
          role="tabpanel"
          aria-labelledby={`simple-tab-0`}
        >
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
        </div>
        {Sec_Menu_GroupList?.map((item, index) => (
          <div
            key={index + 1}
            className={`tab-pane ${activeTab === index + 1 ? "active" : ""}`}
            id={`simple-tabpanel-${index + 1}`}
            role="tabpanel"
            aria-labelledby={`simple-tab-${index + 1}`}
          >
            {Sec_Menu_SubGroupList?.map((item, index) => (
              <WL_Comp.WL_Div key={index}>
                <div className="box-header with-border">
                  <h3 className="box-title">{item.SubGroupName}</h3>
                </div>
                <div className="panel-collapse">
                  <div className="box-body">
                    <div className="row">
                      {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="detail-functions">
                            <a>Add Sec_Modules</a>

                            {master ? (
                              <span cl>
                               <Link to='/Sec_Modules?mode=add' style={{color:'#444'}}> <MdOutlineAddBox size={18} /></Link>
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to='/Sec_Modules?mode=list' style={{color:'#444'}}>  <FaRegEdit size={17} /></Link>
                              </span>
                            ) : (
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
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </WL_Comp.WL_Div>
            ))}
          </div>
        ))}
      </div>
      {/* pop up canvas */}
      <Offcanvas_Comp>
        {isAddMode ? <ProfileAdd /> : <ProfileView />}
      </Offcanvas_Comp>
    </>
  );
};

export default ModuleDashBoard;
