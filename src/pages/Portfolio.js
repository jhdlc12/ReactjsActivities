import React from "react";
import "./Portfolio.css";
import profile from "./image/th.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.a`
  text-decoration: none;
`;

const Portfolio = () => {
  return (
    <div className="container">
      <div className="cards">
        <div class="image">
          <img src={profile} />
        </div>
        <div className="primText">
          <h3>Title goes here</h3>
          <p>Secondary text</p>
        </div>
        <div className="suppText">
          <small>
            Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </small>
        </div>
        <NavList>
          <Link to="/GitHub"> GitHub </Link>
        </NavList>
        <div>
          <a href="https://www.google.com/">Link</a>
        </div>
      </div>
      <div className="cards">
        <div class="image">
          <img src={profile} />
        </div>
        <div className="primText">
          <h3>Title goes here</h3>
          <p>Secondary text</p>
        </div>
        <div className="suppText">
          <small>
            Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </small>
        </div>
        <NavList>
          <Link to="/GitHub"> GitHub </Link>
        </NavList>
      </div>
      <div className="cards">
        <div class="image">
          <img src={profile} />
        </div>
        <div className="primText">
          <h3>Title goes here</h3>
          <p>Secondary text</p>
        </div>
        <div className="suppText">
          <small>
            Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </small>
        </div>
        <a href="https://google.com" />
      </div>
    </div>
  );
};

export default Portfolio;
