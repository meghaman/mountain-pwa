import React, { useState } from "react";
import { useRouteMatch } from "react-router";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import founders from "Content/founders.json";
import { IMatchedIDFromRoute } from "../../Interfaces/interfaces";
import AnswerTextBox from "../AtomicComponents/AnswerTextBox";
import MapLeaflet from "../MapComponents/MapLeaflet";
import StoryBox from "../AtomicComponents/StoryBox";
import { Marker, Popup } from "react-leaflet";
import MainLayout from "../Layouts/Main";
import L from "leaflet";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
      maxWidth: 1000,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const chestIcon = new L.Icon({
  iconUrl: "/photos/chest_icon.png",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 25],
});

const FounderPage: React.FC = () => {
  const classes = useStyles();
  const [currentAnswer, setCurrentAnswer] = useState(-1);

  const match: IMatchedIDFromRoute = useRouteMatch();
  const id = parseInt(match.params["id"]) || 0;

  const currentFounder = founders[id];

  const handleCorrectAnswer = (answer: number) => {
    if (answer > currentAnswer) setCurrentAnswer(answer);
  };

  const RenderStoryBox = (cache: any, cacheNumber: number) => {
    if (cacheNumber > currentAnswer) return;

    return (
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <StoryBox
            heading={cache.headline}
            description={cache.story}
            imageURL={cache.photo}
          ></StoryBox>
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
        icon={chestIcon}
      >
        <Popup>{`Cache #${cacheNumber + 1}`}</Popup>
      </Marker>
    );
  };

  return (
    <MainLayout toolbarText="Back" toolbarURL="/">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <StoryBox
                heading={currentFounder.name}
                description={currentFounder.long_description}
                imageURL={currentFounder.headshot}
                disclaimer={currentFounder.disclaimer || undefined}
              ></StoryBox>
            </Paper>
          </Grid>
        </Grid>
        {currentAnswer >= 0 && (
          <Grid container spacing={1}>
            {currentFounder.caches.map((cache, i: number) => {
              return RenderStoryBox(cache, i);
            })}
          </Grid>
        )}
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
                  {cache.hint && (
                    <Typography variant="subtitle2">
                      Hint: {cache.hint}
                    </Typography>
                  )}
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
        <Grid container spacing={1} className={classes.finePrint}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    "&copy; 2019 Mount Sinai Hospital. All rights reserved.",
                }}
              ></span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
};

export default FounderPage;
