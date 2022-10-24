import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PersonnelList from "./PersonnelList";

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function PersonnelTable() {
  <PersonnelList />;
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, bgcolor: "#282c34" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "white" }}>Id No.</TableCell>
            <TableCell style={{ color: "white" }} align="center">
              First Name
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Last Name
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PersonnelList.map((row) => (
            <TableRow
              key={row.IDno}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                bgcolor: "#282c34",
              }}
            >
              <TableCell style={{ color: "white" }} component="th" scope="row">
                {row.IDno}
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                {row.firstName}
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                {row.lastName}
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                {row.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
