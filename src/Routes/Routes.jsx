import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../Pages/App/App";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import LandingPage from "../Pages/LandingPage/LandingPage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/app">
            <App />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
