import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 1100,
      padding: 15,
    },
    paper: {
      textAlign: "center",
    },
    darkmode: {
      backgroundColor: "black",
    },
    paperModal: {
      position: "absolute",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      border: "none",
      alignItems: "center",
    },
  })
);

const Preview = ({ state }) => {
  const [openSpeedtest, setOpenSpeedtest] = useState(false);
  const [openGraph, setOpenGraph] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);

  const classes = useStyles();

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

  return (
    <div className={classes.root}>
      <h3>Prévisualisation</h3>
      <Card
        className={state.darkmode ? classes.darkmode : null}
        style={{ minHeight: "150px" }}
      >
        <CardContent className={classes.paper}>
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
                <Paper className={classes.paper} onClick={handleOpenNotes}>
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
    </div>
  );
};

export default Preview;
