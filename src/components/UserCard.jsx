import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { CardHeader, Divider } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 1100,
    },
    paper: {
      height: "100px",
      textAlign: "center",
    },
    darkmode: {
      backgroundColor: "black",
    },
  })
);

const UserCard = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    speedtest: false,
    darkmode: false,
    graphique: false,
    cours: false,
    notes: false,
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.checked });
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              alt="Mireille Matthieu avatar"
              src="https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"
              className={classes.large}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Julie Fabre"
          subheader="Formation Développeur web en alternance (Lyon)"
        />
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
          <Button variant="contained" color="primary" className="button">
            Valider
          </Button>
        </CardContent>
      </Card>
      <Divider light />
    </>
  );
};

export default UserCard;
