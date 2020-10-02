import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";

import History from "utils/History";
import NavBar from "components/NavBar";

import Home from "views/Home";
import Abyssal from "views/Abyssal";

function App() {
  return (
    <Router history={History}>
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/abyssal" exact component={Abyssal} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
