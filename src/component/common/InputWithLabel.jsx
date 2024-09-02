import React, { useEffect, useState } from "react";

const InputWithLabel = ({ lable, type, placeholder, setvalue, getvalue }) => {
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    if (setvalue) {
      setInputData(setvalue);
    }
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData(value);
    getvalue(value);
  };

  return (
    <>
      <div className=" form-floating form-input mb-3">
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          value={inputData}
          onChange={handleChange}
        />
        <label>
          {lable}
          <span className="text-danger"> *</span>
        </label>
      </div>
    </>
  );
};

export default InputWithLabel;
