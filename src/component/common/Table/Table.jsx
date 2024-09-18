import React from "react";
import "./Table.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Table = ({ data, columns }) => {
  return (
    <>
      <div className="card p-2 px-3" style={{ height: "90dvh" }}>
        <DataGrid
          rows={data}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </div>
    </>
  );
};

export default Table;
