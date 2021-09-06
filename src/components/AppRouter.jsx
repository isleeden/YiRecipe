import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "routes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
