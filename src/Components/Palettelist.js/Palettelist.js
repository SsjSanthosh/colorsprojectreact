import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Palettelist extends Component {
  render() {
    console.log(this.props.palettes);
    const h1 = this.props.palettes.map(el => (
      <Link to={`/palette/${el.id}`} exact>
        <h1>{el.paletteName}</h1>
      </Link>
    ));
    console.log(h1);
    return (
      <div>
        <h1>Home Page!</h1>
        {h1}
      </div>
    );
  }
}
