import React from "react";
import "../style/BreadCrumb.css";
import { classes } from "istanbul-lib-coverage";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { FormatPaint } from "@material-ui/icons";

const BreadCrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
      <Link color="inherit" href="/" className={`${classes.link} item`}>
        <SettingsIcon className={classes.icon} />
        Paramètres
      </Link>
      <Typography color="textPrimary" className={`${classes.link} item`}>
        <FormatPaint className={classes.icon} />
        Personnaliser l&apos;affichage
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
