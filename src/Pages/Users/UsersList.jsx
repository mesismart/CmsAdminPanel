import React, { useState } from "react";
import { userRows } from "../../datas";

import { DataGrid } from "@mui/x-data-grid";
// import Box from "@mui/material/Box";

export default function UsersList() {
  const [userDatas, SetUserDatas] = useState(userRows);

  const colums = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "avatar", headerName: "Avatar", width: 70 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "status", headerName: "Status ", width: 200 },
    { field: "transactions", headerName: "Transactions", width: 200 },
  ];

  return (
    <div className="w-3/4">
      <DataGrid
        rows={userRows}
        columns={colums}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
