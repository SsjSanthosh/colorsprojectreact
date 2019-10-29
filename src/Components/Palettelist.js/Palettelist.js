import React, { Component } from "react";
import { Link } from "react-router-dom";
import Minipalette from "../Minipalettes/Minipalettes";
import { withStyles } from "@material-ui/styles";
const style = {
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "royalblue"
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    textAlign: "center"
  },
  miniboxContainer: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridColumnGap: "5%"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between"
  },
  formLink: {
    color: "white",
    borderBottom: "2px solid black",
    "&:hover": {
      color: "black",
      borderBottom: "2px solid white"
    }
  }
};
class Palettelist extends Component {
  render() {
    console.log(this.props.palettes);
    const { classes } = this.props;
    const miniPalettes = this.props.palettes.map(el => (
      <Link to={`/palette/${el.id}`} exact>
        <div className={classes.minibox}>
          <Minipalette palette={el} />
        </div>
      </Link>
    ));

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.nav}>
            <div className={classes.title}>Home Page!</div>
            <Link to="/palette/new" exact>
              <div className={classes.formLink}>Create a new palette</div>
            </Link>
          </h1>
          <div className={classes.miniboxContainer}>{miniPalettes}</div>
        </div>
      </div>
    );
  }
}
export default withStyles(style)(Palettelist);
