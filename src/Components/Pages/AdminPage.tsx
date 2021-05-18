import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

import MainLayout from "../Layouts/Main";
import MapLeaflet from "../MapComponents/MapLeaflet";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
  })
);

const AdminPage: React.FC = () => {
  const classes = useStyles();

  return (
    <MainLayout toolbarText="Back" toolbarURL="/">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MapLeaflet
              center={{
                lat: 44.25045785706793,
                lng: -80.1085702115981,
              }}
              displayCoordinates={true}
            ></MapLeaflet>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
};

export default AdminPage;
