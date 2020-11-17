import React from "react";
import "../style/BreadCrumb.css";
import { classes } from "istanbul-lib-coverage";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";

const BreadCrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
      <Link color="inherit" href="/" className={`${classes.link} item`}>
        <HomeIcon className={classes.icon} />
        Accueil
      </Link>
      <Link color="inherit" href="/" className={`${classes.link} item`}>
        <SchoolIcon className={classes.icon} />
        Ma classe
      </Link>
      <Link color="inherit" href="/" className={`${classes.link} item`}>
        <PersonIcon className={classes.icon} />
        Mon profil
      </Link>
      <Typography color="textPrimary" className={`${classes.link} item`}>
        <SettingsIcon className={classes.icon} />
        Personnaliser
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
