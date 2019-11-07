import React from "react";
import { withStyles } from "@material-ui/styles";
import style from "./styles.js";
import DeleteIcon from "@material-ui/icons/Delete";
function Minipalette(props) {
  const { classes } = props;
  let { colors, emoji, paletteName, id } = props.palette;
  const boxes = colors.map(color => (
    <div
      className={classes.color}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));

  const deletePalette = e => {
    e.preventDefault();
    props.deleteMiniPalette(id);
  };
  return (
    <div className={classes.root}>
      <span
        className={classes.deleteIcon}
        onClick={e => {
          deletePalette(e);
        }}
      >
        <DeleteIcon />
      </span>
      <div className={classes.colors}>{boxes}</div>
      <div className={classes.info}>
        <span className={classes.title}>{paletteName}</span>
        <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(style)(Minipalette);
