import React, { Component } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Pallette from "./Components/Pallette/Pallette";
import seedcolors from "./seed-colors";
import { generatePalette } from "./Helpers/Colorhelper";

import Palettelist from "./Components/Palettelist.js/Palettelist";
import Colorshades from "./Components/ColorShades/Colorshades";
import Paletteform from "./Components/Paletteform/Paletteform";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedcolors };
  }
  findPalette = id => {
    return this.state.palettes.find(color => color.id === id);
  };
  addPalette = palette => {
    console.log("this is what passed ", palette);
    const newPalettes = [...this.state.palettes, palette];
    this.setState({ palettes: newPalettes });
    setTimeout(() => {
      console.log("palette added", this.state.palettes);
    }, 400);
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Palettelist palettes={this.state.palettes} />}
        ></Route>
        <Route
          path="/palette/new"
          exact
          render={routeprops => (
            <Paletteform
              addPalette={this.addPalette}
              {...routeprops}
              palettes={this.state.palettes}
            />
          )}
        ></Route>
        <Route
          exact
          path="/palette/:id"
          render={props => (
            <Pallette
              palette={generatePalette(this.findPalette(props.match.params.id))}
            />
          )}
        ></Route>
        <Route
          path="/palette/:pid/:cid"
          exact
          render={props => (
            <Colorshades
              palette={generatePalette(
                this.findPalette(props.match.params.pid)
              )}
              colorId={props.match.params.cid}
              paletteId={props.match.params.pid}
            />
          )}
        ></Route>
      </Switch>
    );
  }
}

export default App;
