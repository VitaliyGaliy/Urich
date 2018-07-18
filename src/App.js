import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import News from "./components/News";
import Profile from "./components/Profile";
import PrivateRoute from "./components/Auth";



const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/news" component={News} />
    </Fragment>
  </Router>
);

export default App;