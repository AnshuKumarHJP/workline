import React, { useEffect, useState } from "react";
import "../../assets/Css/common.css";
import MyTeam from "../../component/Emp_Component/MyTeam";
import PendingWorks from "../../component/Emp_Component/PendingWorks";
import MyConnects from "../../component/Emp_Component/MyConnects";
import { ProfileCard } from "../../component/Emp_Component/ProfileCard";
import Offcanvas_Comp from "../../component/common/Offcanvas_Comp";
import ProfileAdd from "./ProfileAdd";
import ProfileView from "./ProfileView";
import Loading from "../../component/common/Loading/Loading";

const ProfileSummery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAddMode, setIsAddMode] = useState(false);


  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      <div className="container-fluid">
        <div className="my-2 p-4">
          <div className="row gap-4 justify-content-center">
            <div className="col-md-5 col-sm-12 p-0">
              <ProfileCard setIsAddMode={setIsAddMode}/>
              <MyTeam />
            </div>
            <div className="col-md-6 col-sm-12 mx-1">
              <PendingWorks />
              <MyConnects />
            </div>
          </div>
        </div>
      </div>

      {/* pop up canvas */}
      <Offcanvas_Comp>
      {/* <Loading /> */}
        {isLoading ? <Loading /> : isAddMode ? <ProfileAdd /> : <ProfileView />}
      </Offcanvas_Comp>
    </>
  );
};

export default ProfileSummery;
