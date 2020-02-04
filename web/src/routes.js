import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/spots/new" component={Form} />
        <Route path="/spots/:id" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}
