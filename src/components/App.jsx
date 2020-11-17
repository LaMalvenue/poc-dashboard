import React, { useState } from "react";
import "../style/App.css";
import "fontsource-roboto";
import Container from "@material-ui/core/Container";
import CustomisationCard from "./CustomisationCard";
import BreadCrumb from "./BreadCrumb";
import SiteTitle from "./SiteTitle";
import SideBar from "./SideBar";
import Preview from "./Preview";

function App() {
  const [state, setState] = useState({
    speedtest: false,
    darkmode: false,
    graphique: false,
    cours: false,
    notes: false,
  });

  return (
    <Container id="container">
      <header>
        <SiteTitle />
        <h2 className="pageTitle">Dashboard</h2>
      </header>
      <main>
        <SideBar />
        <BreadCrumb />
        <CustomisationCard state={state} setState={setState} />
      </main>
      <Preview state={state} />
      <footer>
        <p>&copy; 2020 Wild Code School - Groupe 3</p>
      </footer>
    </Container>
  );
}

export default App;
