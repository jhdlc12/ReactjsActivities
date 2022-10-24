import React from "react";

const BulletinBoard = (props) => {
  console.log(!props.category);
  return (
    <div>
      <h3 style={{ display: !props.id && "none" }}>ID: {props.id}</h3>
      <h3 style={{ display: !props.category && "none" }}>
        Category: {props.category}
      </h3>
      <h3 style={{ display: !props.post && "none" }}>Post: {props.post}</h3>
    </div>
  );
};

export default BulletinBoard;
//ctrl c to terminate the terminal
