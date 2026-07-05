import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Layout/Footer";
import DialogBox from "./components/containers/DialogBox";
import NavbarComponent from "./components/common/Layout/Navbar";
import Home from "./components/containers/Home";

const App = () => {
  const routes = [{ path: "/", component: Home }];

  return (
    <Router>
      <NavbarComponent />
      <DialogBox />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;