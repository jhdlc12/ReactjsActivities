import React from "react";
// import "./ChoreTable.css";

const ChoreTable = (props) => {
  let propData = props.data;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table className="table table-info">
        <thead>
          <tr>
            <th>Chore Name</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        {propData.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.desc}</td>
            <td>{data.date}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ChoreTable;
