import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";

const App = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Contacts} />
      </Switch>
    </Router>
  </Fragment>
);

export default App;
