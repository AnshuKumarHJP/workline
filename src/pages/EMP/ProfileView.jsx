import React, { useEffect, useState } from "react";
import "../../assets/Css/ProfileView.css";
import { FaPerson } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import PersonalView from "./viewPage/PersonalView";
import ContactView from "./viewPage/ContactView";
import EducationView from "./viewPage/EducationView";
import SkillsView from "./viewPage/SkillsView";
import Bonus_Advance from "./viewPage/Bonus_Advance";
import OtherView from "./viewPage/OtherView";
import PortfolioView from "./viewPage/PortfolioView";

const sectionData = [
  {
    name: "Personal",
    icon: <FaPerson />,
  },
  {
    name: "Contact",
    icon: <BiSolidContact />,
  },
  {
    name: "Education",
    icon: <FaAward />,
  },
  {
    name: "Skills",
    icon: <FaRegLightbulb />,
  },
  {
    name: "Portfolio",
    icon: <FaUserGear />,
  },
  {
    name: "Bonus & Advance",
    icon: <FaMoneyBillTrendUp />,
  },
  {
    name: "Other",
    icon: <FaQuestion />,
  },
];

const ProfileView = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [Active, setActive] = useState(false);
  const [ActiveSection, setActiveSection] = useState(1);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector(".section-Header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);



  const handleSectionView = (index) => {
    setActive(true);
    setActiveSection(index)
    const timer = setTimeout(() => {
      setActive(false);
    }, 300); 
    return () => clearTimeout(timer);
  };
  
  return (
    <>
      <div className="section-Header d-flex flex-wrap">
        {sectionData.map((item, index) => (
          <label
            key={index}
            className="section-Name"
            onClick={()=>{handleSectionView(index+1)}}
          >
            {item.icon} &nbsp;
            <span>{item.name}</span>
          </label>
        ))}
      </div>
      <div
        className={`content ${Active ? "content-active" : ""}`}
        style={{ marginTop: headerHeight }}
      >
        {ActiveSection === 1 ? (
          <PersonalView />
        ) : ActiveSection === 2 ? (
          <ContactView />
        ) : ActiveSection === 3 ? (
          <EducationView />
        ) : ActiveSection === 4 ? (
          <SkillsView />
        ) : ActiveSection === 5 ? (
          <PortfolioView />
        ) : ActiveSection === 6 ? (
          <Bonus_Advance />
        ) : ActiveSection === 7 ? (
          <OtherView />
        ) : null}
      </div>
    </>
  );
};

export default ProfileView;
