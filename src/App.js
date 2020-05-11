import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Animals from "./components/Animals";
import Zones from "./components/Zones";
import About from "./components/About";
import Info from "./components/Info";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/zones/:name" component={Info} />
        <Route path="/attractions/:name" component={Info} />
        <Route path="/animals/:name" component={Info} />
        <Route path="/animals" component={Animals} />      
        <Route path="/zones" component={Zones} />      
        <Route path="/about" component={About} />
      </Switch>      
    </Router>
  );
}

export default App;
