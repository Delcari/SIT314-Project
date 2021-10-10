import React from "react";
import Navbar from "./components/Navigation";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Configure from "./pages/Configure";

function App() {
  return (
    <BrowserRouter>
      <div className="pt-20">
        <Navbar />
        <Switch>
          <Route path={["/login", "/"]} component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/configure" exact>
            {!sessionStorage.getItem("id") ? (
              <Redirect to="/login" />
            ) : (
              <Configure />
            )}
          </Route>
          <Route path="/dashboard" exact>
              <Dashboard />
          </Route>
          <Route path="/about" component={About} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
