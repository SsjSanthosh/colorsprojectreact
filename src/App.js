import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Pallette from "./Components/Pallette/Pallette";
import seedcolors from "./seed-colors";
import { generatePalette } from "./Helpers/Colorhelper";

import Palettelist from "./Components/Palettelist.js/Palettelist";
import Colorshades from "./Components/ColorShades/Colorshades";
class App extends Component {
  findPalette = id => {
    return seedcolors.find(color => color.id === id);
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Palettelist palettes={seedcolors} />}
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
