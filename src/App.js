import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Pallette from "./Components/Pallette/Pallette";
import seedcolors from "./seed-colors";
import { generatePalette } from "./Helpers/Colorhelper";
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
          render={() => <h1>Palette home page!</h1>}
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
      </Switch>
    );
  }
}

export default App;
