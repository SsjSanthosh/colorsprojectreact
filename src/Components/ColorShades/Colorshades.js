import React, { Component } from "react";
import Colorbox from "../Colorbox/Colorbox";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import "./style.css";
export default class Colorshades extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades();
    console.log(this._shades);
    this.state = {
      format: "hex"
    };
  }
  gatherShades = () => {
    let shades = [];
    console.log(this.props.palette);
    let colors = this.props.palette.colors;
    for (let c in colors) {
      shades = shades.concat(
        colors[c].filter(color => color.id === this.props.colorId)
      );
    }
    return shades.slice(1);
  };
  handleFormatChange = format => {
    console.log(format);
    this.setState({ format });
  };
  render() {
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <Colorbox
        key={uniqid()}
        color={color}
        format={this.state.format}
        name={color.name}
        showLinks={false}
      />
    ));
    return (
      <div>
        <Navbar
          handleFormatChange={this.handleFormatChange}
          showSlider={false}
        />

        <div className="Colorshades">
          {" "}
          {colorBoxes}
          <div className="Colorbox go-back">
            <Link to={`/palette/${this.props.paletteId}`}>
              {" "}
              <button className="copy-btn">Go back</button>
            </Link>
          </div>
        </div>
        <footer className="Palette-footer">
          {paletteName} {emoji}
        </footer>
      </div>
    );
  }
}
