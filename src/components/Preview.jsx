import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 1100,
    },
    paper: {
      height: "170px",
      margin: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    darkmode: {
      backgroundColor: "black",
      transition: "0.3s",
    },
    ligthmode: {
      backgroundColor: "white",
      transition: "0.5s",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      width: "100%",
    },
  })
);

const Preview = ({ state }) => {
  const classes = useStyles();

  const [openspeedtest, setSpeedtest] = useState(false);
  const [opencours, setCours] = useState(false);
  const [opengraphique, setGraphique] = useState(false);
  const [opennotes, setnotes] = useState(false);

  return (
    <div className={classes.root}>
      <h3>Prévisualisation</h3>
      <Card className={state.darkmode ? classes.darkmode : classes.ligthmode}>
        <CardContent style={{ minHeight: "40vh", display: "flex" }}>
          <Grid container direction="row" alignItems="center">
            {state.speedtest && (
              <Grid item xs={6} sm={3}>
                <Paper
                  className={classes.paper}
                  onClick={() => setSpeedtest(true)}
                >
                  <img
                    alt=""
                    src="https://www.universfreebox.com/UserFiles/image/perf.JPG"
                    width="100%"
                    height="100%"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrYKexA5OuvFxIuONCB8rIzjeAW04ZGJNMQ&usqp=CAU"
                    alt=""
                    width="100%"
                    height="100%"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrYKexA5OuvFxIuONCB8rIzjeAW04ZGJNMQ&usqp=CAU"
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
                    width="100%"
                    height="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF8J4kb4scACPE88tvEGMDmDSPRMoWjOveA&usqp=CAU"
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
                    width="550px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF8J4kb4scACPE88tvEGMDmDSPRMoWjOveA&usqp=CAU"
                  />
                </Modal>
              </Grid>
            )}

            {state.graphique && (
              <Grid item xs={3}>
                <Paper
                  className={classes.paper}
                  onClick={() => setGraphique(true)}
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/07/20/56/graph-3068300_1280.jpg"
                    alt=""
                    width="100%"
                    height="100%"
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
                    src="https://cdn.pixabay.com/photo/2018/01/07/20/56/graph-3068300_1280.jpg"
                    alt=""
                    width="550px"
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
