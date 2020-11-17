import React from "react";
import "../style/SiteTitle.css";
import "fontsource-roboto";
import logo from "../images/happy.svg";

const SiteTitle = () => {
  return (
    <div className="siteTitle">
      <img src={logo} alt="logo" className="logo" />
      <h1>Agileo</h1>
    </div>
  );
};

export default SiteTitle;
