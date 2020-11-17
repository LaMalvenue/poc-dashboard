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
      padding: 15,
    },
    paper: {
      height: "100px",
      textAlign: "center",
    },
    darkmode: {
      backgroundColor: "black",
    },
    button: {
      margin: "35px 0",
    },
  })
);

const CustomisationCard = ({ state, setState }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.checked });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="speedtest"
                checked={state.speedtest}
                onChange={handleChange}
              />
            }
            label="Activer SpeedTest"
          />
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="darkmode"
                checked={state.darkmode}
                onChange={handleChange}
              />
            }
            label="Passer en mode sombre"
          />
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="graphique"
                checked={state.graphique}
                onChange={handleChange}
              />
            }
            label="Afficher les graphiques"
          />
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="notes"
                checked={state.notes}
                onChange={handleChange}
              />
            }
            label="Afficher les dernières notes"
          />
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="cours"
                checked={state.cours}
                onChange={handleChange}
              />
            }
            label="Afficher la liste des prochains cours"
          />
        </FormGroup>
        <Button variant="contained" color="primary" className={classes.button}>
          Valider
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomisationCard;
