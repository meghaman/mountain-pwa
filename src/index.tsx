import React from "react";
import { render } from "react-dom";

import App from "./Components/App";
import { Router } from "react-router-dom";
import history from "./history";

const rootElement = document.getElementById("root");

render(
  <Router history={history}>
    <App></App>
  </Router>,
  rootElement
);
