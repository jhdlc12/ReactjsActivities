import React from "react";

const MyTaskTable = ({ infoList2, handleRemoveTask, handleUpdateTask }) => {
  return (
    <div>
      <table className="table">
        <thead style={{ backgroundColor: "#1976D2" }}>
          <tr>
            <th style={{ color: "white" }}>Task</th>
            <th style={{ color: "white" }}>Action</th>
          </tr>
        </thead>
        {infoList2.map((x) => (
          <tr>
            <td>
              Date: {x.date}
              <br></br>
              {x.message}
            </td>
            <td>
              <button type="button" id={x.id} onClick={handleRemoveTask}>
                clear
              </button>
              <button type="button" id={x.id} onClick={handleUpdateTask}>
                Update
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MyTaskTable;
