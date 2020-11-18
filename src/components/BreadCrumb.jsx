import React from "react";
import { classes } from "istanbul-lib-coverage";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { FormatPaint } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  breadcrumb: {
    padding: "15px",
    display: "flex",
    alignItems: "center",
  },
  item: {
    display: "flex",
    padding: "5px",
  },
}));

const BreadCrumb = () => {
  const classesCustom = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classesCustom.breadcrumb}>
      <Link
        color="inherit"
        href="/"
        className={(classes.link, classesCustom.item)}
      >
        <SettingsIcon className={classes.icon} />
        Paramètres
      </Link>
      <Typography
        color="textPrimary"
        className={(classes.link, classesCustom.item)}
      >
        <FormatPaint className={classes.icon} />
        Personnaliser l&apos;affichage
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
