import React from "react";
import { useRef, useState, useEffect } from "react";
import MyJournalTable from "../components/MyJournalTable";
import MyTaskTable from "../components/MyTaskTable";

let list = localStorage.getItem("JournalThoughts")
  ? JSON.parse(localStorage.getItem("JournalThoughts"))
  : [];
let list2 = localStorage.getItem("JournalTask")
  ? JSON.parse(localStorage.getItem("JournalTask"))
  : [];
const MyCodingJournal = () => {
  let form1DateRef = useRef("");
  let form2DateRef = useRef("");
  let form1MessageRef = useRef("");
  let form2MessageRef = useRef("");
  let [id, setId] = useState(Date.now);
  let [infoList, setInfoList] = useState(list);
  let [infoList2, setInfoList2] = useState(list2);

  const handleSubmitThoughts = (event) => {
    event.preventDefault();
    let info = {
      id: id,
      date: form1DateRef.current.value,
      message: form1MessageRef.current.value,
    };
    let filter = infoList.filter((item) => {
      return item.id === info.id;
    });

    if (filter.length == 0) {
      setInfoList([...infoList, info]);
    } else {
      infoList.forEach((item, index) => {
        if (item.id === info.id) {
          infoList.splice(index, 1, info);
          setInfoList(infoList);
        }
      });
    }

    setId(Date.now);
    form1DateRef.current.value = "";
    form1MessageRef.current.value = "";
  };
  const handleSubmitTask = (event) => {
    event.preventDefault();
    let info = {
      id: id,
      date: form2DateRef.current.value,
      message: form2MessageRef.current.value,
    };
    let filter = infoList2.filter((item) => {
      return item.id === info.id;
    });

    if (filter.length == 0) {
      setInfoList2([...infoList2, info]);
    } else {
      infoList2.forEach((item, index) => {
        if (item.id === info.id) {
          infoList2.splice(index, 1, info);
          setInfoList2(infoList2);
        }
      });
    }

    setId(Date.now);
    form2DateRef.current.value = "";
    form2MessageRef.current.value = "";
  };
  const handleRemove = (e) => {
    let num = parseInt(e.target.id);
    console.log(num);
    let remove = [...infoList].filter((item) => {
      return item.id !== num;
    });
    console.log(remove);
    setInfoList(remove);
  };
  const handleRemoveTask = (e) => {
    let num = parseInt(e.target.id);
    console.log(num);
    let remove = [...infoList2].filter((item) => {
      return item.id !== num;
    });
    console.log(remove);
    setInfoList2(remove);
  };
  const deleteAllToughts = () => {
    let result = window.confirm(
      "Are you sure you want to delete all thoughts?"
    );
    result ? (infoList = []) : (infoList = infoList);
    // // infoList = [];
    setInfoList([]);
  };
  const deleteAllTask = () => {
    let result = window.confirm("Are you sure you want to delete all task?");
    result ? (infoList2 = []) : (infoList2 = infoList2);
    setInfoList2([]);
  };
  const handleUpdateThoughts = (e) => {
    let num = parseInt(e.target.id);
    let updateFiltered = [...infoList].filter((item) => {
      return item.id === num;
    });

    updateFiltered.map((update) => {
      setId(update.id);
      form1DateRef.current.value = update.date;
      form1MessageRef.current.value = update.message;
    });
  };
  const handleUpdateTask = (e) => {
    let num = parseInt(e.target.id);
    let updateFiltered = [...infoList2].filter((item) => {
      return item.id === num;
    });

    updateFiltered.map((update) => {
      setId(update.id);
      form2DateRef.current.value = update.date;
      form2MessageRef.current.value = update.message;
    });
  };

  useEffect(
    () => localStorage.setItem("JournalThoughts", JSON.stringify(infoList)),
    [infoList]
  );
  useEffect(
    () => localStorage.setItem("JournalTask", JSON.stringify(infoList2)),
    [infoList2]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        className="thoughtsForTheDay"
        style={{
          border: "1px solid black",
          width: "40vw",
          margin: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0",
          padding: "10px",
        }}
      >
        <form className="form" onSubmit={handleSubmitThoughts}>
          <label className="mx-2">Date</label>

          <input
            tabIndex={1}
            type="date"
            name="form1Date"
            id="form1Date"
            ref={form1DateRef}
          ></input>
          <br></br>
          <label>
            <h3 style={{ color: "#1976D2" }}>Thought for the day</h3>
          </label>
          <br></br>
          <textarea
            tabIndex={2}
            type="text"
            row={8}
            name="form1Message"
            id="form1Message"
            ref={form1MessageRef}
          ></textarea>
          <br></br>
          <button className="p-2 my-2" type="submit">
            Save
          </button>
        </form>

        <MyJournalTable
          infoList={infoList}
          handleRemove={handleRemove}
          handleUpdateThoughts={handleUpdateThoughts}
        />
        <button className="my-2 p-2" type="button" onClick={deleteAllToughts}>
          Clear All
        </button>
      </div>
      <div
        className="Task"
        style={{
          border: "1px solid black",
          width: "40vw",
          margin: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0",
          padding: "10px",
        }}
      >
        <form
          className="form"
          onSubmit={handleSubmitTask}
          style={{ position: "relative" }}
        >
          <label className="mx-2">Date</label>

          <input
            type="date"
            name="form2Date"
            id="form2Date"
            ref={form2DateRef}
          ></input>
          <br></br>
          <label>
            <h3 style={{ color: "#1976D2" }}>Task</h3>
          </label>
          <br></br>
          <textarea
            type="text"
            row={8}
            name="form2Message"
            id="form2Message"
            ref={form2MessageRef}
          ></textarea>
          <br></br>
          <button className="p-2 my-2" type="submit">
            Save
          </button>
        </form>
        <MyTaskTable
          infoList2={infoList2}
          handleRemoveTask={handleRemoveTask}
          handleUpdateTask={handleUpdateTask}
        />
        <button className="my-2 p-2" type="button" onClick={deleteAllTask}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default MyCodingJournal;
