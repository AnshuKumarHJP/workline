import React, { useState } from "react";
import InputWithLabel from "../../../component/common/InputWithLabel";
import DropdownWithLabel from "../../../component/common/DropdownWithLabel";
import SaveBtn from "../../../component/common/SaveBtn";
import ArrayDummyData from "../../../DB/ArrayDummyData";
import Input_RadioWithLabel from "../../../component/common/Input_RadioWithLabel";

const Personal_Form = () => {
  const [otherMobileNumber, setotherMobileNumber] = useState(true);

  const [formDate, setFormData] = useState({
    tittle: "Mr",
    firstname: "Anshu",
    middlename: "kunmar",
    lastname: "tanti",
    fathername: "AK",
    mothername: "RK",
    knowas: "Syco",
    HighQualification: "161",
    Gender: "1",
    Email: "anshu@gmail.com",
    R_MobileNo: "8210500193",
    O_MobileNo: "8210500192",
    DOB: "1999-04-03",
    BirthDay_Wishday: "1999-04-03",
    countryOfBirth: "1",
    DomicileState: "1",
    placeOfBirth: "PTN",
    District: "bihar",
    CurrentNationality: "1",
    MotherTongue: "52",
    Other_MotherTongue: "",
    Religion: "3",
    Other_Religion: "",
    Caste: "3",
    Other_Caste: "",
    SpeciallyAbled: false,
    SpeciallyAbled_Remarks: "",
    InternationalWorker: false,
    NameOfOtherCountry: "",
  });

  const saveFunction = () => {
    console.log(formDate);
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
              label="Tittle"
              placeholders="Select"
              dataList={ArrayDummyData?.Tittle}
              valueName="SalutationCode"
              valueLabel="SalutationName"
              Set_selectedData={formDate.tittle}
              Get_selectedData={(value) =>
                setFormData((prev) => ({ ...prev, tittle: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <InputWithLabel
              label="First Name"
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
              label="Middle Name"
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
              label="Last Name"
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
              label="Father Name"
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
              label="Mother Name"
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
              label="Known as"
              type="text"
              placeholder="Known as"
              setvalue={formDate.knowas}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, knowas: value }))
              }
            />
          </div>
          <div className="col-md-4">
            <DropdownWithLabel
              label="Highest Qualification"
              placeholders="Select"
              dataList={ArrayDummyData?.QualificationOptions}
              valueName="qualificationCode"
              valueLabel="qualificationName"
              Set_selectedData={formDate.HighQualification}
              Get_selectedData={(value) =>
                setFormData((prev) => ({ ...prev, HighQualification: value }))
              }
            />
          </div>
        </div>
        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#FFEBEB" }}>G</em>
          <b>
            <span>Gender and Identity</span>
          </b>
        </div>
        <div className="col-md-6">
          <DropdownWithLabel
            label="Gender"
            placeholders="Select"
            dataList={ArrayDummyData?.GenderData}
            valueName="GenderCode"
            valueLabel="GenderName"
            Set_selectedData={formDate.Gender}
            Get_selectedData={(value) =>
              setFormData((prev) => ({ ...prev, Gender: value }))
            }
          />
        </div>

        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#E4F4F6" }}>C</em>
          <b>
            <span>Contact and Communication</span>
          </b>
        </div>
        <div className="col-md-4">
          <InputWithLabel
            label="Personal Email"
            type="text"
            placeholder="Personal Email"
            setvalue={formDate.Email}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, Email: value }))
            }
          />
        </div>

        <div className="col-md-4">
          <InputWithLabel
            label="Registered Mobile Number"
            type="text"
            placeholder="Registered Mobile Number"
            setvalue={formDate.R_MobileNo}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, R_MobileNo: value }))
            }
          />
        </div>
        <div className="col-md-4">
          <InputWithLabel
            label="Enter OTP"
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
              label="Other MobileNumber"
              type="text"
              placeholder="Other MobileNumber"
              setvalue={formDate.O_MobileNo}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, O_MobileNo: value }))
              }
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
          <InputWithLabel
            label="BirthDay"
            type="date"
            setvalue={formDate.DOB}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, DOB: value }))
            }
          />
        </div>
        <div className="col-md-4">
          <InputWithLabel
            label="BirthDay wishdate"
            type="date"
            setvalue={formDate.BirthDay_Wishday}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, BirthDay_Wishday: value }))
            }
          />
        </div>
        <div className="col-md-4">
          <DropdownWithLabel
            label="Country Of Birth"
            placeholders="Select"
            dataList={ArrayDummyData?.CountryData}
            valueName="CountryCode"
            valueLabel="CountryName"
            Set_selectedData={formDate.countryOfBirth}
            Get_selectedData={(value) =>
              setFormData((prev) => ({ ...prev, countryOfBirth: value }))
            }
          />
        </div>
        <div className="col-md-4">
          <DropdownWithLabel
            label="Domicile State"
            placeholders="Select"
            dataList={
              formDate.countryOfBirth == 1 ? ArrayDummyData?.StateData : []
            }
            valueName="StateCode"
            valueLabel="StateName"
            Set_selectedData={formDate.DomicileState}
            Get_selectedData={(value) =>
              setFormData((prev) => ({ ...prev, DomicileState: value }))
            }
          />
        </div>
        <div className="col-md-4">
          <InputWithLabel
            label="Place of Birth"
            type="text"
            placeholder="Place of Birth"
            setvalue={formDate.placeOfBirth}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, placeOfBirth: value }))
            }
          />
        </div>
        <div className="col-md-4">
          <InputWithLabel
            label="District"
            type="text"
            placeholder="District"
            setvalue={formDate.District}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, District: value }))
            }
          />
        </div>
        <div className="col-md-4">
          <DropdownWithLabel
            label="Current Nationlity"
            placeholders="Select"
            dataList={ArrayDummyData?.CountryData}
            valueName="CountryCode"
            valueLabel="CountryName"
            Set_selectedData={formDate.CurrentNationality}
            Get_selectedData={(value) =>
              setFormData((prev) => ({ ...prev, CurrentNationality: value }))
            }
          />
        </div>

        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#FBE0FB" }}>C</em>
          <b>
            <span>Cultural Roots</span>
          </b>
        </div>
        <div className="col-md-4">
          <DropdownWithLabel
            label="Mother Tounge"
            placeholders="Select"
            dataList={ArrayDummyData?.MotherTongueData}
            valueName="MothertoungeCode"
            valueLabel="MotherTongueName"
            Set_selectedData={formDate.MotherTongue}
            Get_selectedData={(value) =>
              setFormData((prev) => ({ ...prev, MotherTongue: value }))
            }
          />
        </div>
        {formDate.MotherTongue == 158 && (
          <div className="col-md-4">
            <InputWithLabel
              label="Other Mother Tounge"
              type="text"
              placeholder="Other Mother Tounge"
              setvalue={formDate.Other_MotherTongue}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, Other_MotherTongue: value }))
              }
            />
          </div>
        )}
        <div className="col-md-4">
          <DropdownWithLabel
            label="Religion"
            placeholders="Select"
            dataList={ArrayDummyData?.ReligionData}
            valueName="ReligionCode"
            valueLabel="ReligionName"
            Set_selectedData={formDate.Religion}
            Get_selectedData={(value) =>
              setFormData((prev) => ({ ...prev, Religion: value }))
            }
          />
        </div>
        {formDate.Religion == 6 && (
          <div className="col-md-4">
            <InputWithLabel
              label="Other Religion"
              type="text"
              placeholder="Other Religion"
              setvalue={formDate.Other_Religion}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, Other_Religion: value }))
              }
            />
          </div>
        )}
        <div className="col-md-4">
          <DropdownWithLabel
            label="Caste"
            placeholders="Select"
            dataList={ArrayDummyData?.CasteData}
            valueName="CasteCode"
            valueLabel="CasteName"
            Set_selectedData={formDate.Caste}
            Get_selectedData={(value) =>
              setFormData((prev) => ({ ...prev, Caste: value }))
            }
          />
        </div>
        {formDate.Caste == 6 && (
          <div className="col-md-4">
            <InputWithLabel
              label="Other Caste"
              type="text"
              placeholder="Other Caste"
              setvalue={formDate.Other_Caste}
              getvalue={(value) =>
                setFormData((prev) => ({ ...prev, Other_Caste: value }))
              }
            />
          </div>
        )}
        <div className="form_section_h d-flex gap-3 mb-3">
          <em style={{ backgroundColor: "#E9EEFC" }}>A</em>
          <b>
            <span>Accessibility Requirements</span>
          </b>
        </div>
        <div className="col-md-4">
          <Input_RadioWithLabel
            label="Specially Abled"
            name="isSpeciallyAbled"
            setvalue={formDate.SpeciallyAbled}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, SpeciallyAbled: value }))
            }
          />
        </div>
        <div className="col-md-8">
          {formDate.SpeciallyAbled && (
            <InputWithLabel
              label="Specially Abled Reamrks"
              type="text"
              placeholder="Specially Abled Reamrks"
              setvalue={formDate.SpeciallyAbled_Remarks}
              getvalue={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  SpeciallyAbled_Remarks: value,
                }))
              }
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
          <Input_RadioWithLabel
            label="International Worker"
            name="isInternationalWorker"
            setvalue={formDate.InternationalWorker}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, InternationalWorker: value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputWithLabel
            label="Name of the Other Country"
            type="text"
            placeholder="Name of the Other Country"
            setvalue={formDate.NameOfOtherCountry}
            getvalue={(value) =>
              setFormData((prev) => ({ ...prev, NameOfOtherCountry: value }))
            }
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
