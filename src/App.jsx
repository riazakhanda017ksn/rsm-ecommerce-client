import React from "react";
import Navbar from "./components/share/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <>
    <Router>
        <Switch>
           <Route exact path='/'>
              <Layout />
           </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
