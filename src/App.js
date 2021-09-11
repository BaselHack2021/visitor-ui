import FormContainer from "./components/FormContainer";
import DashboardContainer from "./components/DashboardContainer";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/dashboard">
              <DashboardContainer />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <FormContainer/>
            </Route>
          </Switch>
      </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


//
//
// function App() {
//   return (
//     <FormContainer></FormContainer>
//   );
// }

// export default App;
