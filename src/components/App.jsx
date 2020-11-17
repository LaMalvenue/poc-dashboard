import React from "react";
import "../style/App.css";
import "fontsource-roboto";
import Container from "@material-ui/core/Container";
import UserCard from "./UserCard";
import BreadCrumb from "./BreadCrumb";
import SiteTitle from "./SiteTitle";
import SideBar from "./SideBar";

function App() {
  return (
    <Container id="container">
      <header>
        <SiteTitle />
        <h2 className="pageTitle">Dashboard</h2>
      </header>
      <main>
        <SideBar />
        <BreadCrumb />
        <UserCard />
      </main>
      <footer>
        <p>&copy; 2020 Wild Code School - Groupe 3</p>
      </footer>
    </Container>
  );
}

export default App;
