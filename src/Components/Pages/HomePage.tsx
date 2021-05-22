import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";

import founders from "Content/founders.json";
import ContentCard from "../AtomicComponents/ContentCard";
import MainLayout from "../Layouts/Main";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
      maxWidth: 1000,
    },
    headerContainer: {
      margin: "10px 0 !important",
    },
    logoContainer: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "right",
        paddingRight: "20px",
      },
    },
    logo: {
      height: "187px",
      width: "300px",
    },
    headerTextContainer: {
      flexDirection: "column",
      justifyContent: "center",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
    divider: {
      textAlign: "center",
      margin: "15px 0",
    },
    finePrint: {
      marginTop: "15px",
    },
  })
);

const HomePage = () => {
  const classes = useStyles();

  return (
    true && (
      <MainLayout homeIcon={true}>
        <div className={classes.root}>
          <Grid container spacing={1} className={classes.headerContainer}>
            <Grid item xs={12} md={6} className={classes.logoContainer}>
              <img className={classes.logo} src="/photos/ms_logo.png"></img>
            </Grid>
            <Grid item xs={12} md={6} className={classes.headerTextContainer}>
              <Typography variant="h1">Mount Sinai Health</Typography>
              <div>
                <Typography variant="h2">
                  Diamond Jubilee Geocaching Celebration
                </Typography>
              </div>
              <div>
                <Typography variant="body1">
                  Celebrate Our Diamond Jubilee by learning more about Our
                  Founders
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle2">
                  Find geocaches honouring our founders throughout Toronto,
                  Creemore, Belleville and Barrie!
                </Typography>
              </div>
            </Grid>
          </Grid>
          <div className={classes.divider}></div>
          <Grid container spacing={1}>
            {founders.map((founder, i) => {
              return (
                <Grid item xs={6} md={4}>
                  <ContentCard
                    heading={founder.name}
                    description={founder.description}
                    imageURL={founder.headshot}
                    link={`/founder/${i}`}
                  ></ContentCard>
                </Grid>
              );
            })}
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
    )
  );
};

export default HomePage;
