import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container-fluid">
      <Navbar color="light" light expand="md" bg="dark">
        <div className="container">
          <NavbarBrand tag={Link} to={"/"}>
            Menotios
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to={"/abyssal"}>
                  파티원정
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={"/tracker"}>
                  참여 현황
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>SnowNooDLe</NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
