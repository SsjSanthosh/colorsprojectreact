import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pallette from "./Components/Pallette/Pallette";
import seedcolors from "./seed-colors";
import { generatePalette } from "./Helpers/Colorhelper";
function App() {
  return <Pallette palette={generatePalette(seedcolors[4])} />;
}

export default App;
