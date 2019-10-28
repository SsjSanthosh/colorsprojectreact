import React, { Component } from "react";
import "./Colorbox.css";
import "../utilities.css";
import { Link } from "react-router-dom";
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
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div className="Colorbox" style={{ background: color }}>
          <div
            className={`copy-overlay${copied ? " show" : ""}`}
            style={{ background: color }}
          ></div>
          <div className={`copy-msg${copied ? " show" : ""}`}>
            <h1>COPIED</h1>
            <span>{color}</span>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className="box-name">{name}</span>
            </div>
            <button className="copy-btn">Copy</button>
            {showLink && (
              <Link
                to={`/palette/${paletteId}/${colorId}`}
                exact
                onClick={e => e.stopPropagation()}
              >
                <span className="box-more">More</span>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
