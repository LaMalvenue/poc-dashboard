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
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 1600,
      border: '2px solid #646464',

    }
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

  const [openspeedtest, setSpeedtest] = useState(false);
  const [opencours, setCours] = useState(false);
  const [opengraphique, setGraphique] = useState(false);
  const [opennotes, setnotes] = useState(false);



  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              alt="Mireille Matthieu avatar"
              src="https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg"

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

      <Card className={state.darkmode ? classes.darkmode : null} style={{ minHeight: "200px" }}>
        <CardContent>
          <Grid container spacing={6}>
            {state.speedtest && (
              <Grid item xs={3}>
                <Paper className={classes.paper} onClick={() => setSpeedtest(true)}>
                  <img
                    alt=""
                    src="https://www.universfreebox.com/UserFiles/image/perf.JPG"
                    width="150px"
                    height="80px"
                  />
                </Paper>
                <Modal
                  className={classes.modal}
                  open={openspeedtest}
                  onClose={() => setSpeedtest(false)}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <img
                    alt=""
                    src="https://pbs.twimg.com/media/D6D91h7W0AM4YXs.jpg"
                    width="550px"
                  />
                </Modal>
              </Grid>
            )}
            {state.notes && (
              <Grid item xs={3}>
                <Paper className={classes.paper} onClick={() => setnotes(true)}>
                  <img
                    src="https://www.seankennedyportfolio.com/images/notes1.PNG"
                    alt=""
                    width="150px"
                    height="80px"
                  />
                </Paper>
                <Modal
                  className={classes.modal}
                  open={opennotes}
                  onClose={() => setnotes(false)}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <img
                    alt=""
                    src="https://www.seankennedyportfolio.com/images/notes1.PNG"
                    width="550px"
                  />
                </Modal>
              </Grid>
            )}
            {state.cours && (
              <Grid item xs={3}>
                <Paper className={classes.paper} onClick={() => setCours(true)}>
                  <img
                    alt=""
                    width="150px"
                    height="80px"
                    src=" https://static.infragistics.com/marketing/Website/products/ignite/controls/scheduling/schedule/igniteui-scheduling-main-s.png?v=201706200900"
                  />
                </Paper>
                <Modal
                  className={classes.modal}
                  open={opencours}
                  onClose={() => setCours(false)}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <img
                    alt=""
                    src=" https://static.infragistics.com/marketing/Website/products/ignite/controls/scheduling/schedule/igniteui-scheduling-main-s.png?v=201706200900"
                  />
                </Modal>
              </Grid>
            )}


            {state.graphique && (
              <Grid item xs={3}>
                <Paper className={classes.paper} onClick={() => setGraphique(true)}>
                  <img
                    src="https://s3.amazonaws.com/assets.fullstack.io/n/20200309095518221_react-chartjs.png"
                    alt=""
                    width="150px"
                    height="80px"
                  />
                </Paper>
                <Modal
                  className={classes.modal}
                  open={opengraphique}
                  onClose={() => setGraphique(false)}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <img
                    src="https://s3.amazonaws.com/assets.fullstack.io/n/20200309095518221_react-chartjs.png"

                    alt=""
                  />
                </Modal>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;
