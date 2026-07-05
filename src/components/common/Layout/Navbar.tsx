import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import GoldSVG from "../../../assets/images/svg-icons/ingots.svg?react";
import AvatarSVG from "../../../assets/images/svg-icons/gamer.svg?react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../LoginButton";
import LogoutButton from "../../LogoutButton";
import logo from "../../../assets/images/logo-cross-swords.png";
import { useStore } from "../../../store";

const NavbarComponent = () => {
  const { isAuthenticated } = useAuth0();
  const user = useStore((state) => state.user);
  const showDialog = useStore((state) => state.showDialog);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="Medieval Warfare logo"
          />
          Medieval Warfare
        </Navbar.Brand>
        {isAuthenticated ? (
          <>
            <Nav className="mr-auto">
              <NavLink to="/" exact={true} className="nav-link">
                Home
              </NavLink>
              <Nav.Link className="buyButton" onClick={() => showDialog(true)}>
                Buy
              </Nav.Link>
            </Nav>
            <span className="navbar-right navbar-text mr-4 mobile-hide">
              <GoldSVG width="40px" height="40px" className="ml-5" />
              <span className="d-flex ml-2">
                <strong>{user?.balance}</strong>&nbsp; current gold
              </span>
            </span>
            <div className="navbar-right navbar-text">
              <AvatarSVG width="40px" height="40px" />
              <span className="d-flex">{user?.name}</span>
            </div>
          </>
        ) : null}
      </Container>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Navbar>
  );
};

export default NavbarComponent;