import React, { Component } from "react";
import { Link } from "react-router-dom";
import Minipalette from "../Minipalettes/Minipalettes";
import { withStyles } from "@material-ui/styles";

import style from "./styles.js";
class Palettelist extends Component {
  render() {
    const { classes } = this.props;
    const miniPalettes = this.props.palettes.map(el => (
      <Link to={`/palette/${el.id}`} exact>
        <div className={classes.minibox}>
          <Minipalette
            palette={el}
            deleteMiniPalette={this.props.deleteMiniPalette}
          />
        </div>
      </Link>
    ));

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.nav}>
            <div className={classes.title}>React Colors App!</div>
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
