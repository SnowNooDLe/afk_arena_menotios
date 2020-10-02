import React from "react";
import { Navbar, Nav, NavLink, NavbarBrand } from "reactstrap";
import { NavLink as RouterNavLink, Link } from "react-router-dom";

import "assets/style/NavBar.css";

const MainNav = () => {
  return (
    <Nav className="mr-auto" navbar>
      <NavLink
        tag={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>
      <NavLink
        tag={RouterNavLink}
        to="/Abyssal"
        exact
        activeClassName="router-link-exact-active"
      >
        파티원정
      </NavLink>
    </Nav>
  );
};
const NavBar = () => {
  return (
    <Navbar color="light" light expand="md" bg="dark">
      <div className="container-fluid max-width">
        <NavbarBrand tag={Link} to={"/"}>
          Menotios
        </NavbarBrand>

        <MainNav />
      </div>
    </Navbar>
  );
};

export default NavBar;
