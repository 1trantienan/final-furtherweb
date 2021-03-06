import React from "react";
import "./navbar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

function HeaderNav() {
  const location = useLocation();
  let isActive = (value) => {
    if (value === location.pathname) {
      return "active-nav-link";
    }
    return "";
  };
  return (
    <div className="navBarComponent" role="navigation">
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="navBarColor"
      >
        <Navbar.Brand href="/dashboard">Covid-19 Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard" className={isActive("/")}>
            <i class="fa fa-home" aria-hidden="true"></i> Home
            </Nav.Link> 

            <NavDropdown title="Vaccination" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="/vaccination"
                className={isActive("/vaccination")}
              >
                Vaccination Status
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/vaccineCompany"
                className={isActive("/vaccineCompany")}
              >
                Vaccine Manufacture
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/covidInfo" className={isActive("/covidInfo")}>
            <i class="fa fa-info-circle" aria-hidden="true"></i> COVID-19 Info
            </Nav.Link>
            <Nav.Link eventKey={2} href="/about" className={isActive("/about")}>
            <i class="fa fa-user-circle" aria-hidden="true"></i> About
            </Nav.Link>
          </Nav>
          <Nav.Link href="/login" className={isActive("/login")}>
              Log in
            </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default HeaderNav;
;