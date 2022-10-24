import React from "react";

const MyJournalTable = ({ infoList, handleRemove, handleUpdateThoughts }) => {
  return (
    <div>
      <table className="table">
        <thead style={{ backgroundColor: "#1976D2" }}>
          <tr>
            <th style={{ color: "white" }}>Thoughts for the day</th>
            <th style={{ color: "white" }}>Action</th>
          </tr>
        </thead>
        {infoList.map((x) => (
          <tr>
            <td>
              Date: {x.date}
              <br></br>
              {x.message}
            </td>
            <td>
              <button type="button" id={x.id} onClick={handleRemove}>
                clear
              </button>
              <button type="button" id={x.id} onClick={handleUpdateThoughts}>
                Update
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MyJournalTable;
