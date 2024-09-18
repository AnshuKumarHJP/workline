import React, { useEffect } from "react";
import "./ListDataTable.css";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const ListDataTable = ({ data, columnData, Navigate, baseURL }) => {
  useEffect(() => {
    const initializeDataTable = () => {
      const $ = window.$;
      $("#example").DataTable();
    };
    if (window.$) {
      initializeDataTable();
    } else {
      const intervalId = setInterval(() => {
        if (window.$) {
          initializeDataTable();
          clearInterval(intervalId);
        }
      }, 100);
    }
  }, []);

  // Map through the data and match with columnData array
  const mappedData = data.map((item) => {
    let result = {};
    columnData.forEach((col) => {
      if (col.rowData in item) {
        result[col.title] = item[col.rowData];
      }
    });
    if (item._id) {
      result["_id"] = item._id;
    }
    return result;
  });

  return (
    <>
    <div className="card p-4">
      <table
        id="example"
        className="table table-hover dt-responsive"
        cellSpacing="0"
        width="100%"
      >
        <thead className="table_thead">
          <tr className="tr_row">
            {Navigate == "true" && (
              <th>
                <HiPlus />
              </th>
            )}
            {columnData &&
              columnData.map((header, index) => (
                <th key={index}>{header.title}</th>
              ))}
          </tr>
        </thead>
        <tbody className="table_tbody ">
          {data &&
            mappedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="tr_row">
                {/* Render link with Icon */}
                {Navigate == "true" && (
                  <td>
                    <Link to={`${baseURL}${row._id}`}>
                      <HiPlus />
                    </Link>
                  </td>
                )}

                {columnData &&
                  columnData.map((col, colIndex) => (
                    <td key={colIndex}>{row[col.title]}</td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ListDataTable;
