import React from "react";
import { Footer } from "./components/common/Layout/Footer";
import NavbarComponent from "./components/common/Layout/Navbar";
import DialogBox from "./components/containers/DialogBox/DialogBox";
import { connect } from "react-redux";

const App = ({ user }) => {
  return (
    <>
      <NavbarComponent user={user} />
      <DialogBox />

      <div className="container body-content mt-5">
        <h2>Hello, {user.login}</h2>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(App);
