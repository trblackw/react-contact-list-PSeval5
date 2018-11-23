import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import NewContact from "./components/NewContact";

const App = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route path="/new" component={NewContact} />
      </Switch>
    </Router>
  </Fragment>
);

export default App;
