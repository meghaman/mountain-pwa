import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, SvgIcon } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": 2,
      overflow: "hidden",
      overflowWrap: "break-word",
      lineHeight: "1.5rem",
    },
    defaultToolbarContainer: {
      justifyContent: "center",
      display: "grid",
      width: "100%",
      padding: theme.spacing(1, 0),
      marginTop: "5px !important",
    },
    defaultToolbarContent: {
      flexDirection: "column",
      justifyContent: "center",
      display: "flex",
    },
    homeLink: {
      textDecoration: "none",
      paddingLeft: "5px",
    },
  })
);

const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

const DefaultToolbar: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.defaultToolbarContainer}>
      <Grid container>
        <Grid item>
          <HomeIcon color="primary" />
        </Grid>
        <Grid item className={classes.defaultToolbarContent}>
          <Typography
            className={classes.title}
            variant="h6"
            data-cy="batch-detail-header"
          >
            <a
              href="https://www.mountsinai.on.ca/"
              className={classes.homeLink}
            >
              Go Back To Mount Sinai
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DefaultToolbar;
