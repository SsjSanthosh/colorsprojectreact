import React, { Component } from "react";
import Colorbox from "../Colorbox/Colorbox";

import "./Pallette.css";
import Navbar from "../Navbar/Navbar";

export default class Pallette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
  }
  changeLevel = n => {
    this.setState({ level: n });
  };
  render() {
    const palette = this.props.palette;
    const level = this.state.level;
    const colorBoxes = palette.colors[level].map(el => <Colorbox color={el} />);
    return (
      <div className="Pallette">
        {/* navbar goes here */}
        <Navbar level={this.state.level} changeLevel={this.changeLevel} />
        <div className="Palette-slider"></div>
        <div className="Pallette-colors">
          {/* buncha colors */}
          {colorBoxes}
          MORE SHADEES
          {/* color box */}
        </div>
      </div>
    );
  }
}
