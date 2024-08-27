import React from "react";

const InputWithLabel = ({ lable, type, placeholder }) => {
  return (
    <>
      <div class=" form-floating form-input mb-3">
        <input type={type} class="form-control" placeholder={placeholder} />
        <label>
          {lable}
          <span class="text-danger">*</span>
        </label>
      </div>
    </>
  );
};

export default InputWithLabel;
