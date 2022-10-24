import { display } from "@mui/system";
import React from "react";

function Greetings(props) {
  let d = new Date();
  let time = d.getHours();
  // let time = 10;
  if (time > 5 && time < 12) {
    return (
      <div>
        <p style={{ color: "white" }}>Good Morning</p>
        {props.firstName + " " + props.lastName}
      </div>
    );
  } else if (time >= 12 && time <= 18) {
    return (
      <div sx={{ display: "flex" }}>
        <p style={{ color: "white" }}>
          Good Afternoon, {props.firstName + " " + props.lastName}
        </p>
      </div>
    );
  } else if (time > 18 && time <= 23) {
    return (
      <div>
        <p style={{ color: "black" }}>Good Evening, </p>
      </div>
    );
  } else {
    return (
      <div>
        <h2 style={{ color: "white" }}>Sweet Dreams</h2>
      </div>
    );
  }
}
export default Greetings;
