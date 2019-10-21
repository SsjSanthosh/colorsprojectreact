import React, { Component } from "react";
import "./Colorbox.css";
import "../utilities.css";
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
    const { name, color } = this.props.color;
    const copied = this.state.copied;
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div className="Colorbox" style={{ background: this.props.color.rgb }}>
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
              <span class="box-name">{name}</span>
            </div>
            <button className="copy-btn">Copy</button>
            <span className="box-more">More</span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
