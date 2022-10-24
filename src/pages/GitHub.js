import React from "react";
import profile from "./image/th.png";
import "./GitHub.css";

const GitHub = () => {
  return (
    <div className="container">
      <div>
        <h1>Hi! Im Juan Dela cruz</h1>
        <h2>A Front-end Web Developer</h2>
      </div>
      <div>
        <img src={profile} />
      </div>
    </div>
  );
};

export default GitHub;
