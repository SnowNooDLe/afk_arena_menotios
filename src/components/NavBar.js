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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  파티원정
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink tag={Link} to={"/abyssal_s1"}>
                      시즌 1
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to={"/abyssal_s2"}>
                      시즌 2
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to={"/abyssal_s3"}>
                      시즌 3
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to={"/abyssal_s5"}>
                      시즌 5
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} to={"/rcmdeck"}>
                  시즌 3 추천 스타팅 덱
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={"/tracker"} disabled={true}>
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
