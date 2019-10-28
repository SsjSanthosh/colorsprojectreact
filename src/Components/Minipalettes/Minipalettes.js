import React from "react";
import { withStyles } from "@material-ui/styles";

const style = {
  root: {
    padding: "0.7rem",
    backgroundColor: "white",
    borderRadius: "5px",
    margin: "0.5rem"
  },
  colors: {
    width: "100%",
    height: "190px",
    backgroundColor: "#34495E",
    borderRadius: "5px",
    overflow: "hidden"
  },
  info: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    color: "black",
    fontSize: "1.2rem"
  },
  emoji: {
    color: "black"
  },
  color: {
    width: "20%",
    height: "25%",
    marginBottom: "-4px",
    display: "inline-block",
    overflow: "hidden"
  }
};
function Minipalette(props) {
  const { classes } = props;
  let { colors, emoji, paletteName } = props.palette;
  const boxes = colors.map(color => (
    <div
      className={classes.color}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{boxes}</div>
      <div className={classes.info}>
        <span className={classes.title}>{paletteName}</span>
        <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(style)(Minipalette);
