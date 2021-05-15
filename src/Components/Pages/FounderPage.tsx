import React, { useState } from "react";
import { useRouteMatch } from "react-router";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
} from "@material-ui/core";

import founders from "Content/founders.json";
import { IMatchedIDFromRoute } from "../../Interfaces/interfaces";
import AnswerTextBox from "../AtomicComponents/AnswerTextBox";
import MapLeaflet from "../MapComponents/MapLeaflet";
import StoryBox from "../AtomicComponents/StoryBox";
import { Marker, Popup } from "react-leaflet";

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
  const [currentAnswer, setCurrentAnswer] = useState(-1);

  const match: IMatchedIDFromRoute = useRouteMatch();
  const id = parseInt(match.params["id"]) || 0;

  const currentFounder = founders[id];

  const handleCorrectAnswer = (answer: number) => {
    if (answer > currentAnswer) setCurrentAnswer(answer);
  };

  const RenderStoryBox = (cacheNumber: number) => {
    if (cacheNumber > currentAnswer) return;

    return (
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <StoryBox></StoryBox>
        </Paper>
      </Grid>
    );
  };

  const RenderCacheMarkers = (cache, cacheNumber: number) => {
    if (cacheNumber > currentAnswer + 1) return;

    return (
      <Marker
        position={{ lat: cache.latitude, lng: cache.longitude }}
        opacity={cacheNumber === currentAnswer + 1 ? 1 : 0.5}
      >
        <Popup>{`Cache #${cacheNumber + 1}`}</Popup>
      </Marker>
    );
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
                  onCorrectAnswer={handleCorrectAnswer}
                ></AnswerTextBox>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <MapLeaflet
            center={{
              lat: currentFounder.center?.latitude,
              lng: currentFounder.center?.longitude,
            }}
          >
            {currentFounder.caches.map((cache, i: number) => {
              return RenderCacheMarkers(cache, i);
            })}
          </MapLeaflet>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {currentFounder.caches.map((cache, i: number) => {
          return RenderStoryBox(i);
        })}
      </Grid>
    </div>
  );
};

export default FounderPage;
