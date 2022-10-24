import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Activity from "./Activity";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "./Portfolio";
import GitHub from "./GitHub";
import Hook from "../components/Hook";
import ChoreForms from "../components/ChoreForms";
import ContactUs from "./ContactUs";
import MyCodingJournal from "./MyCodingJournal";

const Index = () => {
  return (
    <Router>
      <Header />
      <Routes
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContents: "space-between",
        }}
      >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Activity" element={<Activity />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/GitHub" element={<GitHub />} />
        <Route exact path="/Hook" element={<Hook />} />
        <Route exact path="/ChoreForms" element={<ChoreForms />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/MyCodingJournal" element={<MyCodingJournal />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Index;
