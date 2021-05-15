import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActions, Button, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      [theme.breakpoints.down("xs")]: {
        height: "150px",
      },
      [theme.breakpoints.up("sm")]: {
        height: "300px",
      },
    },
    description: {
      [theme.breakpoints.down("xs")]: {
        minHeight: 100,
      },
      [theme.breakpoints.up("sm")]: {
        minHeight: "auto",
      },
    },
  })
);

interface IProps {
  heading: string;
  description: string;
  imageURL: string;
  link?: string;
}

const ContentCard: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageURL}
          title={props.heading}
        />
        <CardContent className={classes.description}>
          <Typography gutterBottom variant="h3" component="h2">
            {props.heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {props.link && (
        <CardActions>
          <Button size="small" color="primary">
            <a href={props.link}>Find {props.heading}'s Geocaches</a>
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ContentCard;
