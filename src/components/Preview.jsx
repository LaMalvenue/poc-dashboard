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
    },
    paper: {
      height: "100px",
      textAlign: "center",
    },
    darkmode: {
      backgroundColor: "black",
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

const Preview = ({ state }) => {
  const classes = useStyles();

  const [openspeedtest, setSpeedtest] = useState(false);
  const [opencours, setCours] = useState(false);
  const [opengraphique, setGraphique] = useState(false);
  const [opennotes, setnotes] = useState(false);

  return (
    <div className={classes.root}>
      <h3>Prévisualisation</h3>
      <Card
        className={state.darkmode ? classes.darkmode : null}
        style={{ minHeight: "150px" }}
      >
        <CardContent>
          <Grid container spacing={6}>
            {state.speedtest && (
              <Grid item xs={3}>
                <Paper
                  className={classes.paper}
                  onClick={() => setSpeedtest(true)}
                >
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
                <Paper
                  className={classes.paper}
                  onClick={() => setGraphique(true)}
                >
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
    </div>
  );
};

export default Preview;
