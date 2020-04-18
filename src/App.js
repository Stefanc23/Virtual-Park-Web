import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Animals from "./components/animals";
import Zones from "./components/zones";
import About from "./components/about";

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
