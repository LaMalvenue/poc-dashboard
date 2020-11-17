import React from "react";
import Button from "@material-ui/core/Button";
import { CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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
