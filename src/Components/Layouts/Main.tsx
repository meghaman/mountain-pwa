import { makeStyles, Theme, createStyles } from "@material-ui/core";
import DefaultToolbar from "../AtomicComponents/DefaultToolbar";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      justifyContent: "center",
    },
  })
);

interface IProps {
  toolbarURL?: string;
  toolbarText?: string;
  homeIcon?: boolean;
}

const MainLayout: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DefaultToolbar
          backText={props.toolbarText || "Back to Mount Sinai Website"}
          backURL={props.toolbarURL || "https://www.mountsinai.on.ca/"}
          backIcon={props.homeIcon}
        ></DefaultToolbar>
        {props.children}
      </div>
    </>
  );
};

export default MainLayout;
