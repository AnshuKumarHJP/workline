import React, { useEffect, useState } from "react";

const DropdownWithLabel = ({ lable, dataList, placeholders, Set_selectedData,Get_selectedData }) => {
  const [dropdownData, setDropdownData] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  // set data to dropdown
  useEffect(() => {
    if (dataList) {
      setDropdownData(dataList);
    }
  }, [dataList]);


   // set selected data to dropdown in edit mode 
  useEffect(() => {
    if (Set_selectedData) {
      setSelectedValue(Set_selectedData);
    }
  }, [Set_selectedData]);


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    Get_selectedData(event.target.value);
  };

  return (
    <>
      <div className="form-floating mb-3">
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="form-select"
          aria-label="Floating label select example"
        >
          <option value="">{placeholders}</option>
          {dropdownData?.map((item, i) => (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <label htmlFor="floatingSelect">
          {lable}
          <span className="text-danger"> *</span>
        </label>
      </div>
    </>
  );
};

export default DropdownWithLabel;
