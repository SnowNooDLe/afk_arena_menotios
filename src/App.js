import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "components/NavBar";

import Home from "views/Home";
import Abyssal from "views/Abyssal";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/abyssal" exact component={Abyssal} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
