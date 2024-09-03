import React, { useEffect, useState } from "react";

const DropdownWithLabel = ({
  label,
  dataList,
  placeholders,
  Set_selectedData,
  Get_selectedData,
  valueName,
  valueLabel,
}) => {
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
          {dropdownData?.map((item, index) =>
            item.category ? (
              // Category with sub-options
              <optgroup key={index} label={item.category}>
                {item.options?.map((subItem, subIndex) => (
                  <option key={subIndex} value={subItem[valueName]}>
                    {subItem[valueLabel]}
                  </option>
                ))}
              </optgroup>
            ) : (
              // Simple option without category
              <option key={index} value={item[valueName]}>
                {item[valueLabel]}
              </option>
            )
          )}
        </select>
        <label htmlFor="floatingSelect">
          {label}
          <span className="text-danger"> *</span>
        </label>
      </div>
    </>
  );
};

export default DropdownWithLabel;
