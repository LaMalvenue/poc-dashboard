import React, { useState } from "react";
import "../App.css";
import "fontsource-roboto";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CustomisationCard from "./CustomisationCard";
import BreadCrumb from "./BreadCrumb";
import SiteTitle from "./SiteTitle";
import SideBar from "./SideBar";
import Preview from "./Preview";

const useStyles = makeStyles(() =>
  createStyles({
    siteTitle: {
      textAlign: "center",
      width: "100%",
    },
    container: {
      padding: 0,
      minWidth: "100%",
      height: "100vh",
    },
  })
);

function App() {
  const [state, setState] = useState({
    speedtest: false,
    darkmode: false,
    graphique: false,
    cours: false,
    notes: false,
  });

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <header>
        <SiteTitle />
        <h2 className={classes.siteTitle}>Paramètres</h2>
      </header>
      <SideBar />
      <main>
        <BreadCrumb />
        <CustomisationCard state={state} setState={setState} />
        <Preview state={state} />
      </main>
      <footer>
        <p>&copy; Groupe 3 : Abdel - Anaïs - Armin - Camille</p>
      </footer>
    </Container>
  );
}

export default App;
