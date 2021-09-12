import FormContainer from "./components/FormContainer";
import AccountContainer from "./components/AccountContainer";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/account/:id" component={AccountContainer}>
            </Route>
            <Route path="/">
              <FormContainer/>
            </Route>
            <Route path="/a">
              <FormContainer/>
            </Route>
          </Switch>
      </Router>
  );
}
