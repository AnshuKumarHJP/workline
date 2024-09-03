import React from "react";

const Input_RadioWithLabel = ({ label, name, setvalue, getvalue }) => {

  const handleChange = (e) => {
    getvalue(!setvalue);
  };
  return (
    <>
      <div className="border p-1 px-2 rounded">
        <label htmlFor="floatingInput">
          {label} <span className="text-danger">*</span>
        </label>
        <div className="form-check-wrap">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              defaultChecked={setvalue === true}
              onChange={handleChange}
            />
            <label className="form-check-label">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              defaultChecked={setvalue === false}
              onChange={handleChange}
            />
            <label className="form-check-label">No</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input_RadioWithLabel;
