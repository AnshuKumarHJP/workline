import React from "react";
import InputWithLabel from "../../../component/common/InputWithLabel";
import DropdownWithLabel from "../../../component/common/DropdownWithLabel";

const Personal_Form = () => {
  return (
    <>
      <div class="form_section_h d-flex gap-3 mb-3">
        <em style={{ backgroundColor: "#E9EEFC" }}>B</em>
        <b>
          <span title="Basic Information">Basic Information</span>
        </b>
      </div>
      <div class="row">
        <div class="col-md-4">
          <DropdownWithLabel lable="Tittle" />
        </div>
        <div class="col-md-4">
          <InputWithLabel
            lable="First Name"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div class="col-md-4">
          <InputWithLabel
            lable="Middle Name"
            type="text"
            placeholder="Middle Name"
          />
        </div>
        <div class="col-md-4">
          <InputWithLabel
            lable="Father Name"
            type="text"
            placeholder="Father Name"
          />
        </div>
        <div class="col-md-4">
          <InputWithLabel
            lable="Mother Name"
            type="text"
            placeholder="Mother Name"
          />
        </div>
        <div class="col-md-4">
          <InputWithLabel lable="Known as" type="text" placeholder="Known as" />
        </div>
        <div class="col-md-4">
          <DropdownWithLabel lable="Highest Qualification" />
        </div>
      </div>
      <div class="form_section_h d-flex gap-3 mb-3">
        <em style={{ backgroundColor: "#FFEBEB" }}>G</em>
        <b>
          <span>Gender and Identity</span>
        </b>
      </div>
      <div class="col-md-6">
          <DropdownWithLabel lable="Gender" />
        </div>
    </>
  );
};

export default Personal_Form;
