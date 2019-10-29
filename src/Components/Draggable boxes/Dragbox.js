import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
const style = {
  root: {
    width: "20%",
    height: "23vh",
    display: "inline-block",
    marginTop: "-6px",

    padding: "0"
  }
};
function Dragbox(props) {
  const { classes, color } = props;
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: props.color }}
    ></div>
  );
}

export default withStyles(style)(Dragbox);
