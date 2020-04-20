import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Animals from "./components/Animals";
import Zones from "./components/Zones";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/animals" component={Animals} />
      <Route path="/zones" component={Zones} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
