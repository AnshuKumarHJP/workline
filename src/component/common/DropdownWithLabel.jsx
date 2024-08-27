import React from "react";

const DropdownWithLabel = ({lable}) => {
  return (
    <>
      <div class="form-floating mb-3">
        <select
          class="form-select"
          aria-label="Floating label select example"
        >
          <option selected>select</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">
          {lable}
           <span class="text-danger">*</span>
        </label>
      </div>
    </>
  );
};

export default DropdownWithLabel;
