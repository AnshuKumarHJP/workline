import React from "react";
import "./Table.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import WL_Comp from "../WL_Comp/WL_Comp";

const Table = ({ data, columns }) => {
  return (
    <>
      <WL_Comp.WL_Div>
        <div style={{ height: "90dvh" }}>
          <DataGrid
            rows={data}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            getRowId={(row) => row._id}
          />
        </div>
      </WL_Comp.WL_Div>
    </>
  );
};

export default Table;
