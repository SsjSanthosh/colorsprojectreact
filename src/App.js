import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pallette from "./Components/Pallette/Pallette";
import seedcolors from "./seed-colors";
function App() {
  const cols = [...seedcolors[4].colors];
  return <Pallette colors={cols} />;
}

export default App;
