import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline} from '@material-ui/icons';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data,setData] = useState(userRows);

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 180, renderCell: (params) => {
        return (
            <div className='ListUser'>
                <img className='userListImg' src={params.row.avatar} alt="avatarUser" />
                {params.row.username}
            </div>
        )
    } },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      headerName:"Action",
      width: 150,
      renderCell: (params)=> {
        return (
          <>
          <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
         
          <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

 

  return (
    <div className="userList">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
