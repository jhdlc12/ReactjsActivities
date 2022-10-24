import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Greetings from "./Greetings";
import ChoreForms from "./ChoreForms";

import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.a`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
margin: 1rem;
positon: relative;
&:hover, &:focus{
  color:yellow;};
  &:active {
    color:red;
  }
}`;
let Header = () => {
  let d = new Date();
  let currentTime = d.toTimeString();
  let fName = "John";
  let lName = "Dela cruz";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Company ABC
            {/* <div>{<Greetings firstName={fName} lastName={lName} />}</div>
            <div style={{ width: "250px" }}>{currentTime}</div> */}
            <NavList>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/AboutUs">About Us</StyledLink>
              <StyledLink to="/Activity">Activity</StyledLink>
              <StyledLink to="/Portfolio">Portfolio</StyledLink>
              <StyledLink to="/Hook">Hook</StyledLink>
              <StyledLink to="/ChoreForms">Chore Form</StyledLink>
              <StyledLink to="/ContactUs">Contact Us</StyledLink>
              <StyledLink to="/MyCodingJournal">Journal</StyledLink>
            </NavList>
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
