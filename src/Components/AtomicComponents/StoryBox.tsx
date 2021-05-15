import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "10px 0 !important",
    },
    imageContainer: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        paddingRight: "20px",
      },
    },
    image: {
      height: "187px",
      width: "300px",
    },
    textContainer: {
      flexDirection: "column",
      justifyContent: "top",
      display: "flex",
      maxWidth: 600,
      textAlign: "left",
    },
  })
);

interface IProps {
  heading: string;
  description: string;
  imageURL: string;
}

const StoryBox: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid item xs={12} md={4} className={classes.imageContainer}>
        <img className={classes.image} src={props.imageURL}></img>
      </Grid>
      <Grid item xs={12} md={8} className={classes.textContainer}>
        <Typography variant="h6">{props.heading}</Typography>
        <div>
          <Typography variant="body2">{props.description}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default StoryBox;
