import React, { Component } from "react";
import Colorbox from "../Colorbox/Colorbox";
import "./Pallette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
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
