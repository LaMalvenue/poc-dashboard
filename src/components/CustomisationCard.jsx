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
      margin: "35px 0 0 0",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      width: 1600,
      border: "2px solid #646464",
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
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="darkmode"
                size="medium"
                checked={state.darkmode}
                onChange={handleChange}
              />
            }
            label="Passer en mode sombre"
          />
        </div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="speedtest"
                size="medium"
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
                name="notes"
                size="medium"
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
                size="medium"
                name="cours"
                checked={state.cours}
                onChange={handleChange}
              />
            }
            label="Afficher la liste des prochains cours"
          />
          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="graphique"
                size="medium"
                checked={state.graphique}
                onChange={handleChange}
              />
            }
            label="Afficher les graphiques"
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
