import React, { useEffect } from "react";
import { useState } from "react";
import ChoreTable from "./ChoreTable";


let choreList = localStorage.getItem("chores")
  ? JSON.parse(localStorage.getItem("chores"))
  : [];
const ChoreForms = () => {
  const [choreName, setName] = useState("");
  const [choreDesc, setChoreDesc] = useState("");
  const [choreDate, setChoreDate] = useState("");
  const [choreData, setChoreData] = useState(choreList);

  const handleSubmit = (e) => {
    e.preventDefault();
    let choreLog = {
      name: choreName,
      desc: choreDesc,
      date: choreDate,
    };
    setChoreData([...choreData, choreLog]);
  };
  useEffect(
    () => localStorage.setItem("chores", JSON.stringify(choreData)),
    [choreData]
  );

  function clearLocalStorage() {
    localStorage.clear();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Chore Form</h2>
        <label>Chore Name</label>
        <br></br>
        <input
          type="text"
          name="choreName"
          value={choreName}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <label>Description</label>
        <br></br>
        <input
          type="text"
          name="choreDesc"
          value={choreDesc}
          onChange={(e) => setChoreDesc(e.target.value)}
        ></input>

        <br></br>
        <label> Date</label>
        <br></br>
        <input
          type="date"
          name="choreDate"
          value={choreDate}
          onChange={(e) => setChoreDate(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <h2>Chore Table</h2>
      <ChoreTable data={choreData} />
      {/* <ul>
        {choreData.map((x, index) => (
          <li key={index}>
            {x.choreName}
            <br />
            {x.choreDesc}
            <br />
            {x.choreDate}
          </li>
        ))}
      </ul> */}

      <button type="button" onClick={clearLocalStorage}>
        Clear
      </button>
    </div>
  );
};

export default ChoreForms;
