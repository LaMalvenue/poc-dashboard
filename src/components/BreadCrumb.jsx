import React from "react";
import "../style/BreadCrumb.css";
import { classes } from "istanbul-lib-coverage";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";

const BreadCrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
      <Link color="inherit" href="/" className={`${classes.link} item`}>
        <PersonIcon className={classes.icon} />
        Paramètres
      </Link>
      <Typography color="textPrimary" className={`${classes.link} item`}>
        <SettingsIcon className={classes.icon} />
        Personnaliser l&apos;apparence
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
