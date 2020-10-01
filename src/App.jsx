import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Layout/Footer";
import DialogBox from "./components/containers/DialogBox";
import NavbarComponent from "./components/common/Layout/Navbar";
import Home from './components/containers/Home';
import Avatar from './components/Avatar';

const App = ({ user }) => {
  return (
    <Router>
      <NavbarComponent user={user} />
      <DialogBox />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/avatar">
          <Avatar />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(App);
