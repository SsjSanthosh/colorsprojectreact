import React, { Component } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Button } from "@material-ui/core";
import PaletteDialog from "../PaletteDialog/Palettedialog";

export default class PaletteformNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: ""
    };
  }

  render() {
    const {
      open,

      classes,
      handleDrawerOpen
    } = this.props;
    return (
      <div>
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.createTitle} noWrap>
              Create your own palette!
            </Typography>
            {/*  */}
            <PaletteDialog
              classes={classes}
              palettes={this.props.palettes}
              handleSubmit={this.props.handleSubmit}
            />
            <Link to="/" exact="true">
              <Button
                color="secondary"
                className={classes.btn2}
                variant="contained"
              >
                Go back
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
