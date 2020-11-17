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
    paperModal: {
      position: 'absolute',
      width: '100%',
      display: "flex",
      justifyContent: "center",
      border: 'none',
      alignItems: "center",
    },
  })
);

const UserCard = () => {
  const [openDarkMode, setOpenDarkMode] = useState(false);
  const [openSpeedtest, setOpenSpeedtest] = useState(false);
  const [openGraph, setOpenGraph] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);

  const classes = useStyles();
  const [state, setState] = useState({
    speedtest: false,
    darkmode: false,
    graphique: false,
    cours: false,
    notes: false,
  });

  const handleOpenDarkMode = () => {
    setOpenDarkMode(true);
  };
  const handleOpenSpeedtest = () => {
    setOpenSpeedtest(true);
  };
  const handleOpenGraph = () => {
    setOpenGraph(true);
  };
  const handleOpenCourse = () => {
    setOpenCourse(true);
  };
  const handleOpenNotes = () => {
    setOpenNotes(true);
  };

  const handleCloseDarkMode = () => {
    setOpenDarkMode(false);
  };
  const handleCloseSpeedtest = () => {
    setOpenSpeedtest(false);
  };
  const handleCloseGraph = () => {
    setOpenGraph(false);
  };
  const handleCloseCourse = () => {
    setOpenCourse(false);
  };
  const handleCloseNotes = () => {
    setOpenNotes(false);
  };

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

      <Card className={state.darkmode ? classes.darkmode : null}>
        <CardContent>
          <Grid container spacing={6}>
            {state.speedtest && (
              <Grid item xs={3}>
                <Paper className={classes.paper} onClick={handleOpenSpeedtest}>
                  <img
                    alt=""
                    src="https://www.universfreebox.com/UserFiles/image/perf.JPG"
                    width="150px"
                    height="80px"
                  />
                </Paper>
                <Modal
                  className={classes.paperModal}
                  open={openSpeedtest}
                  onClose={handleCloseSpeedtest}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  >
                  <img
                    alt=""
                    src="https://www.universfreebox.com/UserFiles/image/perf.JPG"
                  />
                </Modal>
              </Grid>
            )}

            {state.graphique && (
              <Grid item xs={3}>
                <Paper onClick={handleOpenGraph}>
                  <img
                    src="https://s3.amazonaws.com/assets.fullstack.io/n/20200309095518221_react-chartjs.png"
                    width="150px"
                    height="80px"
                    alt=""
                  />
                </Paper>
                <Modal
                  className={classes.paperModal}
                  open={openGraph}
                  onClose={handleCloseGraph}
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

            {state.notes && (
              <Grid item xs={3}>
                <Paper className={classes.paper} onClick={handleOpenNotes} >
                  <img
                    src="https://www.seankennedyportfolio.com/images/notes1.PNG"
                    alt=""
                    width="150px"
                    height="80px"
                  />
                </Paper>
                <Modal
                  className={classes.paperModal}
                  open={openNotes}
                  onClose={handleCloseNotes}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <img
                    src="https://www.seankennedyportfolio.com/images/notes1.PNG"
                    alt=""
                  />
                </Modal>
              </Grid>
            )}

            {state.cours && (
              <Grid item xs={3}>
                <Paper className={classes.paper} onClick={handleOpenCourse}>
                  <img
                    alt=""
                    src=" https://static.infragistics.com/marketing/Website/products/ignite/controls/scheduling/schedule/igniteui-scheduling-main-s.png?v=201706200900"
                    width="150px"
                    height="80px"
                  />
                </Paper>
                <Modal
                  className={classes.paperModal}
                  open={openCourse}
                  onClose={handleCloseCourse}
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
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;
