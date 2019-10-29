import React, { Component } from "react";
import "./Colorbox.css";
import "../utilities.css";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default class Colorbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }
  handleCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1500);
  };
  render() {
    const name = this.props.color.name;
    const format = this.props.format;

    const color = this.props.color[format];
    const copied = this.state.copied;
    const paletteId = this.props.id;
    const showLink = this.props.showLink;
    const colorId = this.props.color.id;
    const isDarkColor = chroma(color).luminance() <= 0.08;
    const isLightColor = chroma(color).luminance() >= 0.7;
    console.log(isLightColor);

    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div className="Colorbox" style={{ background: color }}>
          <div
            className={`copy-overlay${copied ? " show" : ""}`}
            style={{ background: color }}
          ></div>
          <div className={`copy-msg${copied ? " show" : ""}`}>
            <h1 className={` ${isLightColor && "dark-text"}`}>COPIED</h1>
            <span className={` ${isLightColor && "dark-text"}`}>{color}</span>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={`box-name ${isDarkColor && "light-text"}`}>
                {name}
              </span>
            </div>
            <button className={`copy-btn ${isLightColor && "dark-text"}`}>
              Copy
            </button>
            {showLink && (
              <Link
                to={`/palette/${paletteId}/${colorId}`}
                exact
                onClick={e => e.stopPropagation()}
              >
                <span className={`box-more ${isLightColor && "dark-text"}`}>
                  More
                </span>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
