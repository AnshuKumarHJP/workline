import React, { useState } from "react";
import {
  FaUser,
  FaCamera,
  FaPassport,
  FaAddressCard,
  FaHammer,
  FaVenusMars,
  FaCcVisa,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { GiSkills, GiThorHammer } from "react-icons/gi";
import { TiStarburst } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";
import { BsFillTagFill } from "react-icons/bs";
import {
  MdFamilyRestroom,
  MdEmojiTransportation,
  MdWorkHistory,
  MdSkipPrevious,
} from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { FaAward } from "react-icons/fa6";
import Personal_Form from "./Profile_Section_Form/Personal_Form";
import UploadPhoto_Form from "./Profile_Section_Form/UploadPhoto_Form";
import Passport_Form from "./Profile_Section_Form/Passport_Form";
import DrivingLicense_Form from "./Profile_Section_Form/DrivingLicense_Form";
import MedicalData_Form from "./Profile_Section_Form/MedicalData_Form";
import CoreSkills_Form from "./Profile_Section_Form/CoreSkills_Form";
import ReferenceCheck_Form from "./Profile_Section_Form/ReferenceCheck_Form";
import ContactAddress_Form from "./Profile_Section_Form/ContactAddress_Form";
import EmergencyContact_Form from "./Profile_Section_Form/EmergencyContact_Form";
import FamilyInfo_Form from "./Profile_Section_Form/FamilyInfo_Form";
import AcademicQualification_Form from "./Profile_Section_Form/AcademicQualification_Form";
import PreviousEmployment_Form from "./Profile_Section_Form/PreviousEmployment_Form";
import MaritalStatus_Form from "./Profile_Section_Form/MaritalStatus_Form";
import FraudulentActivities_Form from "./Profile_Section_Form/FraudulentActivities_Form";
import IdentificationDetails_Form from "./Profile_Section_Form/IdentificationDetails_Form";
import VisaDetails_Form from "./Profile_Section_Form/VisaDetails_Form";
import MediclaimNomination_Form from "./Profile_Section_Form/MediclaimNomination_Form";
import StatutoryForms_Form from "./Profile_Section_Form/StatutoryForms_Form";
import TransportationAddress_Form from "./Profile_Section_Form/TransportationAddress_Form";

const SectionList = [
  {
    name: "Personal Info",
    icon: <FaUser />,
  },
  {
    name: "Upload Photo",
    icon: <FaCamera />,
  },
  {
    name: "Passport",
    icon: <FaPassport />,
  },
  {
    name: "Driving License",
    icon: <FaAddressCard />,
  },
  {
    name: "Medical Data",
    icon: <FaHammer />,
  },
  {
    name: "Core Skills",
    icon: <GiSkills />,
  },
  {
    name: "Reference Check",
    icon: <TiStarburst />,
  },
  {
    name: "Contact Address",
    icon: <IoLocation />,
  },
  {
    name: "Emergency Contact",
    icon: <BsFillTagFill />,
  },
  {
    name: "Family Info",
    icon: <MdFamilyRestroom size={18} />,
  },
  {
    name: "Academic Qualification",
    icon: <HiAcademicCap size={20} />,
  },
  {
    name: "Previous Employment",
    icon: <MdWorkHistory size={18} />,
  },
  {
    name: "Marital Status",
    icon: <FaVenusMars size={18} />,
  },
  {
    name: "Fraudulent Activities / Criminal History",
    icon: <MdSkipPrevious size={30} />,
  },
  {
    name: "Identification Details",
    icon: <FaAward />,
  },
  {
    name: "Visa Details",
    icon: <FaCcVisa />,
  },
  {
    name: "ESIC & Mediclaim Nomination",
    icon: <FaHandHoldingMedical size={20} />,
  },
  {
    name: "Statutory Forms",
    icon: <GiThorHammer size={18} />,
  },
  {
    name: "Transportation Address",
    icon: <MdEmojiTransportation size={20} />,
  },
];

const ProfileAdd = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [activesectionTittle, setactivesectionTittle] =
    useState("Personal Info");
  const [activesectionForm, setactivesectionForm] = useState(1);

  const toggleMenu = () => {
    setIsSidebar(!isSidebar);
    var paragraphs = document.querySelectorAll(".ListCss p");
    paragraphs.forEach(function (paragraph) {
      paragraph.classList.toggle("hidden");
    });
  };

  const handleViewSection = (item, index) => {
    setActiveSection(index);
    setactivesectionTittle(item.name);
    setactivesectionForm(index + 1);
  };

  return (
    <>
      <div className="bg-info">
        <div className={`MenuList  ${isSidebar ? "isSidebarCollapes" : ""}`}>
          <ul id="profileSectionInfoList">
            {SectionList.map((item, index) => (
              <li
                key={index}
                className={`ListCss ${activeSection === index ? "active" : ""}`}
                onClick={() => {
                  handleViewSection(item, index);
                }}
              >
                {item.icon}
                <p id="PersonalSection_ID">
                  {item.name}
                  <b className="mx-1"> * </b>
                  <TbRosetteDiscountCheckFilled />
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`modelDiv ${isSidebar ? "AfCollapesmodelDiv" : ""}`}
          id="modal-content"
        >
          <div className="modelHeading" id="modelHeading">
            <div className="toggleMenu" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </div>
            <div className="w-100 text-center">
              <h6 style={{ textAlign: "center", alignItems: "center" }}>
                {activesectionTittle}
              </h6>
            </div>
          </div>
          <div className="form_section my-4">
            {activesectionForm === 1 ? (
              <Personal_Form />
            ) : activesectionForm === 2 ? (
              <UploadPhoto_Form />
            ) : activesectionForm === 3 ? (
              <Passport_Form />
            ) : activesectionForm === 4 ? (
              <DrivingLicense_Form />
            ) : activesectionForm === 5 ? (
              <MedicalData_Form />
            ) : activesectionForm === 6 ? (
              <CoreSkills_Form />
            ) : activesectionForm === 7 ? (
              <ReferenceCheck_Form />
            ) : activesectionForm === 8 ? (
              <ContactAddress_Form />
            ) : activesectionForm === 9 ? (
              <EmergencyContact_Form />
            ) : activesectionForm === 10 ? (
              <FamilyInfo_Form />
            ) : activesectionForm === 11 ? (
              <AcademicQualification_Form />
            ) : activesectionForm === 12 ? (
              <PreviousEmployment_Form />
            ) : activesectionForm === 13 ? (
              <MaritalStatus_Form />
            ) : activesectionForm === 14 ? (
              <FraudulentActivities_Form />
            ) : activesectionForm === 15 ? (
              <IdentificationDetails_Form />
            ) : activesectionForm === 16 ? (
              <VisaDetails_Form />
            ) : activesectionForm === 17 ? (
              <MediclaimNomination_Form />
            ) : activesectionForm === 18 ? (
              <StatutoryForms_Form />
            ) : activesectionForm === 19 ? (
              <TransportationAddress_Form />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAdd;
