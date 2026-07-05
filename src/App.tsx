import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Layout/Footer";
import DialogBox from "./components/containers/DialogBox";
import NavbarComponent from "./components/common/Layout/Navbar";
import Home from "./components/containers/Home";
import { RootState } from "./types";

interface AppProps {
  user: RootState['user'];
  buy: RootState['buy'];
}

const App = ({ user, buy }: AppProps) => {
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

const mapStateToProps = (state: RootState) => ({
  user: state.user,
  buy: state.buy
});

export default connect(mapStateToProps, null)(App);
