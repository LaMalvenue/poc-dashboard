import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 1100,
      padding: 15,
      minHeight: 250,
    },
    paper: {
      textAlign: "center",
    },
    darkmode: {
      backgroundColor: "black",
    },
  })
);

const Preview = ({ state }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Prévisualisation</h3>
      <Card className={state.darkmode ? classes.darkmode : null}>
        <CardContent className={classes.paper}>
          <Grid container spacing={6}>
            {state.speedtest && (
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <img
                    alt=""
                    src="https://www.universfreebox.com/UserFiles/image/perf.JPG"
                    width="150px"
                    height="80px"
                  />
                </Paper>
              </Grid>
            )}
            {state.graphique && (
              <Grid item xs={3}>
                <Paper>
                  <img
                    src="https://s3.amazonaws.com/assets.fullstack.io/n/20200309095518221_react-chartjs.png"
                    width="150px"
                    height="80px"
                    alt=""
                  />
                </Paper>
              </Grid>
            )}
            {state.notes && (
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <img
                    src="https://www.seankennedyportfolio.com/images/notes1.PNG"
                    alt=""
                    width="150px"
                    height="80px"
                  />
                </Paper>
              </Grid>
            )}
            {state.cours && (
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <img
                    alt=""
                    src=" https://static.infragistics.com/marketing/Website/products/ignite/controls/scheduling/schedule/igniteui-scheduling-main-s.png?v=201706200900"
                    width="150px"
                    height="80px"
                  />
                </Paper>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Preview;
