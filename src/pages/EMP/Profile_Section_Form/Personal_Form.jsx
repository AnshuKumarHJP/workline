import React, { useState } from "react";
import InputWithLabel from "../../../component/common/InputWithLabel";
import DropdownWithLabel from "../../../component/common/DropdownWithLabel";
import SaveBtn from "../../../component/common/SaveBtn";

const dataList = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
];

const Personal_Form = () => {
  const [isSpeciallyAbled, setisSpeciallyAbled] = useState(false);
  const [otherMobileNumber, setotherMobileNumber] = useState(true);

  const [formDate, setFormData] = useState({
    tittle: "",
    firstname: "",
    middlename: "",
    lastname: "",
    fathername: "",
    mothername: "",
    knowas: "",
  });

  const [email,setEmail] = useState('')

  const saveFunction = () => {
    console.log(formDate);
    console.log("email" + email);
    
  };

  return (
    <>
      <div className="row">
        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#E9EEFC" }}>B</em>
          <b>
            <span title="Basic Information">Basic Information</span>
          </b>
        </div>
        <div className="row">
          <div className="col-md-4">
            <DropdownWithLabel
              lable="Tittle"
              placeholders="Select"
              dataList={dataList}
              Set_selectedData={formDate.tittle}
              Get_selectedData={(value) =>
                setFormData((prev) => ({ ...prev, tittle: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <InputWithLabel
              lable="First Name"
              type="text"
              placeholder="First Name"
              setvalue={formDate.firstname}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, firstname: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <InputWithLabel
              lable="Middle Name"
              type="text"
              placeholder="Middle Name"
              setvalue={formDate.middlename}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, middlename: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <InputWithLabel
              lable="Last Name"
              type="text"
              placeholder="Last Name"
              setvalue={formDate.lastname}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, lastname: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <InputWithLabel
              lable="Father Name"
              type="text"
              placeholder="Father Name"
              setvalue={formDate.fathername}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, fathername: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <InputWithLabel
              lable="Mother Name"
              type="text"
              placeholder="Mother Name"
              setvalue={formDate.mothername}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, mothername: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <InputWithLabel
              lable="Known as"
              type="text"
              placeholder="Known as"
              setvalue={formDate.knowas}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, knowas: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <DropdownWithLabel lable="Highest Qualification" />
          </div>
        </div>
        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#FFEBEB" }}>G</em>
          <b>
            <span>Gender and Identity</span>
          </b>
        </div>
        <div className="col-md-6">
          <DropdownWithLabel lable="Gender" />
        </div>

        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#E4F4F6" }}>C</em>
          <b>
            <span>Contact and Communication</span>
          </b>
        </div>
        <div className="col-md-4">
          <InputWithLabel
            lable="Personal Email"
            type="text"
            placeholder="Personal Email"
            setvalue={email}
            getvalue={setEmail}
          />
        </div>

        <div className="col-md-4">
          <InputWithLabel
            lable="Registered Mobile Number"
            type="text"
            placeholder="Registered Mobile Number"
          />
        </div>
        <div className="col-md-4">
          <InputWithLabel
            lable="Enter OTP"
            type="text"
            placeholder="Enter OTP"
          />
        </div>

        <div className="col-md-4 mb-2">
          <input
            type="checkbox"
            checked={otherMobileNumber}
            onChange={() => {
              setotherMobileNumber(!otherMobileNumber);
            }}
          />
          &nbsp;&nbsp;
          <span>Receive notifications on same number</span>
        </div>
        {!otherMobileNumber && (
          <div className="col-md-4">
            <InputWithLabel
              lable="Other MobileNumber"
              type="text"
              placeholder="Other MobileNumber"
            />
          </div>
        )}
        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#FFECDB" }}>B</em>
          <b>
            <span>Birth and Nationality</span>
          </b>
        </div>

        <div className="col-md-4">
          <InputWithLabel lable="BirthDay" type="date" />
        </div>
        <div className="col-md-4">
          <InputWithLabel lable="BirthDay wishdate" type="date" />
        </div>
        <div className="col-md-4">
          <DropdownWithLabel lable="Country Of Birth" />
        </div>
        <div className="col-md-4">
          <DropdownWithLabel lable="Domicile State" />
        </div>
        <div className="col-md-4">
          <InputWithLabel
            lable="Place of Birth"
            type="text"
            placeholder="Place of Birth"
          />
        </div>
        <div className="col-md-4">
          <InputWithLabel lable="Distric" type="text" placeholder="District" />
        </div>
        <div className="col-md-4">
          <DropdownWithLabel lable="Current  Nationlity" />
        </div>

        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#FBE0FB" }}>C</em>
          <b>
            <span>Cultural Roots</span>
          </b>
        </div>
        <div className="col-md-4">
          <DropdownWithLabel lable="Mother Tounge" />
        </div>
        <div className="col-md-4">
          <DropdownWithLabel lable="Religion" />
        </div>
        <div className="col-md-4">
          <DropdownWithLabel lable="Caste" />
        </div>
        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#E9EEFC" }}>A</em>
          <b>
            <span>Accessibility Requirements</span>
          </b>
        </div>
        <div className="col-md-4">
          <div className="border p-1 px-2 rounded">
            <label htmlFor="floatingInput">Specially Abled? *</label>
            <div className="form-check-wrap">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isSpeciallyAbled"
                  value="Yes"
                  onClick={() => {
                    setisSpeciallyAbled(true);
                  }}
                />
                <label className="form-check-label" htmlFor="speciallyAbledYes">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isSpeciallyAbled"
                  value="No"
                  onClick={() => {
                    setisSpeciallyAbled(false);
                  }}
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="speciallyAbledNo">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {isSpeciallyAbled && (
            <InputWithLabel
              lable="Specially Abled Reamrks"
              type="text"
              placeholder="Specially Abled Reamrks"
            />
          )}
        </div>

        <div className="form_section_h d-flex gap-3 mb-3 mt-4">
          <em style={{ backgroundColor: "#E4F4F6" }}>E</em>
          <b>
            <span>Employment Authorization</span>
          </b>
        </div>
        <div className="col-md-6">
          <div className="border p-1 px-2 rounded">
            <label htmlFor="floatingInput">International Worker ? *</label>
            <div className="form-check-wrap mt-1">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isInternationalWorker"
                />
                <label className="form-check-label" htmlFor="speciallyAbledYes">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isInternationalWorker"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="speciallyAbledNo">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <InputWithLabel
            lable="Name of the Other Country"
            type="text"
            placeholder="Name of the Other Country"
          />
        </div>
      </div>

      <div className="form-end d-flex gap-2">
        <div className="btn-group" role="group">
          <a
            className="btn border border-seconadry dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Options
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" role="button">
                Save
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" role="button">
                Previous
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" role="button">
                Next
              </a>
            </li>
          </ul>
        </div>
        <SaveBtn tittle=" Save &amp; Next" functionName={saveFunction} />
      </div>
    </>
  );
};

export default Personal_Form;
