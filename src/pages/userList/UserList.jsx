import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";

export default function UserList() {
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
  ];

  const rows = [
    {
      id: 1,
      username: "John",
      avatar:
        "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        email: "jon@email.com",
        status: "active",
        transactions: "$180.00",
    },
    {
      id: 2,
      username: "Joseph",
      avatar:
        "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        email: "joseph@email.com",
        status: "active",
        transactions: "$220.00",
    },
    {
      id: 3,
      username: "Antony",
      avatar:
        "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        email: "antony@email.com",
        status: "active",
        transactions: "$360.00",
    },
    {
      id: 4,
      username: "Oliver",
      avatar:
        "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        email: "oliver@email.com",
        status: "active",
        transactions: "$950.00",
    },
    {
      id: 5,
      username: "Mac",
      avatar:
        "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        email: "mac@email.com",
        status: "active",
        transactions: "$873.00",
    },
    {
      id: 6,
      username: "Joe",
      avatar:
        "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        email: "joe@email.com",
        status: "active",
        transactions: "$672.00",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
