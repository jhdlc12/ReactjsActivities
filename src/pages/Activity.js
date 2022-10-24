import React from "react";
import PersonnelTable from "../components/PersonnelTable";

import ExpenseTracker from "../components/ExpenseTracker";
const Activity = () => {
  return (
    <div>
      <PersonnelTable />

      {/* <p className="aqua">The current time is {currentTime}</p> */}
      <ExpenseTracker />
    </div>
  );
};

export default Activity;
