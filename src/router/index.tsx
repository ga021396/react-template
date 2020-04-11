import App from "../App/App";
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Routers() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <App></App>
          </Route>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/dashboard">
            <div>dashboard</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
