import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: true };
  }
  handleFormatChange = e => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleFormatChange(e.target.value);
  };
  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel, showSlider } = this.props;
    const { format } = this.state;
    return (
      <nav className="Navbar">
        <div className="logo">
          <Link to="/" exact>
            {" "}
            reactcolorapp
          </Link>
        </div>

        {showSlider && (
          <div>
            <div className="slider-level">Level : {level}</div>
            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className="select-container ">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.closeSnackbar}
            message={<span>Format changed to {this.state.format}</span>}
            action={[
              <IconButton onClick={this.closeSnackbar}>
                <CloseIcon color="inherit" />
              </IconButton>
            ]}
          ></Snackbar>
        </div>
      </nav>
    );
  }
}
