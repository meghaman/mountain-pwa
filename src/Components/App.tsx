import React from "react";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import routes from "../Routing/routes";
import baseTheme from "./Themes/themes";
import { CssBaseline } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Switch>
        {routes
          .filter((route) => route.path)
          .map((route) => {
            return (
              <Route
                exact
                path={route.path}
                key={route.key}
                component={route.component}
              />
            );
          })}
      </Switch>
    </MuiThemeProvider>
  );
};

export default App;
