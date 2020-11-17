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
      <Link color="inherit" href="/" className={classes.link}>
        <HomeIcon className={`${classes.icon} icone`} />
        Accueil
      </Link>
      <Link color="inherit" href="/" className={classes.link}>
        <SchoolIcon className={`${classes.icon} icone`} />
        Ma classe
      </Link>
      <Link color="inherit" href="/" className={classes.link}>
        <PersonIcon className={`${classes.icon} icone`} />
        Mon profil
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <SettingsIcon className={`${classes.icon} icone`} />
        Personnaliser
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
