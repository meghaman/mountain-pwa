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

const MainLayout: React.FC = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DefaultToolbar></DefaultToolbar>
        {props.children}
      </div>
    </>
  );
};

export default MainLayout;
