import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "components/NavBar";

import Home from "views/Home";
import AbyssalS1 from "views/AbyssalS1";
import AbyssalS2 from "views/AbyssalS2";
import AbyssalS3 from "views/AbyssalS3";
import RecommendDeck from "views/RecommendDeck"
import Tracker from "views/Tracker";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/abyssal_s1" exact component={AbyssalS1} />

            <Route path="/abyssal_s2" exact component={AbyssalS2} />

            <Route path="/abyssal_s3" exact component={AbyssalS3} />

            <Route path="/rcmdeck" exact component={RecommendDeck} />

            <Route path="/tracker" exact component={Tracker} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
