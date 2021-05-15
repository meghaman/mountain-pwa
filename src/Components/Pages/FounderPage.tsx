import React from "react";
import { useRouteMatch } from "react-router";

import founders from "Content/founders.json";
import { IMatchedIDFromRoute } from "../../Interfaces/interfaces";
import AnswerTextBox from "../AtomicComponents/AnswerTextBox";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
} from "@material-ui/core";
import MapLeaflet from "..//MapComponents/MapLeaflet";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const FounderPage: React.FC = () => {
  const classes = useStyles();

  const match: IMatchedIDFromRoute = useRouteMatch();
  const id = parseInt(match.params["id"]) || 0;

  const currentFounder = founders[id];

  const correctAnswerHandler = (cacheNumber: number) => {
    console.log(cacheNumber);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {currentFounder.caches.map((cache, i: number) => {
          return (
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <AnswerTextBox
                  cacheNumber={i}
                  correctAnswer={cache.secret}
                  onCorrectAnswer={correctAnswerHandler}
                ></AnswerTextBox>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <MapLeaflet></MapLeaflet>
        </Grid>
      </Grid>
    </div>
  );
};

export default FounderPage;
