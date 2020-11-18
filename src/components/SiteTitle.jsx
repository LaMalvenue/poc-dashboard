import React from "react";
import "fontsource-roboto";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import logo from "../images/happy.svg";

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      maxHeight: "60px",
      margin: "0 14px",
    },
    siteTitle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  })
);

const SiteTitle = () => {
  const classes = useStyles();
  return (
    <div className={classes.siteTitle}>
      <img src={logo} alt="logo" className={classes.logo} />
      <h1>Agileo</h1>
    </div>
  );
};

export default SiteTitle;
