import React, { Component } from "react";
import Colorbox from "../Colorbox/Colorbox";
import "./Pallette.css";
export default class Pallette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(el => <Colorbox color={el} />);
    return (
      <div className="Pallette">
        {/* navbar goes here */}
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
