import React, { Component } from "react";
import "./Colorbox.css";
import "../utilities.css";
export default class Colorbox extends Component {
  render() {
    const { name, color } = this.props.color;
    return (
      <div className="Colorbox" style={{ background: this.props.color.color }}>
        <div className="copy-container">
          <div className="box-content">
            <span class="box-name">{name}</span>
          </div>
          <button className="copy-btn">Copy</button>
          <span className="box-more">More</span>
        </div>
      </div>
    );
  }
}
