import React, { Component } from "react";
import Colorbox from "../Colorbox/Colorbox";

import "./Pallette.css";
import Navbar from "../Navbar/Navbar";

export default class Pallette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 600, format: "hex" };
  }
  changeLevel = n => {
    this.setState({ level: n });
  };

  handleFormatChange = format => {
    console.log(format);
    this.setState({ format });
  };
  render() {
    const palette = this.props.palette;
    console.log(palette);
    const name = palette.paletteName;
    console.log(name);
    const emoji = palette.emoji;
    const level = this.state.level;
    const colorBoxes = palette.colors[level].map(el => (
      <Colorbox color={el} format={this.state.format} />
    ));
    return (
      <div className="Pallette">
        {/* navbar goes here */}
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          handleFormatChange={this.handleFormatChange}
        />
        <div className="Palette-slider"></div>
        <div className="Pallette-colors">
          {/* buncha colors */}
          {colorBoxes}

          {/* color box */}
        </div>
        <footer className="Palette-footer">
          {name} {emoji}
        </footer>
      </div>
    );
  }
}
