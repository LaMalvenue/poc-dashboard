import React from "react";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 1100,
    },
  })
);

const UserCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormGroup>
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Activer SpeedTest"
          />
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Passer en mode sombre"
          />
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Afficher les graphiques"
          />
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Afficher les dernières notes"
          />
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Afficher la liste des prochains cours"
          />
        </FormGroup>
        <Button variant="contained" color="primary" className="button">
          Valider
        </Button>
      </CardContent>

      <CardContent>hello</CardContent>
    </Card>
  );
};

export default UserCard;
