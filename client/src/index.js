import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

// Material Kit
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import indexRoutes from "./routes/index.jsx";

// CSS
import "./assets/jss/scss/material-kit-react.css";

// *****************

// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();