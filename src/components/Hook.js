import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";
import { SettingsRemote } from "@mui/icons-material";
import { ListItemSecondaryAction } from "@mui/material";
const Hook = () => {
  let [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  //timer example
  let [seconds, setSeconds] = useState(0); //for timer
  let [isActive, setIsActive] = useState(false); //for buttons
  let [color, setColor] = useState(""); //for color of timer
  let [username, setUsername] = useState("Hi"); //input example
  let [itemName, setItemName] = useState(""); //input array example
  let [items, setItems] = useState([]);

  useEffect(() => setColor(randomColor), [seconds]);

  let toggle = () => {
    setIsActive(!isActive);
  };
  let reset = () => {
    setSeconds(0);
    setIsActive(false);
  };
  //useEffect always has a second parameter
  //sytax: useEffect accpets two arguments.
  //1st argument is a function, 2nd arg -depedencies(optional)
  //useEffect()
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds != 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount((count = 0));
    }
  }
  let addItems = (e) => {
    e.preventDefault();
    setItems([...items, { id: items.length, nameItem: itemName }]);
    setItemName("");

    // alert(JSON.stringify(items));
  };

  return (
    <div>
      <h2>Hooks Example</h2>
      <h2>List of things</h2>

      <form onSubmit={addItems}>
        <label for="myThings">My things</label>
        <br></br>
        <input
          type="text"
          name="item"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        ></input>
      </form>
      <ul style={{ listStyle: "none" }}>
        {items.map((eva) => (
          <li key={eva.id}>{eva.nameItem}</li>
        ))}
      </ul>
      <h2>{username}</h2>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Timer Example</p>
      <div style={{ color: color, fontSize: "30px" }}>{seconds}</div>
      <div>
        <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Hook;
