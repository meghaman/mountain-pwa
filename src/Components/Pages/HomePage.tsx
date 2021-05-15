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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
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
  })
);

const HomePage = () => {
  const classes = useStyles();

  return (
    true && (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} className={classes.logoContainer}>
            <img className={classes.logo} src="/photos/ms_logo.png"></img>
          </Grid>
          <Grid item xs={12} md={6} className={classes.headerTextContainer}>
            <Typography variant="h1">Mount Sinai Health</Typography>
            <div>
              <Typography variant="h2">Diamond Jubilee Celebration</Typography>
            </div>
            <div>
              <Typography variant="body1">Body Text</Typography>
            </div>
          </Grid>
        </Grid>
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
      </div>
    )
  );
};

export default HomePage;
