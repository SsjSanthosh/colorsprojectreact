import React from "react";
import { withStyles } from "@material-ui/core";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import sizes from "../../Helpers/Breakpoint";
const style = {
  root: {
    width: "20%",
    cursor: "pointer",
    height: "23vh",
    display: "inline-block",
    marginTop: "-6px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    },
    padding: "0",
    [sizes.down("lg")]: {
      width: "25%",
      height: "18vh"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "8vh"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5vh"
    }
  },
  boxContent: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  boxName: {
    fontSize: "1.5rem",
    color: "white",
    marginLeft: "0.4rem"
  },
  boxIcon: {
    color: "rgba(0,0,0,0.5)",
    transition: "all 0.3s ease-in-out"
  }
};
const Dragbox = SortableElement(props => {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span className={classes.boxName}>{props.name}</span>
        <span className={classes.boxIcon}>
          <DeleteIcon onClick={props.handleDelete} />
        </span>
      </div>
    </div>
  );
});

export default withStyles(style)(Dragbox);
