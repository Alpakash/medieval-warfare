import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { ReactComponent as GoldSVG } from "../../../assets/images/svg-icons/ingots.svg";
import { ReactComponent as AvatarSVG } from "../../../assets/images/svg-icons/gamer.svg";
import { showDialog } from "../../../redux/actions/dialogActions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './styles.css';

const NavbarComponent = ({ user, showDialog }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Medieval Warfare</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" >Home</Link>
          <Link to="/avatar" className="nav-link">Avatar</Link>
          <Nav.Link className="buyButton" onClick={() => showDialog(true)}>Buy</Nav.Link>
        </Nav>
        <span className="navbar-right navbar-text mr-4">
          <GoldSVG width="40px" height="40px" />
          <span className="d-flex">{user?.balance}</span>
        </span>
        <a href="/avatar" className="navbar-right navbar-text">
          <AvatarSVG width="40px" height="40px" />
          <span className="d-flex">{user?.name}</span>
        </a>
      </Container>
    </Navbar>
  );
};

export default connect(null, { showDialog })(NavbarComponent);